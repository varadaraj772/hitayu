import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseConfig from "../config";
import { initializeApp } from "firebase/app";
//import Compressor from "compressorjs";

const BlogForm = ({ onFormSubmit, blog, isAdmin }) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  isAdmin = true;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setImageUrl(blog.imageUrl || "");
    } else {
      setTitle("");
      setContent("");
      setImageFile(null);
      setImageUrl("");
    }
  }, [blog]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      alert("You are not authorized to add or edit blogs!");
      return;
    }

    if (!title || !content) {
      alert("Please fill in all required fields!");
      return;
    }

    // Upload image if selected
    if (imageFile) {
      const imageRef = ref(storage, `images/${imageFile.name}`);
      const uploadTask = uploadBytes(imageRef, imageFile);

      try {
        await uploadTask;
        const downloadedUrl = await getDownloadURL(imageRef);
        setImageUrl(downloadedUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image!");
        return;
      }
    }

    const data = { title, content, imageUrl };

    if (blog) {
      const blogDoc = doc(db, "blogs", blog.id);
      await updateDoc(blogDoc, data);
    } else {
      await addDoc(collection(db, "blogs"), data);
    }

    onFormSubmit();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Compress the image using Compressor.js
    // new Compressor(file, {
    //   quality: 0.7, // Adjust quality as needed
    //   success(compressedFile) {
    //     setImageFile(compressedFile);
    //   },
    //   error(err) {
    //     console.error("Error compressing image:", err);
    //   },
    // });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      {" "}
      <div className="mb-4">
        {" "}
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title{" "}
        </label>{" "}
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />{" "}
      </div>{" "}
      <div className="mb-4">
        {" "}
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          Content{" "}
        </label>{" "}
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Image (Optional)
        </label>
        <input
          type="file"
          onChange={handleImageChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {blog ? "Update" : "Add"} Blog
      </button>
    </form>
  );
};

export default BlogForm;

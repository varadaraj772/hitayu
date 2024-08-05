import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getFirestore,
} from "firebase/firestore";
import firebaseConfig from "../config";
import BlogForm from "./BlogForm";
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
const BlogList = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  //const auth = getAuth();

  const fetchBlogs = async () => {
    const blogsCollection = await getDocs(collection(db, "blogs"));
    setBlogs(
      blogsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
    fetchBlogs();
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
  };

  const handleFormSubmit = () => {
    fetchBlogs();
    setSelectedBlog(null);
  };

  const isAdmin = () => {
    // const user = auth.currentUser;

    return true; // Replace with your admin email
  };

  return (
    <div>
      {isAdmin() && (
        <BlogForm onFormSubmit={handleFormSubmit} blog={selectedBlog} />
      )}
      <div className="flex flex-wrap -mx-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
                <p className="text-gray-700 text-base">{blog.content}</p>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between">
                {isAdmin() && ( // Display buttons only for admins
                  <>
                    <button
                      onClick={() => handleEdit(blog)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

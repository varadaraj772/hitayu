import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import "tailwindcss/tailwind.css";

const firebaseConfig = {
  apiKey: "AIzaSyBSQVQZ2vofQKoCk-jqanOTcNUBNLAziG0",
  authDomain: "hitayu-52925.firebaseapp.com",
  projectId: "hitayu-52925",
  storageBucket: "hitayu-52925.appspot.com",
  messagingSenderId: "843226559192",
  appId: "1:843226559192:web:5914d266638717fe5b9dad",
  measurementId: "G-SJ020FL8ZY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Create Account"}
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <button
          onClick={handleAuth}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>
        <div className="my-4 text-center text-gray-600">or</div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200 flex items-center justify-center"
        >
          Sign in with Google
        </button>
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Create one"
              : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

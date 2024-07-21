import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import "tailwindcss/tailwind.css";
import firebaseConfig from "../cofig";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const doctors = ["d1", "d2", "d3"];
const Consultation = () => {
  const [user, setUser] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    setSuccess("");
    setError("");
  }, [selectedDoctor, date, time]);

  const handleBooking = async () => {
    if (!user) {
      setError("You must be logged in to make a booking.");
      return;
    }

    try {
      const q = query(
        collection(db, "bookings"),
        where("doctor", "==", selectedDoctor),
        where("date", "==", date),
        where("time", "==", time)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("This slot is already booked. Please choose another time.");
        return;
      }

      await addDoc(collection(db, "bookings"), {
        doctor: selectedDoctor,
        date,
        time,
        userId: user.uid,
      });

      setSuccess("Your booking is confirmed!");
    } catch (err) {
      setError("Failed to book. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Book Consultation
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Doctor</label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            min="10:00"
            max="17:00"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <button
          onClick={handleBooking}
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Consultation;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RoomCard = ({ photo, name, location, viewLink, galleryLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img
        className="w-full h-48 object-cover"
        src={photo}
        alt={`${name} photo`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{location}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <Link
          to="/RGallery"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          360 View
        </Link>
        <Link
          to="/consultation"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          BOOK NOW
        </Link>
        <Link
          to="/RGallery"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Gallery
        </Link>
      </div>
    </div>
  );
};
export default RoomCard;

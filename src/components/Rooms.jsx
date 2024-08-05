import RoomCard from "./RoomCard";

const roomsData = [
  {
    id: 1,
    name: "Deluxe Room",
    location: "New York",
    photo: "https://via.placeholder.com/300",
    viewLink: "https://example.com/360-view-1",
    galleryLink: "https://example.com/gallery-1",
  },
  {
    id: 2,
    name: "Standard Room",
    location: "Los Angeles",
    photo: "https://via.placeholder.com/300",
    viewLink: "https://example.com/360-view-2",
    galleryLink: "https://example.com/gallery-2",
  },
  // Add more room objects as needed
];

const Rooms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        {roomsData.map((room) => (
          <div key={room.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <RoomCard
              photo={room.photo}
              name={room.name}
              location={room.location}
              viewLink={room.viewLink}
              galleryLink={room.galleryLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;

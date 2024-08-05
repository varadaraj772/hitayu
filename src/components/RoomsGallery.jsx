function RoomsGallery() {
  const roomImages = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  const roomVideos = [
    "https://www.youtube.com/embed/eEzD-Y97ges?si=U4HR7n6j0JHz5ESx",
  ];

  return (
    <div className="container mx-auto">
      {/* Room images section */}
      <div className="grid grid-cols-2 gap-4">
        {roomImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Room ${index + 1}`}
            className="w-full h-96 object-cover"
          />
        ))}
      </div>

      {/* Room videos section */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        {roomVideos.map((video, index) => (
          <iframe
            key={index}
            width="560"
            height="315"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default RoomsGallery;

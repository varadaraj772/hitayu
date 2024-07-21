import pic1 from "../assets/p1.jpg";
import pic3 from "../assets/p3.jpg";
import pic4 from "../assets/p4.jpg";
import pic5 from "../assets/p5.jpg";

const Gallery = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/laNA2HgwYXU?si=rXT_woCNaXAt-itP&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="grid grid-cols-2 gap-4">
          <img src={pic1} alt="Gallery" className="w-full h-auto rounded-lg" />
          <img
            src={pic3}
            alt="Gallery"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
          <img
            src={pic4}
            alt="Gallery"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
          <img
            src={pic5}
            alt="Gallery"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;

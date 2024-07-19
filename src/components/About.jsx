import hitayu from "../assets/hitayu.jpg";
function About() {
  return (
    <div className="container mx-2 py-14">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Unveiling Wholeness: Your Journey Starts at Hitaayu Ayurveda Centre
          </h2>
          <p className="text-gray-700 leading-loose">
            Hitayu Ayurveda was established it in 2005, with the vision of
            bringing back Ayurveda as one of the mainstream health systems.
            Developing ayurvedic treatments and specialized herbal remedies for
            chronic health problems arising out of modern life style is our key
            area of interest.
            <br />
            At Hitaayu Ayurveda Centre, we believe in the transformative power
            of Ayurveda, the ancient Indian science of life. We offer a
            personalized path to wellness, combining time-tested wisdom with a
            compassionate approach.
          </p>
          <p className="text-gray-700 leading-loose mt-4">
            Our team of experienced practitioners will guide you through a
            journey tailored to your unique needs. We offer:
          </p>
          <ul className="list-disc pl-4 mt-4">
            <li className="text-gray-700">In-depth Ayurvedic consultations</li>
            <li className="text-gray-700">Personalized treatment plans</li>
            <li className="text-gray-700">Dietary guidance</li>
            <li className="text-gray-700">Yoga practices</li>
          </ul>
        </div>
        <div className="md:w-2/4 md:px-10 px-5">
          <img
            src={hitayu}
            alt="Clinic Image"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
      <p className="text-center text-gray-700 mt-8">
        Ready to embark on your path to wellness? Contact us today!
      </p>
    </div>
  );
}

export default About;

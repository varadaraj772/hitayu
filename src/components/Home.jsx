import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="w-full py-4 lg:py-8 px-4 flex flex-col lg:flex-row justify-between items-center bg-white shadow-md">
        <h1 className="text-gray-800 text-xl max-w-2xl mb-4 lg:mb-0">
          {" "}
          Ayurveda means science or knowledge of life. It is one of the most
          powerful mind-body health systems in the world. It teaches the way to
          live a well-balanced life, considering a healthy mind and spirit/soul.
        </h1>
        <div className="flex items-center">
          <a
            href="tel:9141074818"
            className="bg-transparent border border-gray-800 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-800 hover:text-white"
          >
            BOOK AN APPOINTMENT NOW
          </a>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 lg:py-24 pb-32">
        <div className="max-w-2xl text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What we offer?
          </h2>
          <p className="text-lg lg:text-xl text-gray-700">
            Unveiling your path to holistic wellness, our Ayurvedic clinic
            offers personalized consultations, detoxifying Panchakarma
            therapies, stress-melting massages, and herbal remedies. We will
            tailor a plan to your needs, including dietary adjustments, to bring
            your body, mind, and spirit into perfect harmony.
            <br />
            <Link
              to="/Rooms"
              className="text-red-800 font-bold text-base md:text-3xl"
            >
              Checkout our Rooms available{" "}
              <span role="img" aria-label="external link" className=" text-md">
                🔗
              </span>
            </Link>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 text-black shadow-lg w-full md:w-1/2 lg:w-1/3">
            <div className="p-6">
              <h1 className="text-black font-extrabold text-2xl">
                Pain Management
              </h1>
              <span className="">
                We understand neck & joint pain. Our personalized Galleryplans
                combine traditional & modern approach to help you find relief
                and improve your quality of life.
                <br />
                Click below to learn more!
              </span>
            </div>
            <div className="bg-white bg-opacity-25 p-4 flex justify-center items-center">
              <Link
                className="bg-white text-red-800 hover:bg-purple-100 text-lg font-semibold py-2 px-4 rounded-full"
                to="/CaseSheet"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 text-black shadow-lg w-full md:w-1/2 lg:w-1/3">
            <div className="p-6">
              <h1 className="text-black font-extrabold text-2xl">
                Pain Management
              </h1>
              <span className="">
                We understand neck & joint pain. Our personalized plans combine
                traditional & modern approach to help you find relief and
                improve your quality of life.
                <br />
                Click below to learn more!
              </span>
            </div>
            <div className="bg-white bg-opacity-25 p-4 flex justify-center items-center">
              <Link className="bg-white text-red-800 hover:bg-purple-100 text-lg font-semibold py-2 px-4 rounded-full">
                Book an Appointment
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 text-black shadow-lg w-full md:w-1/2 lg:w-1/3">
            <div className="p-6">
              <h1 className="text-black font-extrabold text-2xl">
                Pain Management
              </h1>
              <span className="">
                We understand neck & joint pain. Our personalized plans combine
                traditional & modern approach to help you find relief and
                improve your quality of life.
                <br />
                Click below to learn more!
              </span>
            </div>
            <div className="bg-white bg-opacity-25 p-4 flex justify-center items-center">
              <Link className="bg-white text-red-800 hover:bg-purple-100 text-lg font-semibold py-2 px-4 rounded-full">
                Book an Appointment
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 text-black shadow-lg w-full md:w-1/2 lg:w-1/3">
            <div className="p-6">
              <h1 className="text-black font-extrabold text-2xl">
                Pain Management
              </h1>
              <span className="">
                We understand neck & joint pain. Our personalized plans combine
                traditional & modern approach to help you find relief and
                improve your quality of life.
                <br />
                Click below to learn more!
              </span>
            </div>
            <div className="bg-white bg-opacity-25 p-4 flex justify-center items-center">
              <Link className="bg-white text-red-800 hover:bg-purple-100 text-lg font-semibold py-2 px-4 rounded-full">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

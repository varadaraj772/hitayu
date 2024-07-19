function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-stretch items-center">
      <div className="p-4 bg-transparent rounded-xl w-full md:w-auto">
        <div className="uppercase tracking-wide">
          <h1 className=" text-4xl text-black font-extrabold">Contact</h1>
        </div>
        <p className="mt-2 text-gray-500">Get in touch with us!</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62120.81661495533!2d74.7453634252854!3d13.315962080019766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb5a11220419%3A0x1607e4c1222199c1!2sHitaayu%20Ayurveda%20Centre!5e0!3m2!1sen!2sin!4v1721365367271!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="mt-4">
          <h2 className="text-gray-500">Email:</h2>
          <h2 className="font-semibold">ayurvedaudupi@gmail.com</h2>
          <h2 className="text-gray-500">Phone Number:</h2>
          <h2 className="font-semibold">9141074818</h2>
          <h2 className="text-gray-500">WhatsApp:</h2>
          <h2 className="font-semibold">9141074818</h2>
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:justify-between">
          <a
            href="mailto:ayurvedaudupi@gmail.com"
            className="w-full md:w-auto flex items-center justify-center px-4 py-2 mb-2 md:mb-0 bg-gray-800 text-white rounded hover:bg-gray-600"
          >
            <i className="fas fa-envelope mr-2"></i>Send Email
          </a>
          <a
            href="tel:9141074818"
            className="w-full md:w-auto flex items-center justify-center px-4 py-2 mb-2 md:mb-0 bg-gray-800 text-white rounded md:mx-3 hover:bg-gray-600"
          >
            <i className="fas fa-phone-alt mr-2"></i>Call Now
          </a>
        </div>
        <div className="mt-2 flex justify-center text-center">
          <a
            href="https://wa.me/9141074818"
            target="_blank"
            className="w-full md:w-auto flex items-center justify-center px-4 py-2 mb-2 md:mb-0 rounded bg-green-500 text-white  hover:bg-green-600"
          >
            {" "}
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

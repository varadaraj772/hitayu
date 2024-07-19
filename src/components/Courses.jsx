const courses = [
  {
    id: 1,
    title: "MS-OFFICE",
    type: "short-term",
  },
  {
    id: 2,
    title: "C PROGRAMMING",
    type: "short-term",
  },
  {
    id: 3,
    title: "TALLY with GST",
    type: "short-term",
  },
  {
    id: 4,
    title: "PEACHTREE",
    type: "short-term",
  },
  {
    id: 5,
    title: "BUSY",
    type: "short-term",
  },
  {
    id: 6,
    title: "ADOBE ILLUSTRATOR",
    type: "short-term",
  },
  {
    id: 7,
    title: "ADOBE PHOTOSHOP",
    type: "short-term",
  },
  {
    id: 8,
    title: "ADOBE PAGEMAKER",
    type: "short-term",
  },
  {
    id: 9,
    title: "ADOBE INDESIGN",
    type: "short-term",
  },
  {
    id: 10,
    title: "COREL DRAW",
    type: "short-term",
  },
  {
    id: 11,
    title: "HTML",
    type: "short-term",
  },
  {
    id: 12,
    title: "Adv MS-EXEL",
    type: "short-term",
  },
  {
    id: 13,
    title: "NUDI",
    type: "short-term",
  },
  {
    id: 14,
    title: "TYPING MASTER",
    type: "short-term",
  },
  {
    id: 15,
    title: "MS-WORD,ACCESS",
    type: "short-term",
  },
  {
    id: 16,
    title: "DIPLOMA IN COMPUTER APPLICATION",
    type: "long-term",
  },
  {
    id: 17,
    title: "BASIC COMPUTER APPLICATION",
    type: "long-term",
  },
  {
    id: 18,
    title: "DIPLOMA IN ACCOUNTING",
    type: "long-term",
  },
  {
    id: 19,
    title: "DIPLOMA IN HARDWARE & NETWORKING",
    type: "long-term",
  },
  {
    id: 20,
    title: "DIPLOMA IN FINANCE",
    type: "long-term",
  },
  {
    id: 21,
    title: "DIPLOMA IN WEB DESIGNING",
    type: "long-term",
  },
  {
    id: 22,
    title: "DIPLOMA IN GRAPHIC DESIGNING",
    type: "long-term",
  },

  {
    id: 29,
    title: "3D ANIMATION COURSE",
    type: "special-long-term",
  },
  {
    id: 30,
    title: "POST GRADUATION DIPLOMA IN COMPUTER APPLICATION",
    type: "special-long-term",
  },
];

const Courses = () => {
  const shortTermCourses = courses.filter(
    (course) => course.type === "short-term"
  );
  const longTermCourses = courses.filter(
    (course) => course.type === "long-term"
  );
  const specialLongTermCourses = courses.filter(
    (course) => course.type === "special-long-term"
  );

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Our Courses
      </h2>
      <section>
        <h3 className="text-3xl font-bold text-black mb-4 text-center md:text-left">
          Short-term Courses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shortTermCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold">{course.title}</h4>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-3xl font-bold text-black mb-4 mt-5 pt-3 text-center md:text-left">
          Long-term Courses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {longTermCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold">{course.title}</h4>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-3xl font-bold text-black mb-4 mt-5 pt-3 text-center md:text-left">
          Special Long-term Courses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialLongTermCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold">{course.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;

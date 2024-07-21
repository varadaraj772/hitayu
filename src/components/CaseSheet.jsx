import { useState } from "react";
import emailjs from "@emailjs/browser";
import jsPDF from "jspdf";

const CaseSheet = () => {
  const [formValues, setFormValues] = useState({
    gender: "",
    painLocation: [],
    painSide: [],
    painTime: "",
    painWorsenActivity: "",
    painRelieveActivity: "",
    lowbackPain: "",
    radiatingPain: "",
    calfCramps: "",
    kneeClicking: "",
    recentTrauma: "",
    swelling: "",
    kneeTemperature: "",
    kneeTenderness: "",
    kneeStiffness: "",
    kneeMovement: "",
    arthritisReports: null,
    metabolicDisorderReports: null,
    currentMeds: "",
    familyHistory: "",
    abs: "",
    workPattern: "",
    pastTreatment: "",
    menopause: "",
    cycleRegular: "",
    painCramps: "",
    crampsRoutine: "",
    flow: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: checked
          ? [...prevValues[name], value]
          : prevValues[name].filter((item) => item !== value),
      }));
    } else if (type === "file") {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: files[0],
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...formValues,
      painLocation: formValues.painLocation.join(", "),
      painSide: formValues.painSide.join(", "),
    };
    console.log(formValues);
    emailjs
      .send("service_il8ocaf", "template_yhj2a69", formattedData, {
        publicKey: "F-UKE5CPS1XM3Rfax",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    generatePDF(formattedData);
  };
  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.text("PAIN MANAGEMENT CASESHEET", 10, 10);

    const entries = Object.entries(data);
    let yOffset = 20;

    entries.forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, 10, yOffset);
      yOffset += 10;
      if (yOffset > 280) {
        doc.addPage();
        yOffset = 20;
      }
    });
    doc.save("casesheet.pdf");
  };
  return (
    <form
      id="casesheet-form"
      className="max-w-xl mx-auto p-6 border border-gray-300 rounded-lg bg-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        PAIN MANAGEMENT CASESHEET
      </h2>

      <label className="block text-gray-700 mb-2">Gender:</label>
      <div className="flex mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formValues.gender === "male"}
            onChange={handleChange}
            className="mr-2"
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formValues.gender === "female"}
            onChange={handleChange}
            className="mr-2"
          />
          Female
        </label>
      </div>

      <label className="block text-gray-700 mb-2">
        Where exactly is your pain?
      </label>
      {[
        "neck",
        "shoulder",
        "elbow",
        "wrist",
        "back",
        "lower_back",
        "knee",
        "ankle_heel",
      ].map((location) => (
        <div key={location} className="mb-2">
          <input
            type="checkbox"
            name="painLocation"
            value={location}
            checked={formValues.painLocation.includes(location)}
            onChange={handleChange}
            className="mr-2"
          />
          {location.charAt(0).toUpperCase() +
            location.slice(1).replace("_", " ")}
        </div>
      ))}

      <label className="block text-gray-700 mb-2">
        Mark the area where you have pain:
      </label>
      {["right", "left", "front_view", "back_view"].map((side) => (
        <div key={side} className="mb-2">
          <input
            type="checkbox"
            name="painSide"
            value={side}
            checked={formValues.painSide.includes(side)}
            onChange={handleChange}
            className="mr-2"
          />
          {side.replace("_", " ")}
        </div>
      ))}

      <label className="block text-gray-700 mb-2">
        Please mention the time of the day or night when the pain is more:
      </label>
      <input
        type="text"
        name="painTime"
        value={formValues.painTime}
        onChange={handleChange}
        placeholder="e.g., 2 AM to 4 AM / 6 PM to 8 PM"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        Which activity makes the pain worse?
      </label>
      <select
        name="painWorsenActivity"
        value={formValues.painWorsenActivity}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        {[
          "sleeping",
          "walking_flat",
          "walking_uneven",
          "downstairs",
          "upstairs",
          "squatting",
        ].map((activity) => (
          <option key={activity} value={activity}>
            {activity.replace("_", " ")}
          </option>
        ))}
      </select>

      <label className="block text-gray-700 mb-2">
        Which activity relieves the pain?
      </label>
      <select
        name="painRelieveActivity"
        value={formValues.painRelieveActivity}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        {["rest", "walking", "exercise", "cold_pack", "heat_pad"].map(
          (activity) => (
            <option key={activity} value={activity}>
              {activity.replace("_", " ")}
            </option>
          )
        )}
      </select>

      <label className="block text-gray-700 mb-2">
        Do you have low back pain?
      </label>
      <div className="flex mb-4">
        {["yes", "no"].map((answer) => (
          <label key={answer} className="mr-4">
            <input
              type="radio"
              name="lowbackPain"
              value={answer}
              checked={formValues.lowbackPain === answer}
              onChange={handleChange}
              className="mr-2"
            />
            {answer.charAt(0).toUpperCase() + answer.slice(1)}
          </label>
        ))}
      </div>

      <label className="block text-gray-700 mb-2">
        Do you have pain radiating from the lower back or buttock to the legs?
      </label>
      <div className="flex mb-4">
        {["yes", "no"].map((answer) => (
          <label key={answer} className="mr-4">
            <input
              type="radio"
              name="radiatingPain"
              value={answer}
              checked={formValues.radiatingPain === answer}
              onChange={handleChange}
              className="mr-2"
            />
            {answer.charAt(0).toUpperCase() + answer.slice(1)}
          </label>
        ))}
      </div>

      <label className="block text-gray-700 mb-2">
        Do you experience cramps in your calves during night?
      </label>
      <div className="flex mb-4">
        {["yes", "no"].map((answer) => (
          <label key={answer} className="mr-4">
            <input
              type="radio"
              name="calfCramps"
              value={answer}
              checked={formValues.calfCramps === answer}
              onChange={handleChange}
              className="mr-2"
            />
            {answer.charAt(0).toUpperCase() + answer.slice(1)}
          </label>
        ))}
      </div>

      <label className="block text-gray-700 mb-2">
        Do you hear clicking sounds from your knees? If so, when?
      </label>
      <textarea
        name="kneeClicking"
        rows="3"
        value={formValues.kneeClicking}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        Have you experienced any recent trauma/accident/fall? If yes, may you
        brief us about it?
      </label>
      <textarea
        name="recentTrauma"
        rows="5"
        value={formValues.recentTrauma}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        Have you noticed any swelling?
      </label>
      <div className="flex mb-4">
        {["yes", "no"].map((answer) => (
          <label key={answer} className="mr-4">
            <input
              type="radio"
              name="swelling"
              value={answer}
              checked={formValues.swelling === answer}
              onChange={handleChange}
              className="mr-2"
            />
            {answer.charAt(0).toUpperCase() + answer.slice(1)}
          </label>
        ))}
      </div>

      <label className="block text-gray-700 mb-2">
        Compare the temperature of both knees and tell us if there is any
        difference.
      </label>
      <textarea
        name="kneeTemperature"
        rows="3"
        value={formValues.kneeTemperature}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        When you press around the knees do you feel any tenderness?
      </label>
      <div className="flex mb-4">
        {["yes", "no"].map((answer) => (
          <label key={answer} className="mr-4">
            <input
              type="radio"
              name="kneeTenderness"
              value={answer}
              checked={formValues.kneeTenderness === answer}
              onChange={handleChange}
              className="mr-2"
            />
            {answer.charAt(0).toUpperCase() + answer.slice(1)}
          </label>
        ))}
      </div>

      <label className="block text-gray-700 mb-2">
        Are your knees stiff while you arise from your bed? If yes, what’s the
        approximate time required to recover or normalize from the stiffness?
      </label>
      <textarea
        name="kneeStiffness"
        rows="3"
        value={formValues.kneeStiffness}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        Are you able to straighten or bend the knee fully?
      </label>
      <div className="flex mb-4">
        {["yes", "no"].map((answer) => (
          <label key={answer} className="mr-4">
            <input
              type="radio"
              name="kneeMovement"
              value={answer}
              checked={formValues.kneeMovement === answer}
              onChange={handleChange}
              className="mr-2"
            />
            {answer.charAt(0).toUpperCase() + answer.slice(1)}
          </label>
        ))}
      </div>

      <label className="block text-gray-700 mb-2">
        Do you have any history of osteoarthritis or Rheumatoid arthritis? If
        yes, please upload recent blood investigation reports / x-ray reports.
      </label>
      <input
        type="file"
        name="arthritisReports"
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        Are you Diabetic or Hypertensive or have history of any metabolic
        disorders? Please upload your recent reports.
      </label>
      <input
        type="file"
        name="metabolicDisorderReports"
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        Also enlist the names of your present medicines & also mention for how
        long you’ve been taking these.
      </label>
      <textarea
        name="currentMeds"
        rows="3"
        value={formValues.currentMeds}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        Have your parents or any other family members experienced similar
        issues?
      </label>
      <textarea
        name="familyHistory"
        rows="3"
        value={formValues.familyHistory}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        How are your appetite, bowel, and sleep?
      </label>
      <textarea
        name="abs"
        rows="3"
        value={formValues.abs}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        How do you think your working pattern or occupation contributes to these
        conditions?
      </label>
      <textarea
        name="workPattern"
        rows="3"
        value={formValues.workPattern}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <label className="block text-gray-700 mb-2">
        Have you taken any medication or treatment for your complaints? Please
        list them.
      </label>
      <textarea
        name="pastTreatment"
        rows="3"
        value={formValues.pastTreatment}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {formValues.gender === "female" && (
        <>
          <label className="block text-gray-700 mb-2">
            Menstrual history: Have you attained your menopause?
          </label>
          <div className="flex mb-4">
            {["yes", "no"].map((answer) => (
              <label key={answer} className="mr-4">
                <input
                  type="radio"
                  name="menopause"
                  value={answer}
                  checked={formValues.menopause === answer}
                  onChange={handleChange}
                  className="mr-2"
                />
                {answer.charAt(0).toUpperCase() + answer.slice(1)}
              </label>
            ))}
          </div>

          <label className="block text-gray-700 mb-2">
            If no, Is your cycle regular?
          </label>
          <div className="flex mb-4">
            {["yes", "no"].map((answer) => (
              <label key={answer} className="mr-4">
                <input
                  type="radio"
                  name="cycleRegular"
                  value={answer}
                  checked={formValues.cycleRegular === answer}
                  onChange={handleChange}
                  className="mr-2"
                />
                {answer.charAt(0).toUpperCase() + answer.slice(1)}
              </label>
            ))}
          </div>

          <label className="block text-gray-700 mb-2">
            Do you experience pain or cramps? Is it tolerable?
          </label>
          <div className="flex mb-4">
            {["yes", "no"].map((answer) => (
              <label key={answer} className="mr-4">
                <input
                  type="radio"
                  name="painCramps"
                  value={answer}
                  checked={formValues.painCramps === answer}
                  onChange={handleChange}
                  className="mr-2"
                />
                {answer.charAt(0).toUpperCase() + answer.slice(1)}
              </label>
            ))}
          </div>

          <label className="block text-gray-700 mb-2">
            Does it affect your daily routine?
          </label>
          <div className="flex mb-4">
            {["yes", "no"].map((answer) => (
              <label key={answer} className="mr-4">
                <input
                  type="radio"
                  name="crampsRoutine"
                  value={answer}
                  checked={formValues.crampsRoutine === answer}
                  onChange={handleChange}
                  className="mr-2"
                />
                {answer.charAt(0).toUpperCase() + answer.slice(1)}
              </label>
            ))}
          </div>

          <label className="block text-gray-700 mb-2">Is your flow:</label>
          <div className="flex mb-4">
            {["normal", "less", "more", "clots"].map((flowType) => (
              <label key={flowType} className="mr-4">
                <input
                  type="radio"
                  name="flow"
                  value={flowType}
                  checked={formValues.flow === flowType}
                  onChange={handleChange}
                  className="mr-2"
                />
                {flowType.charAt(0).toUpperCase() + flowType.slice(1)}
              </label>
            ))}
          </div>
        </>
      )}

      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CaseSheet;

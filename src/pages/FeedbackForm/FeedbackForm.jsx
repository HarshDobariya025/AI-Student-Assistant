import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    satisfaction: "",
    usefulFeatures: [],
    navigation: "",
    aiAccuracy: "",
    suggestions: "",
    recommendation: "",
    additionalComments: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        usefulFeatures: checked
          ? [...prevState.usefulFeatures, value]
          : prevState.usefulFeatures.filter((feature) => feature !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Feedback:", formData);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <p>Help us improve AI-Student Assistant by sharing your thoughts.</p>

      <form onSubmit={handleSubmit}>
        <label>How satisfied are you with AI-Student Assistant?</label>
        <select name="satisfaction" onChange={handleChange} required>
          <option value="">Select...</option>
          <option value="Very Satisfied">Very Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Very Dissatisfied">Very Dissatisfied</option>
        </select>

        <label>Which features did you find most useful?</label>
        <div className="checkbox-group">
          {["AI-powered doubt solver", "Interview practice quizzes", "Technical subject assistance", "User-friendly interface", "Dark theme design"].map(
            (feature) => (
              <label key={feature}>
                <input
                  type="checkbox"
                  name="usefulFeatures"
                  value={feature}
                  onChange={handleChange}
                />
                {feature}
              </label>
            )
          )}
        </div>

        <label>How easy was it to navigate the platform?</label>
        <select name="navigation" onChange={handleChange} required>
          <option value="">Select...</option>
          <option value="Very Easy">Very Easy</option>
          <option value="Easy">Easy</option>
          <option value="Neutral">Neutral</option>
          <option value="Difficult">Difficult</option>
          <option value="Very Difficult">Very Difficult</option>
        </select>

        <label>Were the AI-generated answers helpful and accurate?</label>
        <select name="aiAccuracy" onChange={handleChange} required>
          <option value="">Select...</option>
          <option value="Always Helpful">Always Helpful</option>
          <option value="Mostly Helpful">Mostly Helpful</option>
          <option value="Sometimes Helpful">Sometimes Helpful</option>
          <option value="Rarely Helpful">Rarely Helpful</option>
          <option value="Not Helpful At All">Not Helpful At All</option>
        </select>

        <label>What improvements would you suggest?</label>
        <textarea name="suggestions" onChange={handleChange}></textarea>

        <label>Would you recommend AI-Student Assistant to others?</label>
        <select name="recommendation" onChange={handleChange} required>
          <option value="">Select...</option>
          <option value="Yes, definitely!">Yes, definitely!</option>
          <option value="Maybe">Maybe</option>
          <option value="No">No</option>
        </select>

        <label>Any additional comments or feedback?</label>
        <textarea name="additionalComments" onChange={handleChange}></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

"use client"

import { useState, useEffect } from "react"
import "./Form.css"

export default function ExperienceForm({ data, updateData }) {
  const [experienceList, setExperienceList] = useState(
    data.length
      ? data
      : [
          {
            company: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
          },
        ],
  )

  useEffect(() => {
    if (data.length) {
      setExperienceList(data)
    }
  }, [data])

  const handleChange = (index, e) => {
    const { name, value, type, checked } = e.target
    const updatedList = [...experienceList]
    updatedList[index] = {
      ...updatedList[index],
      [name]: type === "checkbox" ? checked : value,
    }
    setExperienceList(updatedList)
  }

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ])
  }

  const removeExperience = (index) => {
    const updatedList = [...experienceList]
    updatedList.splice(index, 1)
    setExperienceList(updatedList)
  }

  useEffect(() => {
    updateData(experienceList)
  }, [experienceList, updateData])

  return (
    <div className="experience-form">
      {experienceList.map((experience, index) => (
        <div className="form-card" key={index} style={{ marginBottom: "1.5rem" }}>
          <div className="card-content">
            <div className="form-section-header">
              <h3 className="form-section-title">Experience #{index + 1}</h3>
              {experienceList.length > 1 && (
                <button
                  className="button button-outline"
                  style={{ backgroundColor: "var(--destructive)", color: "var(--destructive-foreground)" }}
                  onClick={() => removeExperience(index)}
                >
                  <svg
                    className="button-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                  Remove
                </button>
              )}
            </div>

            <div className="form-grid">
              <div className="form-field">
                <label className="form-label" htmlFor={`company-${index}`}>
                  Company/Organization *
                </label>
                <input
                  className="form-input"
                  id={`company-${index}`}
                  name="company"
                  value={experience.company}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Tech Company Inc."
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`position-${index}`}>
                  Position/Title *
                </label>
                <input
                  className="form-input"
                  id={`position-${index}`}
                  name="position"
                  value={experience.position}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Software Engineering Intern"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`location-${index}`}>
                  Location
                </label>
                <input
                  className="form-input"
                  id={`location-${index}`}
                  name="location"
                  value={experience.location}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="City, State, Country (or Remote)"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`startDate-${index}`}>
                  Start Date
                </label>
                <input
                  className="form-input"
                  id={`startDate-${index}`}
                  name="startDate"
                  type="month"
                  value={experience.startDate}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`endDate-${index}`}>
                  End Date
                </label>
                <input
                  className="form-input"
                  id={`endDate-${index}`}
                  name="endDate"
                  type="month"
                  value={experience.endDate}
                  onChange={(e) => handleChange(index, e)}
                  disabled={experience.current}
                />
              </div>

              <div className="form-field" style={{ display: "flex", alignItems: "center" }}>
                <input
                  id={`current-${index}`}
                  name="current"
                  type="checkbox"
                  checked={experience.current}
                  onChange={(e) => handleChange(index, e)}
                  className="form-checkbox"
                />
                <label
                  className="form-label"
                  htmlFor={`current-${index}`}
                  style={{ marginBottom: 0, marginLeft: "0.5rem" }}
                >
                  I currently work here
                </label>
              </div>
            </div>

            <div className="form-field" style={{ marginTop: "1.5rem" }}>
              <label className="form-label" htmlFor={`description-${index}`}>
                Description of Responsibilities *
              </label>
              <textarea
                className="form-textarea"
                id={`description-${index}`}
                name="description"
                value={experience.description}
                onChange={(e) => handleChange(index, e)}
                placeholder="• Developed a feature that improved performance by 30%
• Collaborated with a team of 5 engineers to implement..."
                rows={4}
                required
              />
              <p className="form-help-text">Use bullet points (•) to list your responsibilities and achievements</p>
            </div>
          </div>
        </div>
      ))}

      <button className="button button-outline add-button" onClick={addExperience}>
        <svg
          className="button-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        Add Another Experience
      </button>
    </div>
  )
}


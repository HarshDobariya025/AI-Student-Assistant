"use client"

import { useState, useEffect } from "react"
import "./Form.css"

export default function EducationForm({ data, updateData }) {
  const [educationList, setEducationList] = useState(
    data.length
      ? data
      : [
          {
            institution: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: "",
            gpa: "",
            location: "",
            achievements: "",
          },
        ],
  )

  useEffect(() => {
    if (data.length) {
      setEducationList(data)
    }
  }, [data])

  const handleChange = (index, e) => {
    const { name, value } = e.target
    const updatedList = [...educationList]
    updatedList[index] = {
      ...updatedList[index],
      [name]: value,
    }
    setEducationList(updatedList)
  }

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        gpa: "",
        location: "",
        achievements: "",
      },
    ])
  }

  const removeEducation = (index) => {
    const updatedList = [...educationList]
    updatedList.splice(index, 1)
    setEducationList(updatedList)
  }

  useEffect(() => {
    updateData(educationList)
  }, [educationList, updateData])

  return (
    <div className="education-form">
      {educationList.map((education, index) => (
        <div className="form-card" key={index} style={{ marginBottom: "1.5rem" }}>
          <div className="card-content">
            <div className="form-section-header">
              <h3 className="form-section-title">Education #{index + 1}</h3>
              {educationList.length > 1 && (
                <button
                  className="button button-outline"
                  style={{ backgroundColor: "var(--destructive)", color: "var(--destructive-foreground)" }}
                  onClick={() => removeEducation(index)}
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
                <label className="form-label" htmlFor={`institution-${index}`}>
                  Institution/University *
                </label>
                <input
                  className="form-input"
                  id={`institution-${index}`}
                  name="institution"
                  value={education.institution}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="University of Technology"
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
                  value={education.location}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="City, State, Country"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`degree-${index}`}>
                  Degree *
                </label>
                <input
                  className="form-input"
                  id={`degree-${index}`}
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Bachelor of Science"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`field-${index}`}>
                  Field of Study *
                </label>
                <input
                  className="form-input"
                  id={`field-${index}`}
                  name="field"
                  value={education.field}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Computer Science"
                  required
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
                  value={education.startDate}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`endDate-${index}`}>
                  End Date (or Expected)
                </label>
                <input
                  className="form-input"
                  id={`endDate-${index}`}
                  name="endDate"
                  type="month"
                  value={education.endDate}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`gpa-${index}`}>
                  GPA (if applicable)
                </label>
                <input
                  className="form-input"
                  id={`gpa-${index}`}
                  name="gpa"
                  value={education.gpa}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="3.8/4.0"
                />
              </div>
            </div>

            <div className="form-field" style={{ marginTop: "1.5rem" }}>
              <label className="form-label" htmlFor={`achievements-${index}`}>
                Relevant Coursework/Achievements
              </label>
              <input
                className="form-input"
                id={`achievements-${index}`}
                name="achievements"
                value={education.achievements}
                onChange={(e) => handleChange(index, e)}
                placeholder="Data Structures, Algorithms, Dean's List, etc."
              />
            </div>
          </div>
        </div>
      ))}

      <button className="button button-outline add-button" onClick={addEducation}>
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
        Add Another Education
      </button>
    </div>
  )
}


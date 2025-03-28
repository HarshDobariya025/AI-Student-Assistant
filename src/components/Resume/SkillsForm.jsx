"use client"

import { useState, useEffect } from "react"
import "./Form.css"

export default function SkillsForm({ data, updateData }) {
  const [skills, setSkills] = useState(data)
  const [newSkill, setNewSkill] = useState({
    technical: "",
    softSkills: "",
    languages: "",
    frameworks: "",
    tools: "",
  })

  useEffect(() => {
    setSkills(data)
  }, [data])

  const handleAddSkill = (category) => {
    if (newSkill[category].trim()) {
      setSkills({
        ...skills,
        [category]: [...skills[category], newSkill[category].trim()],
      })
      setNewSkill({
        ...newSkill,
        [category]: "",
      })
    }
  }

  const handleRemoveSkill = (category, index) => {
    const updatedSkills = [...skills[category]]
    updatedSkills.splice(index, 1)
    setSkills({
      ...skills,
      [category]: updatedSkills,
    })
  }

  const handleKeyDown = (e, category) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill(category)
    }
  }

  useEffect(() => {
    updateData(skills)
  }, [skills, updateData])

  return (
    <div className="form-card">
      <div className="card-content">
        <div className="skills-form">
          <div className="form-field">
            <label className="form-label" htmlFor="technical">
              Technical Skills
            </label>
            <div className="input-with-button">
              <input
                className="form-input"
                id="technical"
                value={newSkill.technical}
                onChange={(e) => setNewSkill({ ...newSkill, technical: e.target.value })}
                onKeyDown={(e) => handleKeyDown(e, "technical")}
                placeholder="Add a technical skill (e.g., Python, Machine Learning)"
              />
              <button className="button button-primary" onClick={() => handleAddSkill("technical")}>
                Add
              </button>
            </div>
            <div className="badge-container">
              {skills.technical.map((skill, index) => (
                <span key={index} className="badge">
                  {skill}
                  <button className="badge-remove" onClick={() => handleRemoveSkill("technical", index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="form-field" style={{ marginTop: "1.5rem" }}>
            <label className="form-label" htmlFor="languages">
              Programming Languages
            </label>
            <div className="input-with-button">
              <input
                className="form-input"
                id="languages"
                value={newSkill.languages}
                onChange={(e) => setNewSkill({ ...newSkill, languages: e.target.value })}
                onKeyDown={(e) => handleKeyDown(e, "languages")}
                placeholder="Add a programming language (e.g., JavaScript, Java)"
              />
              <button className="button button-primary" onClick={() => handleAddSkill("languages")}>
                Add
              </button>
            </div>
            <div className="badge-container">
              {skills.languages.map((skill, index) => (
                <span key={index} className="badge">
                  {skill}
                  <button className="badge-remove" onClick={() => handleRemoveSkill("languages", index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="form-field" style={{ marginTop: "1.5rem" }}>
            <label className="form-label" htmlFor="frameworks">
              Frameworks & Libraries
            </label>
            <div className="input-with-button">
              <input
                className="form-input"
                id="frameworks"
                value={newSkill.frameworks}
                onChange={(e) => setNewSkill({ ...newSkill, frameworks: e.target.value })}
                onKeyDown={(e) => handleKeyDown(e, "frameworks")}
                placeholder="Add a framework (e.g., React, TensorFlow)"
              />
              <button className="button button-primary" onClick={() => handleAddSkill("frameworks")}>
                Add
              </button>
            </div>
            <div className="badge-container">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="badge">
                  {skill}
                  <button className="badge-remove" onClick={() => handleRemoveSkill("frameworks", index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="form-field" style={{ marginTop: "1.5rem" }}>
            <label className="form-label" htmlFor="tools">
              Tools & Technologies
            </label>
            <div className="input-with-button">
              <input
                className="form-input"
                id="tools"
                value={newSkill.tools}
                onChange={(e) => setNewSkill({ ...newSkill, tools: e.target.value })}
                onKeyDown={(e) => handleKeyDown(e, "tools")}
                placeholder="Add a tool (e.g., Git, Docker, AWS)"
              />
              <button className="button button-primary" onClick={() => handleAddSkill("tools")}>
                Add
              </button>
            </div>
            <div className="badge-container">
              {skills.tools.map((skill, index) => (
                <span key={index} className="badge">
                  {skill}
                  <button className="badge-remove" onClick={() => handleRemoveSkill("tools", index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="form-field" style={{ marginTop: "1.5rem" }}>
            <label className="form-label" htmlFor="softSkills">
              Soft Skills
            </label>
            <div className="input-with-button">
              <input
                className="form-input"
                id="softSkills"
                value={newSkill.softSkills}
                onChange={(e) => setNewSkill({ ...newSkill, softSkills: e.target.value })}
                onKeyDown={(e) => handleKeyDown(e, "softSkills")}
                placeholder="Add a soft skill (e.g., Team Collaboration, Problem Solving)"
              />
              <button className="button button-primary" onClick={() => handleAddSkill("softSkills")}>
                Add
              </button>
            </div>
            <div className="badge-container">
              {skills.softSkills.map((skill, index) => (
                <span key={index} className="badge">
                  {skill}
                  <button className="badge-remove" onClick={() => handleRemoveSkill("softSkills", index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


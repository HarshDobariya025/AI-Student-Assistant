"use client"

import { useState, useEffect } from "react"
import "./Form.css"

export default function ProjectsForm({ data, updateData }) {
  const [projectsList, setProjectsList] = useState(
    data.length
      ? data
      : [
          {
            title: "",
            description: "",
            technologies: [],
            link: "",
            github: "",
            startDate: "",
            endDate: "",
          },
        ],
  )
  const [newTechnology, setNewTechnology] = useState("")

  useEffect(() => {
    if (data.length) {
      setProjectsList(data)
    }
  }, [data])

  const handleChange = (index, e) => {
    const { name, value } = e.target
    const updatedList = [...projectsList]
    updatedList[index] = {
      ...updatedList[index],
      [name]: value,
    }
    setProjectsList(updatedList)
  }

  const addProject = () => {
    setProjectsList([
      ...projectsList,
      {
        title: "",
        description: "",
        technologies: [],
        link: "",
        github: "",
        startDate: "",
        endDate: "",
      },
    ])
  }

  const removeProject = (index) => {
    const updatedList = [...projectsList]
    updatedList.splice(index, 1)
    setProjectsList(updatedList)
  }

  const addTechnology = (projectIndex) => {
    if (newTechnology.trim()) {
      const updatedList = [...projectsList]
      updatedList[projectIndex].technologies.push(newTechnology.trim())
      setProjectsList(updatedList)
      setNewTechnology("")
    }
  }

  const removeTechnology = (projectIndex, techIndex) => {
    const updatedList = [...projectsList]
    updatedList[projectIndex].technologies.splice(techIndex, 1)
    setProjectsList(updatedList)
  }

  const handleKeyDown = (e, projectIndex) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTechnology(projectIndex)
    }
  }

  useEffect(() => {
    updateData(projectsList)
  }, [projectsList, updateData])

  return (
    <div className="projects-form">
      {projectsList.map((project, index) => (
        <div className="form-card" key={index} style={{ marginBottom: "1.5rem" }}>
          <div className="card-content">
            <div className="form-section-header">
              <h3 className="form-section-title">Project #{index + 1}</h3>
              {projectsList.length > 1 && (
                <button
                  className="button button-outline"
                  style={{ backgroundColor: "var(--destructive)", color: "var(--destructive-foreground)" }}
                  onClick={() => removeProject(index)}
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
                <label className="form-label" htmlFor={`title-${index}`}>
                  Project Title *
                </label>
                <input
                  className="form-input"
                  id={`title-${index}`}
                  name="title"
                  value={project.title}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="E-commerce Website"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`github-${index}`}>
                  GitHub Repository
                </label>
                <input
                  className="form-input"
                  id={`github-${index}`}
                  name="github"
                  value={project.github}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="https://github.com/username/project"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={`link-${index}`}>
                  Live Demo Link
                </label>
                <input
                  className="form-input"
                  id={`link-${index}`}
                  name="link"
                  value={project.link}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="https://myproject.com"
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
                  value={project.startDate}
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
                  value={project.endDate}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
            </div>

            <div className="form-field" style={{ marginTop: "1.5rem" }}>
              <label className="form-label" htmlFor={`description-${index}`}>
                Project Description *
              </label>
              <textarea
                className="form-textarea"
                id={`description-${index}`}
                name="description"
                value={project.description}
                onChange={(e) => handleChange(index, e)}
                placeholder="Describe your project, its purpose, and your role in it..."
                rows={3}
                required
              />
            </div>

            <div className="form-field" style={{ marginTop: "1.5rem" }}>
              <label className="form-label">Technologies Used</label>
              <div className="input-with-button">
                <input
                  className="form-input"
                  value={newTechnology}
                  onChange={(e) => setNewTechnology(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  placeholder="Add a technology (e.g., React, Node.js)"
                />
                <button className="button button-primary" onClick={() => addTechnology(index)}>
                  Add
                </button>
              </div>
              <div className="badge-container">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="badge">
                    {tech}
                    <button className="badge-remove" onClick={() => removeTechnology(index, techIndex)}>
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
      ))}

      <button className="button button-outline add-button" onClick={addProject}>
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
        Add Another Project
      </button>
    </div>
  )
}


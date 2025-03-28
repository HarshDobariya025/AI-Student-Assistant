"use client"

import { useState } from "react"
import PersonalInfoForm from "../../components/Resume/PersonalInfoForm"
import EducationForm from "../../components/Resume/EducationForm"
import SkillsForm from "../../components/Resume/SkillsForm"
import ProjectsForm from "../../components/Resume/ProjectsForm"
import ExperienceForm from "../../components/Resume/ExperienceForm"
import ResumePreview from "../../components/Resume/ResumePreview"
import { generatePDF } from "../../components/Resume/pdf-generator"
import "./Resume.css"

export default function Resume() {
  const [darkMode, setDarkMode] = useState(true)
  const [showPreview, setShowPreview] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
      portfolio: "",
      github: "",
      linkedin: "",
      objective: "",
    },
    education: [],
    skills: {
      technical: [],
      softSkills: [],
      languages: [],
      frameworks: [],
      tools: [],
    },
    projects: [],
    experience: [],
  })

  const steps = [
    { name: "Personal Info", component: PersonalInfoForm },
    { name: "Education", component: EducationForm },
    { name: "Skills", component: SkillsForm },
    { name: "Projects", component: ProjectsForm },
    { name: "Experience", component: ExperienceForm },
  ]

  const updateResumeData = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowPreview(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const handleDownloadPDF = () => {
    generatePDF("resume-preview", "tech-resume.pdf")
      .then(() => {
        alert("Resume downloaded successfully!")
      })
      .catch((error) => {
        console.error("Error downloading resume:", error)
        alert("Failed to download resume. Please try again.")
      })
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <header className="header">
        <div className="container header-container">
          <h1 className="app-title">Tech Student Resume Generator</h1>
          <div className="header-actions">
            <button
              className="icon-button"
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            <button
              className="icon-button"
              onClick={() => setShowPreview(!showPreview)}
              aria-label={showPreview ? "Hide preview" : "Show preview"}
            >
              {showPreview ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="main-content container">
        <div className="flex-container">
          <div className={`form-container ${showPreview ? "with-preview" : ""}`}>
            <div className="steps-container">
              <div className="steps-indicator">
                {steps.map((step, index) => (
                  <div key={index} className="step-item">
                    <div
                      className={`step-circle ${
                        index === currentStep ? "active" : index < currentStep ? "completed" : ""
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`step-line ${index < currentStep ? "completed" : ""}`} />
                    )}
                  </div>
                ))}
              </div>
              <h2 className="step-title">{steps[currentStep].name}</h2>
            </div>

            <CurrentStepComponent
              data={resumeData[Object.keys(resumeData)[currentStep]]}
              updateData={(data) => updateResumeData(Object.keys(resumeData)[currentStep], data)}
            />

            <div className="form-actions">
              <button className="button button-outline" onClick={handlePrevious} disabled={currentStep === 0}>
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
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Previous
              </button>
              <button className="button button-primary" onClick={handleNext}>
                {currentStep === steps.length - 1 ? "Preview Resume" : "Next"}
                <svg
                  className="button-icon-right"
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          {showPreview && (
            <div className="preview-container">
              <div className="sticky-container">
                <div className="preview-header">
                  <h2 className="preview-title">Resume Preview</h2>
                  <button className="button button-outline" onClick={handleDownloadPDF}>
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download PDF
                  </button>
                </div>
                <div className="preview-paper" id="resume-preview">
                  <ResumePreview data={resumeData} />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}


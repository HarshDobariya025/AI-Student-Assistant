"use client"

import { useState, useEffect } from "react"
import Header from "../../components/Scholarship/Header"
import ScholarshipsList from "../../components/Scholarship/ScholarshipsList"
import FinancialAidPrograms from "../../components/Scholarship/FinancialAidPrograms"
import Footer from "../../components/Scholarship/Footer"
import "./Scholarship.css"

function Scholarship() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode")
    return savedMode ? JSON.parse(savedMode) : true
  })

  const [activeTab, setActiveTab] = useState("scholarships")

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  } 

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      {/* <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}

      <main className="container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "scholarships" ? "active" : ""}`}
            onClick={() => setActiveTab("scholarships")}
          >
            Scholarships
          </button>
          <button
            className={`tab ${activeTab === "financial-aid" ? "active" : ""}`}
            onClick={() => setActiveTab("financial-aid")}
          >
            Financial Aid Programs
          </button>
        </div>

        {activeTab === "scholarships" ? <ScholarshipsList /> : <FinancialAidPrograms />}
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default Scholarship


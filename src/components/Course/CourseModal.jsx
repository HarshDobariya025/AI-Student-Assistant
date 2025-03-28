import { useEffect, useState } from "react";
import { X, BookOpen, Calendar, Award, Briefcase } from "lucide-react";
import "./CourseModal.css";

export default function CourseModal({ course, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          <X className="icon" />
        </button>

        <h2 className="modal-title">{course.title}</h2>

        <div className="course-meta">
          <span className="meta-item">
            <Award className="icon meta-icon" /> {course.level}
          </span>
          <span className="meta-item">
            <Calendar className="icon meta-icon" /> {course.duration}
          </span>
          <span className="meta-item">
            <BookOpen className="icon meta-icon" /> {course.category}
          </span>
        </div>

        <div className="tabs">
          {["overview", "eligibility", "syllabus", "careers"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === "overview" && (
            <div>
              <p>{course.description}</p>
              <div className="grid-container">
                <div className="grid-item">
                  <div className="grid-title">
                    <Calendar className="icon grid-icon" /> Duration
                  </div>
                  <p>{course.duration}</p>
                </div>
                <div className="grid-item">
                  <div className="grid-title">
                    <Award className="icon grid-icon" /> Level
                  </div>
                  <p>{course.level}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "eligibility" && (
            <div className="content-box">
              <h3>🎓 Eligibility Requirements</h3>
              <p>{course.eligibility}</p>
            </div>
          )}

          {activeTab === "syllabus" && (
            <div className="content-box">
              <h3 className="content-title">
                <BookOpen className="icon content-icon" /> Course Syllabus
              </h3>
              <ul className={`syllabus-list ${course.syllabus.length > 4 ? "grid-syllabus" : "list-style"}`}>
                {course.syllabus.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "careers" && (
            <div className="content-box">
              <h3 className="content-title">
                <Briefcase className="icon content-icon" /> Career Opportunities
              </h3>
              <div className="career-grid">
                {course.careers.map((career, index) => (
                  <span key={index} className="career-item">{career}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-buttons">
          <button className="close-btn" onClick={onClose}>Close</button>
          <a href={course.link} target="_blank" rel="noopener noreferrer">
            <button className="apply-btn">Learn Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

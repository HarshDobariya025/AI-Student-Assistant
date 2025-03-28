import React from "react";
import { Clock, Award } from "lucide-react";
import "./CourseCard.css";

const CourseCard = ({ course, onClick }) => {
  return (
    <div className="course-card">
      <div className="course-image-container">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="course-image"
        />
      </div>
  
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>

        <div className="course-meta">
          <div className="course-meta-item">
            <Award className="icon" />
            <span>{course.level}</span>
          </div>
          <div className="course-meta-item">
            <Clock className="icon" />
            <span>{course.duration}</span>
          </div>
        </div>

        <p className="course-description">{course.description}</p>
      </div>

      <div className="course-footer">
        <button onClick={onClick} className="course-button">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

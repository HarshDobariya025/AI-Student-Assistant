import React from "react";
import CourseList from "../../components/Course/CourseList";
import RootLayout from "../../components/Course/RootLayout";
import "./Courses.css";

export default function Courses() {
  return (
    <>
    <RootLayout>
      <main className="courses-container">
        <div className="courses-content">
          <h2 className="courses-title">Explore Technical Courses</h2>
          <CourseList />
        </div>
      </main>  
    </RootLayout>
    </>
  );
}

import "./ResumePreview.css"

export default function ResumePreview({ data }) {
  const { personalInfo, education, skills, projects, experience } = data

  const formatDate = (dateString) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }

  return (
    <div className="resume">
      {/* Header */}
      <header className="resume-header">
        <h1 className="resume-name">{personalInfo.name || "Your Name"}</h1>

        <div className="resume-contact">
          {personalInfo.phone && (
            <div className="contact-item">
              <svg
                className="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>{personalInfo.phone}</span>
            </div>
          )}

          {personalInfo.email && (
            <div className="contact-item">
              <svg
                className="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{personalInfo.email}</span>
            </div>
          )}

          {personalInfo.location && (
            <div className="contact-item">
              <svg
                className="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{personalInfo.location}</span>
            </div>
          )}

          {personalInfo.portfolio && (
            <div className="contact-item">
              <svg
                className="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{personalInfo.portfolio}</span>
            </div>
          )}

          {personalInfo.github && (
            <div className="contact-item">
              <svg
                className="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>{personalInfo.github}</span>
            </div>
          )}

          {personalInfo.linkedin && (
            <div className="contact-item">
              <svg
                className="contact-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {personalInfo.objective && (
        <section className="resume-section">
          <h2 className="section-title">Professional Summary</h2>
          <p>{personalInfo.objective}</p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="resume-item">
              <div className="item-header">
                <div className="item-title">{edu.institution}</div>
                <div className="item-date">
                  {edu.location && `${edu.location} | `}
                  {formatDate(edu.startDate)} - {edu.current ? "Present" : formatDate(edu.endDate)}
                </div>
              </div>
              <div>
                {edu.degree}
                {edu.field ? `, ${edu.field}` : ""}
              </div>
              {edu.gpa && <div className="item-subtitle">GPA: {edu.gpa}</div>}
              {edu.achievements && <div className="item-subtitle">Relevant Coursework: {edu.achievements}</div>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      <section className="resume-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.technical.length > 0 && (
            <div>
              <span className="skill-category">Technical Skills:</span> {skills.technical.join(", ")}
            </div>
          )}

          {skills.languages.length > 0 && (
            <div>
              <span className="skill-category">Programming Languages:</span> {skills.languages.join(", ")}
            </div>
          )}

          {skills.frameworks.length > 0 && (
            <div>
              <span className="skill-category">Frameworks & Libraries:</span> {skills.frameworks.join(", ")}
            </div>
          )}

          {skills.tools.length > 0 && (
            <div>
              <span className="skill-category">Tools & Technologies:</span> {skills.tools.join(", ")}
            </div>
          )}

          {skills.softSkills.length > 0 && (
            <div>
              <span className="skill-category">Soft Skills:</span> {skills.softSkills.join(", ")}
            </div>
          )}
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="resume-item">
              <div className="item-header">
                <div className="item-title">{project.title}</div>
                <div className="item-date">
                  {formatDate(project.startDate)} - {formatDate(project.endDate)}
                </div>
              </div>

              {(project.github || project.link) && (
                <div className="item-subtitle">
                  {project.github && <span>GitHub: {project.github} </span>}
                  {project.link && <span>Demo: {project.link}</span>}
                </div>
              )}

              <p className="item-description">{project.description}</p>

              {project.technologies.length > 0 && (
                <div className="item-subtitle">
                  <span className="skill-category">Technologies:</span> {project.technologies.join(", ")}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="resume-item">
              <div className="item-header">
                <div className="item-title">{exp.position}</div>
                <div className="item-date">
                  {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                </div>
              </div>

              <div className="item-subtitle">
                {exp.company}
                {exp.location ? `, ${exp.location}` : ""}
              </div>

              <div className="item-description">{exp.description}</div>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}


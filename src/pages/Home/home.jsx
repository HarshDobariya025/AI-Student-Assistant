import "./home.css"
import { BookOpen, Menu } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function StudentAIAssistant() {
  return (
    <div className="student-ai-container">
      <header className="header">
        <div className="logo">
          <BookOpen className="book-icon" />
          <span>StudyMate</span>
        </div>
        <nav className="navigation">
          <a href="#" className="nav-link">
            For students
          </a>
          <a href="#" className="nav-link">
            For educators
          </a>
          <a href="#" className="nav-link">
            FAQ
          </a>
          <button className="menu-button">
            <Menu className="menu-icon" />
          </button>
          <NavLink to="login"><button className="sign-in-button header-sign-in">Sign in</button></NavLink>
        </nav>
      </header>

      <main className="main-content">
        <div className="left-content">
          <h1 className="title">
            <span className="gradient-text">StudyMate</span>
          </h1>
          <h2 className="subtitle">Accelerate your learning and academic success</h2>
          <p className="description">
            Chat to get homework help, essay feedback, study plans, and research assistance with your AI study companion
          </p>
          <NavLink to="login"><button className="sign-in-button main-sign-in">Get Started</button></NavLink>
        </div>

        <div className="right-content">
          <div className="image-container">
            <img
              src="https://media.istockphoto.com/id/1439951553/photo/chat-bot-service-concept-customer-using-online-service-with-chat-bot-to-get-support.jpg?s=612x612&w=0&k=20&c=DCF6FvGigrpaHFFJiwc6m-TTOsfA6H3x1IVRnoPt6Sg="
              alt="Student studying with AI assistance"
              className="hero-image"
            />
          </div>
          <div className="ai-example">
            <div className="example-icon">✨</div>
            <div className="example-content">
              <p className="example-title">Here's your study plan for finals week:</p>
              <p className="example-text">
                Monday: Review Chapters 5-7 in Biology
                <br />
                Tuesday: Practice calculus problems (sets 3-4)
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
 

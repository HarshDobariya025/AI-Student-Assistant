import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>TechEdu Financial Aid</h3>
          <p>
            Supporting students in technical fields to achieve their educational goals through scholarships and
            financial assistance.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#scholarships">Scholarships</a>
            </li>
            <li>
              <a href="#financial-aid">Financial Aid</a>
            </li>
            <li>
              <a href="#eligibility">Eligibility</a>
            </li>
            <li>
              <a href="#apply">How to Apply</a>
            </li>
            <li>
              <a href="#deadlines">Important Deadlines</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#forms">Forms & Documents</a>
            </li>
            <li>
              <a href="#workshops">Workshops</a>
            </li>
            <li>
              <a href="#counseling">Financial Counseling</a>
            </li>
            <li>
              <a href="#blog">Financial Aid Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <address>
            <p>Financial Aid Office</p>
            <p>Technical Department, Room 204</p>
            <p>Email: financial.aid@techedu.edu</p>
            <p>Phone: (555) 123-4567</p>
            <p>Hours: Mon-Fri, 9am-5pm</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} TechEdu Financial Aid. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


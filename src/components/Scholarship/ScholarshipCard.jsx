"use client"

import { useState } from "react"
import { Calendar, DollarSign, Clock } from "lucide-react"
import "./ScholarshipCard.css"

const ScholarshipCard = ({ scholarship }) => {
  const [expanded, setExpanded] = useState(false)

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount)
  }
 
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  const daysUntilDeadline = (deadlineString) => {
    const today = new Date()
    const deadline = new Date(deadlineString)
    const diffTime = deadline - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const deadlineDays = daysUntilDeadline(scholarship.deadline)

  return (
    <div className="scholarship-card">
      <div className="scholarship-header">
        <div className="scholarship-category">{scholarship.category}</div>
        <h3>{scholarship.name}</h3>
      </div>

      <div className="scholarship-details">
        <div className="detail">
          <DollarSign size={18} />
          <span>{formatAmount(scholarship.amount)}</span>
        </div>

        {/* <div className="detail">
          <Calendar size={18} />
          <span>Deadline: {formatDate(scholarship.deadline)}</span>
        </div> */}

        {/* <div className={`detail deadline ${deadlineDays < 14 ? "urgent" : ""}`}>
          <Clock size={18} />
          <span>{deadlineDays > 0 ? `${deadlineDays} days left` : "Deadline passed"}</span>
        </div> */}
      </div>

      <p className="scholarship-description">
        {expanded ? scholarship.description : `${scholarship.description.substring(0, 120)}...`}
      </p>

      <button className="read-more" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </button>

      <div className="scholarship-eligibility">
        <h4>Eligibility Requirements:</h4>
        <ul>
          {scholarship.eligibility.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="scholarship-footer flex justify-between">
        <button className="save-button">Save</button>
        <a href={scholarship.link} target="_blank" >
        <button className="apply-button">Apply Now</button>
        </a>
      </div>
    </div>
  )
}

export default ScholarshipCard


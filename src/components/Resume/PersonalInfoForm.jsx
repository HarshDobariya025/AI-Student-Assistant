"use client"

import { useState, useEffect } from "react"
import "./Form.css"

export default function PersonalInfoForm({ data, updateData }) {
  const [formData, setFormData] = useState(data)

  useEffect(() => {
    setFormData(data)
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    updateData(formData)
  }, [formData, updateData])

  return (
    <div className="form-card">
      <div className="card-content">
        <div className="form-grid">
          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Full Name *
            </label>
            <input
              className="form-input"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email *
            </label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="phone">
              Phone Number *
            </label>
            <input
              className="form-input"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="location">
              Location
            </label>
            <input
              className="form-input"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City, State, Country"
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="portfolio">
              Portfolio Website
            </label>
            <input
              className="form-input"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://yourportfolio.com"
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="github">
              GitHub Profile
            </label>
            <input
              className="form-input"
              id="github"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="https://github.com/username"
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="linkedin">
              LinkedIn Profile
            </label>
            <input
              className="form-input"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </div>

        <div className="form-field" style={{ marginTop: "1.5rem" }}>
          <label className="form-label" htmlFor="objective">
            Professional Summary/Objective
          </label>
          <textarea
            className="form-textarea"
            id="objective"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            placeholder="A brief summary of your career goals and skills as a tech student..."
            rows={4}
          />
        </div>
      </div>
    </div>
  )
}


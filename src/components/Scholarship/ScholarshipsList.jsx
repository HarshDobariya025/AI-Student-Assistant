"use client"

import { useState } from "react" 
import { scholarshipsData } from "./scholarships"
import ScholarshipCard from "./ScholarshipCard"
import SearchFilter from "./SearchFilter"
import "./ScholarshipsList.css"


const ScholarshipsList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedAmount, setSelectedAmount] = useState("all")

  const filteredScholarships = scholarshipsData.filter((scholarship) => {
    const matchesSearch =
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "all" || scholarship.category === selectedCategory

    const matchesAmount =
      selectedAmount === "all" ||
      (selectedAmount === "under5k" && scholarship.amount < 5000) ||
      (selectedAmount === "5kto10k" && scholarship.amount >= 5000 && scholarship.amount <= 10000) ||
      (selectedAmount === "over10k" && scholarship.amount > 10000)

    return matchesSearch && matchesCategory && matchesAmount
  })

  return ( 
    <div className="scholarships-list">
      <div className="scholarships-header">
        <h2>Technical Department Scholarships</h2>
        <p>Discover scholarships designed to support students in technical fields</p>
      </div>

      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedAmount={selectedAmount}
        setSelectedAmount={setSelectedAmount}
      />
  
      {filteredScholarships.length > 0 ? (
        <div className="scholarships-grid">
          {filteredScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No scholarships found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  )
}

export default ScholarshipsList


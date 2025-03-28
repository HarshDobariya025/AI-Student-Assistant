import { Search } from "lucide-react"
import "./SearchFilter.css"

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedAmount,
  setSelectedAmount,
}) => { 
  return (
    <div className="search-filter">
      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search scholarships..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filters">
        <div className="filter">
          <label htmlFor="category">Category</label>
          <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="Engineering">Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Data Science">Data Science</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>
 
        <div className="filter">
          <label htmlFor="amount">Amount</label>
          <select id="amount" value={selectedAmount} onChange={(e) => setSelectedAmount(e.target.value)}>
            <option value="all">Any Amount</option>
            <option value="under5k">Under $5,000</option>
            <option value="5kto10k">$5,000 - $10,000</option>
            <option value="over10k">Over $10,000</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter


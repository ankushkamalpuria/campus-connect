import React from 'react';
import { Search, Filter } from 'lucide-react';
import './SearchFilter.css';

const SearchFilter = ({ searchTerm, setSearchTerm, category, setCategory }) => {
    return (
        <div className="search-filter glass fade-in">
            <div className="search-box">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    placeholder="Search companies, roles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <div className="filter-box">
                <div className="filter-icon-wrapper">
                    <Filter size={18} />
                </div>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="filter-select"
                >
                    <option value="All">All Categories</option>
                    <option value="Software">Software Engineering</option>
                    <option value="Data">Data Science & Analytics</option>
                    <option value="AI">AI & Machine Learning</option>
                    <option value="Cloud">Cloud & DevOps</option>
                    <option value="Product">Product Management</option>
                    <option value="Design">UI/UX Design</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                </select>
            </div>
        </div>
    );
};

export default SearchFilter;

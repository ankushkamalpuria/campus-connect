import React, { useState, useEffect } from 'react';
import SearchFilter from '../components/SearchFilter';
import InternshipCard from '../components/InternshipCard';

const Internships = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [internshipData, setInternshipData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${(import.meta.env.VITE_API_URL || '').replace(/\/$/, '')}/api/internships`);
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    console.error("Server API Error:", errorData);
                    throw new Error(errorData.message || `Server error: ${response.status}`);
                }
                const data = await response.json();
                setInternshipData(data);
                setFilteredData(data); // Initialize filtered data
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Filter logic
    useEffect(() => {
        let result = internshipData;

        if (category !== 'All') {
            result = result.filter(item => item.category === category);
        }

        if (searchTerm) {
            result = result.filter(item =>
                item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.role.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredData(result);
    }, [searchTerm, category, internshipData]);

    return (
        <div className="container fade-in" style={{ padding: '2rem 1rem' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Available Internships</h1>

            <SearchFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                category={category}
                setCategory={setCategory}
            />

            {loading ? (
                <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', padding: '2rem' }}>
                    Loading latest internships...
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredData.length > 0 ? (
                        filteredData.map(item => (
                            <InternshipCard key={item.id || item._id} data={item} />
                        ))
                    ) : (
                        <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '3rem', color: 'var(--text-secondary)' }}>
                            <h3>No internships found matching your criteria.</h3>
                            <p>Try clearing your filters or search term.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Internships;

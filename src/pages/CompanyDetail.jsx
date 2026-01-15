import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Briefcase } from 'lucide-react';
import InternshipCard from '../components/InternshipCard';

const CompanyDetail = () => {
    const { companyName } = useParams();
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);
    const [companyInfo, setCompanyInfo] = useState(null);

    // Mock rich data for top companies
    const COMPANY_METADATA = {
        'Google': {
            description: "Google's mission is to organize the world's information and make it universally accessible and useful. Join us to build products that help billions of people.",
            location: "Mountain View, CA + Global",
            employees: "150,000+",
            website: "https://careers.google.com",
            techStack: ["Python", "Go", "Angular", "TensorFlow", "Kubernetes"],
            benefits: ["Free Food", "Hybrid Work", "Health Insurance", "Learning Budget"]
        },
        'Microsoft': {
            description: "Microsoft's mission is to empower every person and every organization on the planet to achieve more. Work on Azure, Windows, Xbox, and AI that changes the world.",
            location: "Redmond, WA + Global",
            employees: "220,000+",
            website: "https://careers.microsoft.com",
            techStack: ["C#", ".NET", "Azure", "React", "TypeScript"],
            benefits: ["Flexible Schedule", "Stock Options", "Wellness Program", "Product Discounts"]
        },
        'Amazon': {
            description: "Amazon strives to be Earth's most customer-centric company. From AWS to Logistics, we build the future of commerce and cloud computing.",
            location: "Seattle, WA + Global",
            employees: "1,500,000+",
            website: "https://www.amazon.jobs",
            techStack: ["Java", "AWS", "Ruby", "React", "DynamoDB"],
            benefits: ["Career Choice", "Paid Parental Leave", "401(k)", "Employee Discount"]
        },
        'Meta': {
            description: "Meta builds technologies that help people connect, find communities, and grow businesses. Join us to build the next evolution of social connection.",
            location: "Menlo Park, CA + Global",
            employees: "60,000+",
            website: "https://www.metacareers.com",
            techStack: ["React", "Hack", "GraphQL", "PyTorch", "Cassandra"],
            benefits: ["Remote Work", "Generous PTO", "Free Meals", "Wellness Stipend"]
        },
        'Netflix': {
            description: "Netflix is the world's leading streaming entertainment service. We offer a unique culture of Freedom and Responsibility to help you do your best work.",
            location: "Los Gatos, CA + Global",
            employees: "12,000+",
            website: "https://jobs.netflix.com",
            techStack: ["Java", "Node.js", "React", "AWS", "Spring Boot"],
            benefits: ["Top Market Pay", "Unlimited PTO", "Stock Options", "Family Leave"]
        }
    };

    useEffect(() => {
        const fetchCompanyData = async () => {
            try {
                // Fetch all internships and filter by company
                const response = await fetch('http://localhost:5000/api/internships');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();

                // Case-insensitive matching
                const targetCompany = companyName.toLowerCase();
                const companyInternships = data.filter(
                    item => item.company.toLowerCase() === targetCompany
                );

                setInternships(companyInternships);

                // Use rich metadata if available, otherwise fallback
                const foundItem = companyInternships.length > 0 ? companyInternships[0] : data.find(i => i.company.toLowerCase() === targetCompany);

                if (foundItem) {
                    const meta = COMPANY_METADATA[foundItem.company] || {};
                    setCompanyInfo({
                        name: foundItem.company,
                        logo: foundItem.logo,
                        description: meta.description || `Explore exciting career opportunities at ${foundItem.company}.`,
                        location: meta.location || "Global",
                        employees: meta.employees || "Unknown",
                        website: meta.website || "#",
                        techStack: meta.techStack || [],
                        benefits: meta.benefits || []
                    });
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching company data:', error);
                setLoading(false);
            }
        };

        fetchCompanyData();
    }, [companyName]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    if (loading) {
        return <div className="container" style={{ paddingTop: '6rem', textAlign: 'center' }}>Loading company details...</div>;
    }

    if (!companyInfo) {
        return (
            <div className="container" style={{ paddingTop: '6rem', textAlign: 'center' }}>
                <h2>Company not found</h2>
                <Link to="/" className="btn" style={{ marginTop: '1rem' }}>Back to Home</Link>
            </div>
        );
    }

    return (
        <motion.div
            className="company-detail-page container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ paddingTop: '6rem', paddingBottom: '4rem' }}
        >
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                <ArrowLeft size={20} /> Back to Home
            </Link>

            {/* Header Section */}
            <div className="glass" style={{ padding: '3rem', marginBottom: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}></div>
                {companyInfo.logo ? (
                    <>
                        <img
                            src={companyInfo.logo}
                            alt={companyInfo.name}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                            style={{ width: '100px', height: '100px', objectFit: 'contain', background: 'white', padding: '10px', borderRadius: '20px', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                        />
                        <div
                            style={{
                                width: '100px', height: '100px', background: '#38bdf8', color: '#fff',
                                borderRadius: '20px', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                display: 'none', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: '800'
                            }}
                        >
                            {companyInfo.name[0]}
                        </div>
                    </>
                ) : (
                    <div
                        style={{
                            width: '100px', height: '100px', background: '#38bdf8', color: '#fff',
                            borderRadius: '20px', marginBottom: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: '800'
                        }}
                    >
                        {companyInfo.name[0]}
                    </div>
                )}
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{companyInfo.name}</h1>
                <p style={{ maxWidth: '700px', color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>{companyInfo.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                        <MapPin size={18} /> {companyInfo.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                        <Briefcase size={18} /> {companyInfo.employees} Employees
                    </div>
                    <a href={companyInfo.website} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                        Visit Website
                    </a>
                </div>
            </div>

            {/* Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {/* Tech Stack */}
                {companyInfo.techStack.length > 0 && (
                    <div className="glass" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#38bdf8' }}>Tech Stack</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {companyInfo.techStack.map(tech => (
                                <span key={tech} style={{ padding: '6px 14px', background: 'rgba(56, 189, 248, 0.1)', color: '#7dd3fc', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Benefits */}
                {companyInfo.benefits.length > 0 && (
                    <div className="glass" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: '#a78bfa' }}>Benefits & Perks</h3>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.8rem' }}>
                            {companyInfo.benefits.map(benefit => (
                                <li key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                                    <span style={{ width: '6px', height: '6px', background: '#a78bfa', borderRadius: '50%' }}></span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                Available Internships <span style={{ fontSize: '1rem', background: '#38bdf8', color: '#000', padding: '2px 8px', borderRadius: '12px' }}>{internships.length}</span>
            </h2>

            <div className="internships-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {internships.length > 0 ? (
                    internships.map(internship => (
                        <InternshipCard key={internship.id || internship._id} data={internship} />
                    ))
                ) : (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '3rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                        No active internships found for {companyInfo.name} at the moment.
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default CompanyDetail;

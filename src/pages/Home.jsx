import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, ShieldCheck, BadgeCheck, Zap, Award, Users, Rocket } from 'lucide-react';

const Home = () => {
    const [featuredCompanies, setFeaturedCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const response = await fetch(`${(import.meta.env.VITE_API_URL || '').replace(/\/$/, '')}/api/internships`);
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    console.error("Server API Error:", errorData);
                    throw new Error(errorData.message || `Server error: ${response.status}`);
                }
                const data = await response.json();

                // Process data to get unique companies with internship counts
                const companyMap = new Map();
                data.forEach(item => {
                    if (!companyMap.has(item.company)) {
                        companyMap.set(item.company, {
                            ...item,
                            count: 1
                        });
                    } else {
                        companyMap.get(item.company).count++;
                    }
                });

                // Convert to array and take top 5
                setFeaturedCompanies(Array.from(companyMap.values()).slice(0, 5));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching internships:', error);
                setLoading(false);
            }
        };

        fetchInternships();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div
            className="home-page"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <section className="hero-section" style={{ textAlign: 'center', padding: '6rem 1rem 4rem', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    variants={itemVariants}
                    className="glass"
                    style={{ padding: '3rem 2rem', maxWidth: '900px', width: '95%', position: 'relative', overflow: 'hidden' }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}></div>

                    {/* Improved visibility with drop-shadow and brighter gradient */}
                    <span className="badge">
                        New: 2026 Batches Open
                    </span>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: '800', lineHeight: 1.2, textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                        Find Top Tech Internships <br />
                        <span style={{ fontSize: '2.5rem', color: '#38bdf8', opacity: 1, textShadow: '0 0 20px rgba(56, 189, 248, 0.6)' }}>
                            Kickstart Your Career
                        </span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        One-stop platform to discover and apply to internships at Google, Microsoft, Amazon, and more. Direct links, no clutter.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/internships" className="btn" style={{ padding: '14px 32px', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            Explore Internships <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container" style={{ margin: '2rem auto 4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <motion.div variants={itemVariants} className="glass feature-card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div className="icon-box" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                            <Globe size={24} />
                        </div>
                        <h3>Global Opportunities</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Remote and on-site roles from top tech hubs worldwide.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="glass feature-card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div className="icon-box" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                            <TrendingUp size={24} />
                        </div>
                        <h3>Trending Roles</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Curated lists of Software, AI/ML, and Data Science internships.</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="glass feature-card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div className="icon-box" style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', width: 50, height: 50, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3>Official Links</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>We redirect you directly to the official company career portals.</p>
                    </motion.div>
                </div>
            </section>

            {/* Company Partnership Section / Why Top Companies */}
            <section className="container" style={{ margin: '4rem auto 2rem' }}>
                <div className="glass" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #38bdf8, #a855f7)' }}></div>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Why Target Top-Tier Companies?</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                            Securing an internship at a tech giant isn't just about the name—it's about the exclusive environment and growth opportunities.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <Zap size={32} color="#38bdf8" style={{ marginBottom: '1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Elite Mentorship</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Learn from the best engineers and leaders in the industry.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Award size={32} color="#a855f7" style={{ marginBottom: '1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Resume Power</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Having these names on your profile opens doors globally for life.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Users size={32} color="#4ade80" style={{ marginBottom: '1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Global Networking</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Connect with talented peers and experts across the world.</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Rocket size={32} color="#f472b6" style={{ marginBottom: '1rem' }} />
                            <h4 style={{ marginBottom: '0.5rem' }}>Direct PPO Path</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Many internships lead directly to high-paying full-time roles.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" style={{ margin: '4rem auto', paddingBottom: '4rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Featured Top Companies</h2>

                {loading ? (
                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Loading top companies...</div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}
                    >
                        {featuredCompanies.map((company, index) => (
                            <Link
                                to={`/company/${company.company}`}
                                key={company.id || index}
                                style={{ textDecoration: 'none' }}
                            >
                                <motion.div
                                    className="glass"
                                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.15)', translateY: -5 }}
                                    style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '180px', height: '180px', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}
                                >
                                    {company.logo ? (
                                        <>
                                            <img
                                                src={company.logo}
                                                alt={company.company}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                                style={{ width: '64px', height: '64px', objectFit: 'contain', marginBottom: '1rem' }}
                                            />
                                            <div
                                                style={{
                                                    width: '64px', height: '64px', marginBottom: '1rem', background: '#38bdf8', color: '#fff',
                                                    borderRadius: '12px', display: 'none', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: '2rem', fontWeight: 'bold'
                                                }}
                                            >
                                                {company.company[0]}
                                            </div>
                                        </>
                                    ) : (
                                        <div
                                            style={{
                                                width: '64px', height: '64px', marginBottom: '1rem', background: '#38bdf8', color: '#fff',
                                                borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '2rem', fontWeight: 'bold'
                                            }}
                                        >
                                            {company.company[0]}
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <span style={{ fontWeight: '600', color: '#fff', fontSize: '1.1rem' }}>{company.company}</span>
                                        <BadgeCheck size={16} color="#38bdf8" fill="rgba(56, 189, 248, 0.1)" />
                                    </div>
                                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>{company.category} Support</span>
                                    <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                                        {company.count} Jobs
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </section>
        </motion.div>
    );
};

export default Home;

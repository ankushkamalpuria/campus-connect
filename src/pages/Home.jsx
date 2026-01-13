import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, ShieldCheck } from 'lucide-react';

const Home = () => {
    const [featuredCompanies, setFeaturedCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInternships = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/internships');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setFeaturedCompanies(data.slice(0, 5));
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
            <section className="hero-section" style={{ textAlign: 'center', padding: '6rem 1rem 4rem', position: 'relative' }}>
                <motion.div variants={itemVariants}>
                    <span className="badge">New: 2026 Batches Open</span>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', background: 'linear-gradient(to right, #fff, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800', lineHeight: 1.2 }}>
                        Find Top Tech Internships <br /> <span style={{ fontSize: '2.5rem', opacity: 0.9 }}>Kickstart Your Career</span>
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
                            <motion.div
                                key={company.id}
                                className="glass"
                                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '160px', height: '160px', justifyContent: 'center', cursor: 'pointer' }}
                            >
                                <img src={company.logo} alt={company.company} style={{ width: '64px', height: '64px', objectFit: 'contain', marginBottom: '1rem' }} />
                                <span style={{ fontWeight: '600' }}>{company.company}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </section>
        </motion.div>
    );
};

export default Home;

<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MapPin, Briefcase, Tag, ExternalLink, X, Building, CheckCircle } from 'lucide-react';
import { useUser, useClerk } from '@clerk/clerk-react';
import { motion, AnimatePresence } from 'framer-motion';
import './InternshipCard.css';

const InternshipCard = ({ data }) => {
    const { isSignedIn } = useUser();
    const { openSignIn } = useClerk();
    const [showModal, setShowModal] = useState(false);

    const handleApplyClick = (e) => {
        e.preventDefault();
        if (!isSignedIn) {
            openSignIn();
        } else {
            setShowModal(true);
        }
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    return (
        <>
            <motion.div
                className="card glass fade-in"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
            >
                <div className="card-header">
                    <div className="company-logo-container">
                        {data.logo ? (
                            <img
                                src={data.logo}
                                alt={`${data.company} logo`}
                                className="company-logo"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        <div
                            className="company-logo-placeholder"
                            style={{ display: data.logo ? 'none' : 'flex' }}
                        >
                            {data.company[0]}
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h3 className="company-name">{data.company}</h3>
                        <p className="role">{data.role}</p>
                    </div>
                </div>

                <div className="card-body">
                    <div className="info-row">
                        <MapPin size={16} className="icon-sm" />
                        <span>{data.location}</span>
                    </div>

                    <div className="tags">
                        <span className="tag type">
                            <Briefcase size={12} style={{ marginRight: 4 }} />
                            {data.type}
                        </span>
                        <span className="tag category">
                            <Tag size={12} style={{ marginRight: 4 }} />
                            {data.category}
                        </span>
                    </div>
                </div>

                <div className="card-footer">
                    <button onClick={handleApplyClick} className="btn btn-full" style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                        Apply Now <ExternalLink size={16} style={{ marginLeft: 8 }} />
                    </button>
                </div>
            </motion.div>

            {createPortal(
                <AnimatePresence>
                    {showModal && (
                        <motion.div
                            className="modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                                background: '#0f172a', zIndex: 10000,
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    width: '100%', height: '100%',
                                    position: 'relative',
                                    overflowY: 'auto',
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                    scrollbarWidth: 'none', /* Firefox */
                                    msOverflowStyle: 'none', /* IE/Edge */
                                }}
                            >
                                <style>{`
                                    div::-webkit-scrollbar {
                                        display: none;
                                    }
                                `}</style>
                                <div style={{ maxWidth: '600px', width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #38bdf8, #818cf8)' }}></div>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', zIndex: 10 }}
                                    >
                                        <X size={24} />
                                    </button>

                                    <div style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: '1rem' }}>
                                        {/* Logo if available */}
                                        {data.logo ? (
                                            <>
                                                <img
                                                    src={data.logo}
                                                    alt={data.company}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'inline-flex';
                                                    }}
                                                    style={{
                                                        width: 80, height: 80, objectFit: 'contain', marginBottom: '1.5rem',
                                                        background: '#fff', padding: '10px', borderRadius: '16px',
                                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        width: 80, height: 80, marginBottom: '1.5rem', background: '#38bdf8', color: '#fff',
                                                        borderRadius: '16px', display: 'none', alignItems: 'center', justifyContent: 'center',
                                                        fontSize: '2.5rem', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                                    }}
                                                >
                                                    {data.company[0]}
                                                </div>
                                            </>
                                        ) : (
                                            <div
                                                style={{
                                                    width: 80, height: 80, marginBottom: '1.5rem', background: '#38bdf8', color: '#fff',
                                                    borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                                    fontSize: '2.5rem', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                                }}
                                            >
                                                {data.company[0]}
                                            </div>
                                        )}
                                        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Apply to {data.company}</h2>
                                        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>{data.role}</p>

                                        {/* Company Description - NEW */}
                                        {data.description && (
                                            <p style={{
                                                color: '#cbd5e1', fontSize: '0.95rem', margin: '1rem 0 1.5rem',
                                                lineHeight: '1.6', maxWidth: '500px'
                                            }}>
                                                {data.description}
                                            </p>
                                        )}
                                    </div>

                                    <div style={{
                                        marginBottom: '2rem', width: '100%',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Tech Stack - NEW */}
                                        {data.tech_stack && (
                                            <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                                <h4 style={{ marginBottom: '1rem', color: '#38bdf8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Tech Stack</h4>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                                    {data.tech_stack.map((tech, i) => (
                                                        <span key={i} style={{
                                                            padding: '6px 14px', borderRadius: '50px',
                                                            background: 'rgba(56, 189, 248, 0.1)', color: '#7dd3fc',
                                                            border: '1px solid rgba(56, 189, 248, 0.2)', fontSize: '0.85rem'
                                                        }}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div style={{ padding: '1.5rem' }}>
                                            <h4 style={{ marginBottom: '1.2rem', color: '#38bdf8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Job Overview</h4>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#cbd5e1' }}>
                                                    <Building size={18} color="#94a3b8" />
                                                    <div>
                                                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Type</p>
                                                        <strong style={{ color: '#fff' }}>{data.type}</strong>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#cbd5e1' }}>
                                                    <MapPin size={18} color="#94a3b8" />
                                                    <div>
                                                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Location</p>
                                                        <strong style={{ color: '#fff' }}>{data.location}</strong>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#cbd5e1' }}>
                                                    <Tag size={18} color="#94a3b8" />
                                                    <div>
                                                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Domain</p>
                                                        <strong style={{ color: '#fff' }}>{data.category}</strong>
                                                    </div>
                                                </div>
                                                {/* Employees - NEW */}
                                                {data.employees && (
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#cbd5e1' }}>
                                                        <Building size={18} color="#94a3b8" />
                                                        <div>
                                                            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>Size</p>
                                                            <strong style={{ color: '#fff' }}>{data.employees}</strong>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Features - NEW */}
                                        {data.features && (
                                            <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
                                                <h4 style={{ marginBottom: '1rem', color: '#a78bfa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Benefits & Perks</h4>
                                                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                                    {data.features.map((feature, i) => (
                                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.9rem' }}>
                                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa' }}></div>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    <div style={{
                                        width: '100%', padding: '1rem',
                                        background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.2)',
                                        borderRadius: '12px', marginBottom: '2rem', display: 'flex', gap: '12px', alignItems: 'start'
                                    }}>
                                        <CheckCircle size={20} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <div>
                                            <p style={{ fontSize: '0.95rem', color: '#dcfce7', margin: '0 0 4px 0', fontWeight: '600' }}>Authentication Verified</p>
                                            <p style={{ fontSize: '0.85rem', color: '#bbf7d0', margin: 0 }}>
                                                You are logged in and eligible to apply. Clicking below will redirect you to the company's official career page.
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href={data.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-full"
                                        onClick={() => setShowModal(false)}
                                        style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', textDecoration: 'none', alignItems: 'center', gap: '8px', width: '100%', padding: '16px', fontSize: '1.1rem' }}
                                    >
                                        Continue to Official Site <ExternalLink size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
=======
import React from 'react';
import { MapPin, Briefcase, Tag, ExternalLink } from 'lucide-react';
import './InternshipCard.css';

const InternshipCard = ({ data }) => {
    return (
        <div className="card glass fade-in">
            <div className="card-header">
                {data.logo ? (
                    <img src={data.logo} alt={`${data.company} logo`} className="company-logo" />
                ) : (
                    <div className="company-logo-placeholder">{data.company[0]}</div>
                )}
                <div style={{ flex: 1 }}>
                    <h3 className="company-name">{data.company}</h3>
                    <p className="role">{data.role}</p>
                </div>
            </div>

            <div className="card-body">
                <div className="info-row">
                    <MapPin size={16} className="icon-sm" />
                    <span>{data.location}</span>
                </div>

                <div className="tags">
                    <span className="tag type">
                        <Briefcase size={12} style={{ marginRight: 4 }} />
                        {data.type}
                    </span>
                    <span className="tag category">
                        <Tag size={12} style={{ marginRight: 4 }} />
                        {data.category}
                    </span>
                </div>
            </div>

            <div className="card-footer">
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="btn btn-full">
                    Apply Now <ExternalLink size={16} style={{ marginLeft: 8 }} />
                </a>
            </div>
        </div>
>>>>>>> ced380f5ecadf761e1533af619b8b64dc355490f
    );
};

export default InternshipCard;

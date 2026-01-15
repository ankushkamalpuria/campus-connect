import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Globe, Sparkles } from 'lucide-react';

const AboutUs = () => {
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
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="container"
            style={{ paddingTop: '6rem', paddingBottom: '4rem' }}
        >
            {/* Hero Section */}
            <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative' }}>
                <motion.div
                    className="glass"
                    style={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}
                    variants={itemVariants}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #38bdf8, #a855f7)' }}></div>
                    <motion.h1
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Empowering the <span style={{ color: '#38bdf8' }}>Next Gen</span> of Tech
                    </motion.h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                        We are bridging the gap between student talent and world-class technology companies.
                        Our mission is to democratize access to career-changing opportunities.
                    </p>
                </motion.div>
            </div>

            {/* Mission & Vision */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                <motion.div variants={itemVariants} className="glass" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: 'rgba(56, 189, 248, 0.15)', padding: '12px', borderRadius: '12px' }}>
                            <Target size={32} color="#38bdf8" />
                        </div>
                        <h2 style={{ margin: 0 }}>Our Mission</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        To simplify the internship hunt by providing a centralized, verified, and clutter-free platform.
                        We believe every student deserves a fair shot at their dream job, regardless of their background.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="glass" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: 'rgba(168, 85, 247, 0.15)', padding: '12px', borderRadius: '12px' }}>
                            <Globe size={32} color="#a855f7" />
                        </div>
                        <h2 style={{ margin: 0 }}>Global Impact</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                        Connecting students from over 50 countries with opportunities at top-tier tech giants.
                        We are building a borderless community of future innovators and leaders.
                    </p>
                </motion.div>
            </div>

            {/* Values Section */}
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Our Core Values</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                {[
                    { icon: <Heart size={24} />, title: 'Student First', desc: 'Every decision we make prioritizes the student experience.', color: '#ef4444' },
                    { icon: <Users size={24} />, title: 'Inclusivity', desc: 'Tech is for everyone. We champion diversity in every form.', color: '#fb923c' },
                    { icon: <Sparkles size={24} />, title: 'Excellence', desc: 'We only list the highest quality opportunities.', color: '#eab308' }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="glass"
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        style={{ padding: '2rem', textAlign: 'center', borderTop: `4px solid ${item.color}` }}
                    >
                        <div style={{ background: `${item.color}22`, color: item.color, width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                            {item.icon}
                        </div>
                        <h3 style={{ marginBottom: '1rem' }}>{item.title}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Team/Story Section */}
            <motion.div variants={itemVariants} className="glass" style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(56, 189, 248, 0.05) 100%)' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Built by Students, for Students</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2rem' }}>
                    We started as a small discord server helping each other revise resumes.
                    Today, we help thousands of students launch their careers.
                </p>

            </motion.div>

        </motion.div>
    );
};

export default AboutUs;

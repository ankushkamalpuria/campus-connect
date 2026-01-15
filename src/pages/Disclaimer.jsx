import React from 'react';

const Disclaimer = () => {
    return (
        <div className="container fade-in" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
            <div className="glass" style={{ padding: '3rem' }}>
                <h1 style={{ marginBottom: '2rem', color: 'var(--accent-color)' }}>Disclaimer</h1>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    <strong>Tech Internship Hub</strong> is a discovery platform designed to help students find internship opportunities at top tech companies.
                </p>
                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    We <strong>do not</strong> provide internships directly, nor do we host application forms. All "Apply Now" buttons redirect users to the official career pages of the respective companies.
                </p>
                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    We are not affiliated with, endorsed by, or sponsored by any of the companies listed on this platform (such as Google, Microsoft, Amazon, etc.). All logos and trademarks belong to their respective owners.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Please verify internship details on the official company websites before applying.
                </p>
            </div>
        </div>
    );
};

export default Disclaimer;

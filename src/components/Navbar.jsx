import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    return (
        <nav className="navbar glass">
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    Intern<span className="accent">Hub</span>
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/internships" className="nav-link">Internships</Link>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Link to="/internships" className="btn btn-sm">Browse</Link>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="btn btn-sm" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}>
                                Sign In
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

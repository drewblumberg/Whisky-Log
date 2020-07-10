import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <Link to="/">
                    <img alt="pot still logo" src="pot-still.png" />
                    WHISKY LOG
                </Link>
            </div>
            <div className="nav-link">
                <span>
                    <Link to="/about">
                        About
                    </Link>
                </span>
            </div>
        </div>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this file exists for styling

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo-container">
                    <img 
                        src="https://seeklogo.com/images/C/chittagong-university-of-engineering-and-technolog-logo-27727AB3FD-seeklogo.com.png" 
                        alt="CUET logo" 
                        className="logo" 
                    />
                    <div className="header-text">
                        <h1 className="university-name">Chittagong University of Engineering and Technology</h1>
                        <h2 className="app-title">CUET Transport Management App</h2>
                    </div>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/routes">Routes</Link></li>
                    {/* Replace the static route with dynamic route */}
                    <li><Link to={`/bus-stopages`}>Bus Stopages</Link></li> {/* Example for Route 1 */}
                    <li><Link to="/bus-seat-booking">Seat Booking</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/feedback">Feedback</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

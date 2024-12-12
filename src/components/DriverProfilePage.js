import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DriverProfilePage.css";


function DriverProfilePage() {
    const location = useLocation();
    const driverData = location.state?.driver || {};

    return (
        <div className="driver-profile-page">
            
            
            <h3>Driver Profile</h3>
            <div className="profile-container">
                <div className="profile-details">
                    <p>
                        <strong>Driver ID:</strong> {driverData.driverId}
                    </p>
                    <p>
                        <strong>Name:</strong> {driverData.name}
                    </p>
                    <p>
                        <strong>Contact No:</strong> {driverData.contactNo}
                    </p>
                   <p>
                        <strong>License No:</strong> {driverData.licenseNo}
                    </p>
                    
                    <p>
                        <strong>Route ID:</strong> {driverData.routeId}
                    </p>
                   
                    <button>
                        <Link to="/">← Back to Home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default DriverProfilePage;
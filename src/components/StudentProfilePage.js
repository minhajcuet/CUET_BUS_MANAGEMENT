import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './StudentProfilePage.css';
 

function StudentProfilePage() {
    const location = useLocation();
    const studentData = location.state?.student || {};

    return (
        <div className="student-profile-page">
               {/* Add this line to include the Navbar */}
            
            <p style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold' ,margin:'60px',color:'white'}}>Student Profile</p>
            <div className="profile-container">
                <div className="profile-detailss">
                    <p><strong>Student ID:</strong> {studentData.studentId}</p>
                    <p><strong>Name:</strong> {studentData.name}</p>
                    <p><strong>Department:</strong> {studentData.department}</p>
                    <p><strong>Batch:</strong> {studentData.batch}</p>
                    <p><strong>Gender:</strong> {studentData.gender}</p>
                    {/* <p><strong>Hall:</strong> {studentData.hall}</p>
                    <p><strong>Blood Group:</strong> {studentData.bloodGroup}</p> */}
                    <p><strong>Contact No:</strong> {studentData.contactNo}</p>
                    <p><strong>Email:</strong> {studentData.email}</p>
                </div>
                
                <div className="profile-actions">
                    <Link to="/bus-schedule" className="button seat-booking-button">Go to Seat Booking</Link>
                    <Link to="/" className="button back-home-button">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default StudentProfilePage;

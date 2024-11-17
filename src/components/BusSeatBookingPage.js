import React from 'react';
import './BusSeatBookingPage.css';

function BusSeatBookingPage() {
    return (
        <div className="booking-page">
            
            <div className="main-content">
                <h3 className="booking-window">Booking Window (Bus Name)</h3>
                <p>Time for response ends in: ...</p>

                {/* Seat Layout */}
                <div className="seat-layout">
                    <div className="seat-indicator">
                        <div className="occupied-seat">Occupied</div>
                        <div className="booked-seat">Booked</div>
                        <div className="vacant-seat">Vacant</div>
                    </div>

                    <div className="seats">
                        {/* Dynamically render seats with different statuses */}
                        {[...Array(40)].map((_, i) => (
                            <div key={i} className={`seat ${i < 5 ? 'occupied' : i < 10 ? 'booked' : 'vacant'}`}>
                                {i + 1}
                            </div>
                        ))}
                    </div>
                <button className="navigate-button" onClick={() => window.location.href = '/busseatcon'}>
                    Go to Bus Seat Confirmation
                </button>
                </div>
            </div>

            {/* Footer */}
            
        </div>
    );
}

export default BusSeatBookingPage;

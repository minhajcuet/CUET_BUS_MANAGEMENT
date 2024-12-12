import React, { useState, useEffect } from 'react';
import './BusSeatBookingPage.css';

function BusSeatBookingPage() {
    const [busStops, setBusStops] = useState([]);  // State for holding bus stops
    const [selectedBusStop, setSelectedBusStop] = useState(""); // State for selected bus stop
    
    // Fetch bus stops from the API when the component mounts
    useEffect(() => {
        const fetchBusStops = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/busstopages/');
                const data = await response.json();
                console.log("Bus stops data:", data); // Log API response
                setBusStops(data);
            } catch (error) {
                console.error("Error fetching bus stops:", error);
            }
        };
    
        fetchBusStops();
    }, []);
    
    

    // Handle bus stop selection
    const handleBusStopChange = (event) => {
        setSelectedBusStop(event.target.value);  // Update selected bus stop
    };

    return (
        <div className="booking-page">
            <div className="main-content">
                <h3 className="booking-window">Booking Window (Bus Name)</h3>
                <p>Time for response ends in: ...</p>

                {/* Bus Stop Selection */}
                <div className="bus-stop-selection">
                    <label htmlFor="bus-stop">Select Bus Stop:</label>
                    <select 
                        id="bus-stop" 
                        value={selectedBusStop} 
                        onChange={handleBusStopChange}
                    >
                        <option value="">-- Select Bus Stop --</option>
                        {busStops.map((busStop) => (
                            <option key={busStop.stopageName} value={busStop.stopageName}>
                                {busStop.stopageName}
                            </option>
                        ))}
                    </select>
                </div>

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
                    <button 
                        className="navigate-button" 
                        onClick={() => window.location.href = '/busseatcon'}
                    >
                        Go to Bus Seat Confirmation
                    </button>
                </div>
            </div>

            {/* Footer */}
        </div>
    );
}

export default BusSeatBookingPage;

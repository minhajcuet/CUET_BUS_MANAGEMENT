import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios for fetching data
import './BusSchedulePage.css';

function BusSchedulePage() {
    const [buses, setBuses] = useState([]);
    const [selectedBus, setSelectedBus] = useState(null);
    const [busStops, setBusStops] = useState([]);  // Added state for bus stops
    const [selectedBusStop, setSelectedBusStop] = useState("");  // State for selected bus stop

    const handleBusStopChange = (event) => {
        console.log('Selected bus stop:', event.target.value);
        setSelectedBusStop(event.target.value);
    };
    
    useEffect(() => {
        console.log('Fetching bus stops...');
        axios.get('http://localhost:8080/api/busstopages')
            .then(response => {
                console.log('Bus stops received:', response.data);
                setBusStops(response.data);
            })
            .catch(error => {
                console.error('Error fetching bus stops:', error);
            });

            axios.get('http://localhost:8080/api/buses/active')  // Adjust to your real API endpoint
            .then(response => {
                setBuses(response.data);
            })
            .catch(error => {
                console.error('Error fetching buses data:', error);
            });
    }, []);

    const handleBusClick = (bus) => {
        setSelectedBus(bus);
    };

    // const handleBusStopChange = (event) => {
    //     setSelectedBusStop(event.target.value);  // Update selected bus stop
    // };

    const closeModal = () => {
        setSelectedBus(null);
    };

    return (
        <div style={styles.container}>
            <div className='dd'>
                <h1 style={styles.title}>Bus Schedule and Seat Booking</h1>

                {/* Bus Stop Selection Dropdown */}
                <div style={styles.busStopSelection}>
    <label htmlFor="bus-stop">Select Bus Stop:</label>
    <select
        id="bus-stop"
        value={selectedBusStop}
        onChange={handleBusStopChange}
        style={styles.dropdown}
    >
        <option value="">-- Select Bus Stop --</option>
        {busStops.map((busStop) => (
            <option 
                key={busStop.stopageName} // Changed from id to stopageName
                value={busStop.stopageName} // Changed from name to stopageName
            >
                {busStop.stopageName} {/* Changed from name to stopageName */}
            </option>
        ))}
    </select>
</div>

                <div style={styles.busStatus}>
                    <h2 style={styles.statusTitle}>Status:</h2>
                    <h2 style={styles.busListTitle}>Bus List: ({buses.length} buses)</h2>
                    <h3 style={styles.activeBusList}>Active Bus List</h3>
                </div>

                <div style={styles.busList}>
                    {buses.map((bus, index) => (
                        <div
                            key={index}
                            onClick={() => handleBusClick(bus)}
                            style={{
                                ...styles.busCard,
                                backgroundColor: bus.femaleOnly ? '#ffe6e6' : '#e6ffe6',
                            }}
                        >
                            <h3>{bus.name}</h3>
                            
                            <p>Occupied: {bus.occupied}</p>
                            <p>Booked: {bus.booked}</p>
                            <p>Vacant: {bus.vacant}</p>
                            <p>Now At: {bus.location}</p>
                            <p style={styles.detailText}>Click here to view details</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={styles.buttonContainer}>
                <button style={styles.backButton} onClick={() => window.location.href = '/student-profile'}>Back</button>
            </div>

            {selectedBus && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2>{selectedBus.name} Details</h2>
                        <p><strong>Location:</strong> {selectedBus.location}</p>
                        <p><strong>Occupied Seats:</strong> {selectedBus.occupied}</p>
                        <p><strong>Vacant Seats:</strong> {selectedBus.vacant}</p>
                        <p><strong>Route:</strong> {selectedBus.route.join(' -> ')}</p>
                        <button style={styles.closeButton} onClick={closeModal}>Close</button>
                        <button style={styles.bookButton} onClick={() => window.location.href = '/bus-seat-booking'}>Book A Seat</button>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        border: '2px solid #333',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f2f5f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: '36px',
        color: '#333',
        fontWeight: 'bold',
        marginBottom: '20px',
        textTransform: 'uppercase',
    },
    busStopSelection: {
        marginBottom: '20px',
        textAlign: 'center',
        color: 'black',
    },
    dropdown: {
        fontSize: '16px',
        padding: '8px 16px',
        marginTop: '10px',
        width: '200px',
        color: 'black',
    },
    busStatus: {
        marginTop: '20px',
        textAlign: 'center',
    },
    statusTitle: {
        fontWeight: 'bold',
        color: '#444',
        fontSize: '28px',
        marginBottom: '10px',
    },
    busListTitle: {
        color: '#007bff',
        fontSize: '24px',
    },
    activeBusList: {
        fontWeight: 'bold',
        color: '#444',
        fontSize: '20px',
        marginBottom: '20px',
    },
    busList: {
        backgroundImage: 'url("https://wallpapercave.com/wp/wp9764031.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '2px solid black',
        borderRadius: '12px',
        shadow: '0px 6px 12px rgba(0, 0, 0, 3)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        padding: '10px',
        width: '90%',
        maxWidth: '1200px',
    },
    busCard: {
        backgroundColor: '#e6ffe6',
        border: '1px solid #333',
        width: '200px',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        textTransform: 'capitalize',
    },
    detailText: {
        fontSize: '12px',
        color: '#666',
        fontStyle: 'italic',
    },
    buttonContainer: {
        display: 'flex',
        gap: '15px',
        marginTop: '20px',
    },
    backButton: {
        padding: '10px 20px',
        width: '100px',
        fontSize: '16px',
        backgroundColor: '#555',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    bookButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    modal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
        width: '80%',
        maxWidth: '400px',
        textAlign: 'center',
    },
   
}


export default BusSchedulePage;
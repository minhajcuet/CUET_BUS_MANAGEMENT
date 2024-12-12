import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AssignDriverToBus = () => {
    const [buses, setBuses] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [selectedBus, setSelectedBus] = useState("");
    const [selectedDriver, setSelectedDriver] = useState("");
    const [busStatus, setBusStatus] = useState("INACTIVE"); // Default status set to ACTIVE
    const [assignments, setAssignments] = useState([]);  // To store multiple assignments

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch drivers
        axios.get("http://localhost:8080/api/drivers/")
            .then(response => setDrivers(response.data))
            .catch(error => console.error("Error fetching drivers:", error));

        // Fetch buses
        // axios.get("http://localhost:8080/api/buses")
        //     .then(response => setBuses(response.data))
        //     .catch(error => console.error("Error fetching buses:", error));

        
            axios.get("http://localhost:8080/api/buses/inactive") // Fetch inactive buses
                .then(response => setBuses(response.data))
                .catch(error => console.error(error));
        
                

    }, []);

    const handleAssign = () => {
        if (selectedBus && selectedDriver) {
            // Add the current assignment to the list
            setAssignments(prevAssignments => [
                ...prevAssignments,
                { bus: selectedBus, driver: selectedDriver, status: busStatus }
            ]);

            // Update the bus status to ACTIVE when a driver is assigned
            axios.put(`http://localhost:8080/api/buses/${selectedBus}/status`, null, { params: { status: busStatus } })
                .then(() => console.log(`Bus ${selectedBus} status updated to ${busStatus}`))
                .catch(error => console.error("Error updating bus status:", error));

            // Clear the selection
            setSelectedBus("");
            setSelectedDriver("");
            setBusStatus("ACTIVE"); // Reset the status to ACTIVE for the next assignment
        }
    };

    const handleSubmitAssignments = () => {
        // Submit all assignments to the backend
        assignments.forEach(assignment => {
            axios.post(`http://localhost:8080/api/drivers/${assignment.driver}/assign-to-bus/${assignment.bus}`)
                .then(() => alert("Driver assigned to bus successfully!"))
                .catch(error => console.error("Error assigning driver:", error));
        });

        // Clear all assignments after submission
        setAssignments([]);
    };

    return (
        <div>
            <h1>Assign Driver to Bus</h1>
            <div>
                <label>Select Bus: </label>
                <select value={selectedBus} onChange={e => setSelectedBus(e.target.value)}>
                    <option value="">--Select Bus--</option>
                    {buses.map(bus => (
                        <option key={bus.name} value={bus.name}>{bus.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Select Driver: </label>
                <select value={selectedDriver} onChange={e => setSelectedDriver(e.target.value)}>
                    <option value="">--Select Driver--</option>
                    {drivers.map(driver => (
                        <option key={driver.driverId} value={driver.driverId}>{driver.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Bus Status: </label>
                <select value={busStatus} onChange={e => setBusStatus(e.target.value)}>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                    <option value="UNDER_MAINTENANCE">UNDER MAINTENANCE</option>
                </select>
            </div>
            <button onClick={handleAssign}>Assign Driver</button>

            <h3>Assignments:</h3>
            <ul>
                {assignments.map((assignment, index) => (
                    <li key={index}>
                        Bus: {assignment.bus}, Driver: {assignment.driver}, Status: {assignment.status}
                    </li>
                ))}
            </ul>

            {assignments.length > 0 && (
                <button onClick={handleSubmitAssignments}>Confirm All Assignments</button>
            )}
            <button onClick={()=>navigate("/active-buses-drivers")}>Dashboard</button>
        </div>
    );
};

export default AssignDriverToBus;

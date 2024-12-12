import React, { useEffect, useState } from "react";
import axios from "axios";

const ActiveBusesWithDrivers = () => {
    const [activeBuses, setActiveBuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // Fetch active buses with their drivers
        axios.get("http://localhost:8080/api/buses/active-with-drivers")
            .then((response) => {
                setActiveBuses(response.data);  // Set the active buses data
                setLoading(false);  // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching active buses with drivers:", error);
                setError("Failed to fetch active buses. Please try again.");  // Set the error message
                setLoading(false);  // Stop loading even when there is an error
            });
    }, []);

    const makeAllBusesInactive = () => {
        activeBuses.forEach((bus) => {
            // Send PUT request to update the bus status to INACTIVE
            axios.put(`http://localhost:8080/api/buses/${bus.name}/status?status=INACTIVE`)
                .then((response) => {
                    console.log(`Bus ${bus.name} status updated to INACTIVE.`);
                })
                .catch((error) => {
                    console.error(`Error updating status for bus ${bus.name}:`, error);
                });
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Active Buses with Drivers</h1>
            {activeBuses.length > 0 ? (
                <>
                    <button onClick={makeAllBusesInactive} style={{ marginBottom: "20px" }}>
                        Make All Buses Inactive
                    </button>
                    <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th>Bus Name</th>
                                <th>Driver Name</th>
                                <th>Driver ID</th>
                                <th>Bus Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activeBuses.map((bus) => (
                                <tr key={bus.name}>
                                    <td>{bus.name}</td>
                                    {/* <td>{bus.driver ? bus.driver.name : "No Driver Assigned"}</td>
                                    <td>{bus.driver ? bus.driver.driverId : "N/A"}</td> */}
                                    <td>{bus.busStatus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <p>No active buses found.</p>
            )}
        </div>
    );
};



const styles = {
    inactiveButton: {
        padding: "10px 20px",
        backgroundColor: "#f44336",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom: "20px",
    },
};

export default ActiveBusesWithDrivers;

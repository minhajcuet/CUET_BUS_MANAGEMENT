import React from 'react';
import './BusStopagePage.css';

const BusStopagePage = () => {
    // Define the unique bus stops with dynamic image URLs and descriptions
    const busStopages = [
        { name: 'Station', image: 'https://example.com/images/station.jpg', description: 'Main bus station.' },
        { name: 'Tigerpass', image: 'https://example.com/images/tigerpass.jpg', description: 'Popular bus stop for commuters.' },
        { name: 'Lalkhan Bazar', image: 'https://example.com/images/lalkhanbazar.jpg', description: 'Bazar area, busy with foot traffic.' },
        { name: 'GEC', image: 'https://lh5.googleusercontent.com/p/AF1QipPxw1gRQxXCwTShQ0aomF9j_1hM1o1yBea_Q8r2=w408-h306-k-no', description: 'Located near the General Electric company.' },
        { name: '2 No Gate', image: 'https://example.com/images/2no_gate.jpg', description: 'Second entry point to the campus.' },
        { name: 'Muradpur', image: 'https://example.com/images/muradpur.jpg', description: 'Residential area, well connected.' },
        { name: 'Bohodderhat', image: 'https://i.ytimg.com/vi/gAUY1pYB8hI/maxresdefault.jpg', description: 'Famous junction for buses.' },
        { name: 'Rasthermatha', image: 'https://example.com/images/rasthermatha.jpg', description: 'Located near the main street.' },
        { name: 'Kuaish', image: 'https://example.com/images/kuaish.jpg', description: 'A developing neighborhood.' },
        { name: 'CUET', image: 'https://example.com/images/cuet.jpg', description: 'The main stop for CUET.' },
        // Route 2 stops
        { name: 'Badam Toli', image: 'https://example.com/images/badamtoli.jpg', description: 'Residential area.' },
        { name: 'GC', image: 'https://example.com/images/gc.jpg', description: 'Known for its commercial area.' },
        { name: 'Oxygen', image: 'https://example.com/images/oxygen.jpg', description: 'Popular area for shopping.' },
        { name: 'Ananya Abashik', image: 'https://example.com/images/ananya_abashik.jpg', description: 'Residential complex area.' },
        { name: 'Khwaish', image: 'https://example.com/images/khwaish.jpg', description: 'A new residential area.' },
    ];

    return (
        <div className="bus-stopage-page">
            <h1 style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold' ,margin:'30px',color:'black'}}>Bus Stopages</h1>
            <p style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold' ,margin:'30px',color:'black'}}>Explore all the bus stops across different routes.</p>
            
            <div className="bus-stopages-container">
                {busStopages.map((stop, index) => (
                    <div key={index} className="bus-stopage-item">
                        <img src={stop.image} alt={stop.name} className="bus-stopage-image" />
                        <h3 className="bus-stopage-name">{stop.name}</h3>
                        <p className="bus-stopage-description">{stop.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusStopagePage;

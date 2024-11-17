import React from 'react';



function MissionPage() {
    return (
        <div style={styles.pageContainer}>
           
            <main style={styles.mainContent}>
                <h1 style={styles.title}>Our Mission</h1>
                <p style={styles.description}>Our mission at the Chittagong University of Engineering and Technology (CUET) Transport Management App is rooted in a commitment to enhancing the daily transit experience for students, faculty, and staff. We recognize that transportation is a critical component of campus life, impacting not only convenience but also safety, accessibility, and environmental sustainability. With this in mind, we are dedicated to creating a system that is reliable, efficient, and mindful of our planet.

One of our primary objectives is to improve the efficiency of transportation services, ensuring that every student and staff member can rely on timely and comfortable commutes. We are actively working to streamline routes, reduce wait times, and offer real-time tracking, so that everyone can plan their journeys with confidence and minimal disruption.

In alignment with global environmental goals, CUET is also exploring and introducing eco-friendly bus options. By transitioning to electric or hybrid vehicles, we aim to reduce our carbon footprint, promoting a cleaner, healthier campus environment. This shift is not only an investment in our community’s future but also a testament to CUET’s dedication to sustainability and innovation.

Furthermore, we understand the importance of making transit information easily accessible. Our app is designed to provide a user-friendly platform where students and staff can access schedules, track buses in real time, receive alerts about delays, and stay informed about any changes to services. This digital approach enhances transparency and empowers users with the information they need, right at their fingertips.

Our mission goes beyond simply managing transportation logistics; it is about building a community-oriented system that enhances the quality of life for all CUET members. We believe that by investing in modern, eco-conscious solutions, we can foster a culture of sustainability and innovation that will benefit generations to come. Through continuous improvement and feedback from our community, we are committed to evolving our transport services to meet the growing needs of CUET.</p>
            </main>
            <footer style={styles.footer}>
                <p style={styles.footerText}>© 2023 CUET Transport Management. All rights reserved.</p>
            </footer>
        </div>
    );
}

const styles = {
    pageContainer: {
        
        fontFamily: "'Arial', sans-serif",
        textAlign: 'center',
        color: 'white',
        margin:'-20px',
        padding: '20px',
    },
    // header: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     padding: '20px',
    //     backgroundColor: '#004d99',
    //     color:"#4CAF50",
    // },
    // logoContainer: {
    //     marginRight: '20px',
    // },
    // logo: {
    //     width: '60px',
    //     height: '60px',
    // },
    // textContainer: {
    //     textAlign: 'left',
    // },
    // universityName: {
    //     fontSize: '1.5em',
    //     margin: '0',
    //     color: '#fff',
    // },
    // appTitle: {
    //     fontSize: '1.2em',
    //     margin: '0',
    //     color: '#fff',
    //     fontStyle: 'italic',
    // },
    p:
    {
        color:'white',
    },
    mainContent: {
        
        padding: '30px 10px',
        backgroundColor: 'white',
        borderRadius: '8px',
        margin: '20px auto',
        maxWidth: '600px',
    },
    title: {
        fontSize: '2em',
        marginBottom: '10px',
    },
    description: {
        color:'black',
        display: 'flex',    
        fontSize: '1.1em',
        lineHeight: '1.6',
    },
    footer: {
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: '8px',
    },
    footerText: {
        fontSize: '0.9em',
        margin: '0',
    },
};

export default MissionPage;

import React from 'react';

const Beta = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            height: '100vh',
            backgroundColor: '#ffffff',
            color: '#000000',
            fontFamily: "'Shippori Antique', sans-serif"
        }}>
            <head>
                <title>Klarity</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap" />
            </head>
            <img src="/KLARITY%20Logo.png" alt="KLARITY" style={{ width: '200px', marginBottom: '20px' }} />
            <div style={{
                fontSize: '24px',
                margin: '20px 0'
            }}>
                Your Center Message Here
            </div>
            <nav style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
            }}>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '18px',
                    transition: 'color 0.3s',
                    cursor: 'pointer'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#777777'} onMouseOut={(e) => e.currentTarget.style.color = '#000000'}>HOME</a>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '18px',
                    transition: 'color 0.3s',
                    cursor: 'pointer'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#777777'} onMouseOut={(e) => e.currentTarget.style.color = '#000000'}>FEATURES</a>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '18px',
                    transition: 'color 0.3s',
                    cursor: 'pointer'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#777777'} onMouseOut={(e) => e.currentTarget.style.color = '#000000'}>PRICING</a>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '18px',
                    transition: 'color 0.3s',
                    cursor: 'pointer'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#777777'} onMouseOut={(e) => e.currentTarget.style.color = '#000000'}>CONTACT</a>
            </nav>
        </div>
    );
};

export default Beta;

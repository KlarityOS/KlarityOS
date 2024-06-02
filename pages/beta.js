import React from 'react';

const Beta = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#ffffff',
            color: '#000000',
            fontFamily: "'Shippori Antique', sans-serif",
            padding: '20px'
        }}>
            <head>
                <title>Klarity</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap" />
            </head>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: '80%',
                maxWidth: '1200px',
                marginTop: '10px'
            }}>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}>WHY US</a>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}>PRICING</a>
                <img src="/KLARITY%20Logo.png" alt="KLARITY" style={{ height: '50px', margin: '0 40px' }} />
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}>FAQ</a>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}>CLIENT LOGIN</a>
            </div>
            <div style={{
                fontSize: '64px',
                color: '#000000',
                textAlign: 'center',
                margin: '40px 0',
                width: '80%'
            }}>
                What do you need clarity on today?
            </div>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '80%',
                maxWidth: '1200px',
                fontSize: '24px',
                color: '#777777',
                marginTop: '10px',
                marginBottom: '20px' // Added to bring the bottom menu closer to the center message
            }}>
                <a href="#" style={{
                    color: '#777777',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    cursor: 'pointer',
                    flex: '1',
                    textAlign: 'center'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#000000'} onMouseOut={(e) => e.currentTarget.style.color = '#777777'}>ACCOUNTING</a>
                <a href="#" style={{
                    color: '#777777',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    cursor: 'pointer',
                    flex: '1',
                    textAlign: 'center'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#000000'} onMouseOut={(e) => e.currentTarget.style.color = '#777777'}>BUSINESS OPERATIONS</a>
                <a href="#" style={{
                    color: '#777777',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    cursor: 'pointer',
                    flex: '1',
                    textAlign: 'center'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#000000'} onMouseOut={(e) => e.currentTarget.style.color = '#777777'}>CAPITAL STRATEGY</a>
            </nav>
        </div>
    );
};

export default Beta;

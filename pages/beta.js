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
            fontFamily: "'Shippori Antique', sans-serif",
            padding: '20px'
        }}>
            <head>
                <title>Klarity</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap" />
            </head>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                width: '100%',
                maxWidth: '1200px',
                marginBottom: '20px'
            }}>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '16px',
                    margin: '0 40px',
                    cursor: 'pointer'
                }}>WHY US</a>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '16px',
                    margin: '0 40px',
                    cursor: 'pointer'
                }}>PRICING</a>
                <img src="/KLARITY%20Logo.png" alt="KLARITY" style={{ height: '50px', margin: '0 40px' }} />
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '16px',
                    margin: '0 40px',
                    cursor: 'pointer'
                }}>FAQ</a>
                <a href="#" style={{
                    color: '#000000',
                    textDecoration: 'none',
                    fontSize: '16px',
                    margin: '0 40px',
                    cursor: 'pointer'
                }}>CLIENT LOGIN</a>
            </div>
            <div style={{
                fontSize: '60px',
                margin: '20px 0',
                color: '#777777'
            }}>
                What do you need clarity on today?
            </div>
            <nav style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '40px',
                marginTop: '20px',
                fontSize: '24px',
                color: '#777777'
            }}>
                <a href="#" style={{
                    color: '#777777',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    cursor: 'pointer'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#000000'} onMouseOut={(e) => e.currentTarget.style.color = '#777777'}>ACCOUNTING</a>
                <a href="#" style={{
                    color: '#777777',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    cursor: 'pointer'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#000000'} onMouseOut={(e) => e.currentTarget.style.color = '#777777'}>BUSINESS OPERATIONS</a>
                <a href="#" style={{
                    color: '#777777',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    cursor: 'pointer'
                }} onMouseOver={(e) => e.currentTarget.style.color = '#000000'} onMouseOut={(e) => e.currentTarget.style.color = '#777777'}>CAPITAL STRATEGY</a>
            </nav>
        </div>
    );
};

export default Beta;

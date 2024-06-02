import React from 'react';

const Beta = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
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
                marginTop: '10px',
                position: 'absolute',
                top: '20px'
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
                fontSize: '70px',
                color: '#000000',
                textAlign: 'center',
                margin: 'auto 0',
                width: '100'
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
                marginTop: '2px' // Adjusted to be closer to the center message
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
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '80%',
                maxWidth: '1200px',
                fontSize: '16px',
                color: '#777777',
                marginTop: 'auto', // Adjusting the footer position slightly up
                paddingBottom: '50px' // Added padding to adjust the position of the footer
            }}>
                <div style={{
                    textAlign: 'left'
                }}>
                    <span>Built and operated by KRV Co., Ltd.</span>
                </div>
                <div style={{
                    textAlign: 'right'
                }}>
                    <span>© 2024 KRV Co., Ltd.</span>
                </div>
            </div>
        </div>
    );
};

export default Beta;

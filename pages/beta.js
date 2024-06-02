import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Beta = () => {
    return (
        <>
            <Head>
                <title>Klarity</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap" />
            </Head>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100vh',
                backgroundColor: '#000000',
                color: '#ffffff',
                fontFamily: "'Shippori Antique', sans-serif"
            }}>
                <Image src="/KLARITY Logo.png" alt="KLARITY" width={200} height={200} style={{ marginBottom: '20px' }} />
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
                        color: '#cccccc',
                        textDecoration: 'none',
                        fontSize: '18px',
                        transition: 'color 0.3s',
                        cursor: 'pointer'
                    }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#cccccc'}>HOME</a>
                    <a href="#" style={{
                        color: '#cccccc',
                        textDecoration: 'none',
                        fontSize: '18px',
                        transition: 'color 0.3s',
                        cursor: 'pointer'
                    }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#cccccc'}>FEATURES</a>
                    <a href="#" style={{
                        color: '#cccccc',
                        textDecoration: 'none',
                        fontSize: '18px',
                        transition: 'color 0.3s',
                        cursor: 'pointer'
                    }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#cccccc'}>PRICING</a>
                    <a href="#" style={{
                        color: '#cccccc',
                        textDecoration: 'none',
                        fontSize: '18px',
                        transition: 'color 0.3s',
                        cursor: 'pointer'
                    }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#cccccc'}>CONTACT</a>
                </nav>
            </div>
        </>
    );
};

export default Beta;


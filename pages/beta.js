import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../styles/beta.css'; // Correct import for the CSS file

const Beta = () => {
    return (
        <>
            <Head>
                <title>Klarity</title>
                <link rel="stylesheet" href="/styles/globals.css" /> {/* Correct path to global CSS */}
            </Head>
            <div className="container">
                <Image src="/KLARITY Logo.png" alt="KLARITY" width={200} height={200} className="logo" />
                <div className="centerMessage custom-font">Your Center Message Here</div>
                <nav className="menu">
                    <a href="#" className="menuItem custom-font">HOME</a>
                    <a href="#" className="menuItem custom-font">FEATURES</a>
                    <a href="#" className="menuItem custom-font">PRICING</a>
                    <a href="#" className="menuItem custom-font">CONTACT</a>
                </nav>
            </div>
        </>
    );
};

export default Beta;

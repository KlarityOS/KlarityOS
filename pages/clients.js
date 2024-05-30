import React from 'react';

const Clients = () => {
  const headingStyle = {
    fontSize: '48px',
    color: 'black', 
  };

  return (
    <div>
      <h1 style={headingStyle}>Customers</h1>
      <iframe
        title="Power BI Dashboard"
        width="100%"
        height="600px"
        src="https://app.powerbi.com/view?r=eyJrIjoiOGQ4YTUwNDctZWY3Yy00M2RmLThhNmItNjdkNGMzMDQ1ZjZjIiwidCI6IjI1OTBiMjJjLTJhNGQtNDkyNS04NjJjLWM0NTFmMzY2MTIyOSIsImMiOjEwfQ%3D%3D"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Clients;

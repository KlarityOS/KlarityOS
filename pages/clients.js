import React from 'react';

const Clients = () => {
  const headingStyle = {
    fontSize: '78px',
    color: 'black', 
  };

  return (
    <div>
      <h1 style={headingStyle}>Customers</h1> {/* Updated the text from "Clients" to "Customers" */}
      <iframe
        title="Power BI Dashboard"
        width="100%"
        height="800px"
        src="https://app.powerbi.com/view?r=eyJrIjoiOGQ4YTUwNDctZWY3Yy00M2RmLThhNmItNjdkNGMzMDQ1ZjZjIiwid"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Clients;

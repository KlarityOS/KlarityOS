import React from 'react';

const Clients = () => {
  return (
    <div>
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <img src="/BBV Intelligence Logo 4X.png" alt="BBV Intelligence Powered by Klarity" style={{ width: '100%', maxWidth: '350px' }} />
      </div>
      <div style={{ textAlign: 'right', marginBottom: '40px' }}>
        <span style={{ margin: '0 15px', cursor: 'pointer', fontSize: '20px' }}>Upload Files</span>
        <span style={{ margin: '0 15px', cursor: 'pointer', fontSize: '20px' }}>Client Portal</span>
        <span style={{ margin: '0 15px', cursor: 'pointer', fontSize: '20px' }}>Home</span>
      </div>
      <iframe
        title="Power BI Dashboard"
        width="100%"
        height="800px"
        src="https://app.powerbi.com/view?r=eyJrIjoiOGQ4YTUwNDctZWY3Yy00M2RmLThhNmItNjdkNGMzMDQ1ZjZjIiwidCI6IjI1OTBiMjJjLTJhNGQtNDkyNS04NjJjLWM0NTFmMzY2MTIyOSIsImMiOjEwfQ%3D%3D"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default Clients;

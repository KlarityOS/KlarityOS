import React from 'react';

const Demo = () => {
  return (
    <div>
      <div style={{ textAlign: 'left', marginBottom: '20px' }}>
        <img src="/BBV Intelligence Logo 4X.png" alt="BBV Intelligence Powered by Klarity" style={{ width: '100%', maxWidth: '400px' }} />
      </div>
      <div style={{ textAlign: 'right', marginBottom: '40px' }}>
        <span style={{ margin: '0 50px', cursor: 'pointer', fontSize: '16px' }}>UPLOAD FILES</span>
        <span style={{ margin: '0 50px', cursor: 'pointer', fontSize: '16px' }}>CLIENT PORTAL</span>
        <a href="https://klarityos.vercel.app/beta" style={{ margin: '0 50px', cursor: 'pointer', fontSize: '16px', textDecoration: 'none', color: 'inherit' }}>HOME</a>
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

export default Demo;

import React from 'react';

const PageLoader: React.FC = () => {
  return (
    <div
      style={{
        minHeight: 'calc(100vh)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Loading...
    </div>
  );
};

export default PageLoader;

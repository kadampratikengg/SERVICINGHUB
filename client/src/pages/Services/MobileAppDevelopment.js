import React from 'react';

const MobileAppDevelopment = () => {
  return (
    <main className='app-shell'>
      <div className='container section'>
        <div className='section-title text-center'>
          <h2>Mobile App (Hybrid)</h2>
          <p>Android / iOS apps</p>
        </div>
        <div className='surface-panel p-4 p-md-5'>
          <p>We develop cross-platform hybrid mobile applications that run smoothly on both Android and iOS from a single codebase. This approach reduces development time and cost while reaching a wider audience.</p>
          <h4>Technologies We Use:</h4>
          <ul>
            <li>React Native for native-like performance</li>
            <li>Flutter for beautiful, fast user experiences</li>
            <li>Integration with native device features (Camera, GPS, etc.)</li>
            <li>App Store and Google Play Store submission support</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MobileAppDevelopment;
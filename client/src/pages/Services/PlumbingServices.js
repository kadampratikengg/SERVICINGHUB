import React from 'react';

const PlumbingServices = () => {
  return (
    <main className='app-shell'>
      <div className='container section'>
        <div className='section-title text-center'>
          <h2>Plumbing Services</h2>
          <p>Repairs, installation</p>
        </div>
        <div className='surface-panel p-4 p-md-5'>
          <p>Our experienced plumbers provide reliable and efficient plumbing services. We handle all types of plumbing repairs and installations, from leaky faucets to new pipe installations, ensuring your plumbing system functions perfectly.</p>
          <h4>Common Services:</h4>
          <ul>
            <li>Leaky pipe and faucet repair</li>
            <li>Toilet and sink installation and repair</li>
            <li>Water heater installation and service</li>
            <li>Drain cleaning and blockage removal</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default PlumbingServices;

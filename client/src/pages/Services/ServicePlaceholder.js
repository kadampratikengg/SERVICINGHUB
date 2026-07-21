import React from 'react';

const ServicePlaceholder = ({ title, subtitle, description, points }) => (
  <main className='app-shell'>
    <div className='container section'>
      <div className='section-title text-center'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className='surface-panel p-4 p-md-5'>
        <p>{description}</p>
        {points?.length > 0 && (
          <>
            <h4>What we provide:</h4>
            <ul>
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  </main>
);

export default ServicePlaceholder;

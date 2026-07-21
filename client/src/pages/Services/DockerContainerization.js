import React from 'react';

const DockerContainerization = () => {
  return (
    <main className='app-shell'>
      <div className='container section'>
        <div className='section-title text-center'>
          <h2>Docker Containerization</h2>
          <p>Convert apps to containers</p>
        </div>
        <div className='surface-panel p-4 p-md-5'>
          <p>We package your applications and their dependencies into lightweight, portable Docker containers. This ensures consistency across development, testing, and production environments, eliminating the "it works on my machine" problem.</p>
          <h4>Benefits:</h4>
          <ul>
            <li>Consistent and isolated environments</li>
            <li>Simplified dependency management</li>
            <li>Faster application startup and scaling</li>
            <li>Improved developer productivity</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default DockerContainerization;
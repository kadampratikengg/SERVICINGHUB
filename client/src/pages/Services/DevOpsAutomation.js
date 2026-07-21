import React from 'react';

const CiCdPipelineSetup = () => {
  return (
    <main className='app-shell'>
      <div className='container section'>
        <div className='section-title text-center'>
          <h2>CI/CD Pipeline Setup</h2>
          <p>GitHub, GitLab, Jenkins</p>
        </div>
        <div className='surface-panel p-4 p-md-5'>
          <p>We automate your build, test, and deployment processes using robust CI/CD pipelines. This accelerates your development cycle, improves code quality, and allows for more frequent and reliable releases.</p>
          <h4>Our Expertise:</h4>
          <ul>
            <li><strong>CI/CD Tools:</strong> GitHub Actions, GitLab CI, Jenkins</li>
            <li>Automated testing integration (unit, integration, E2E)</li>
            <li>Multi-stage deployment strategies (dev, staging, prod)</li>
            <li>Notifications and reporting for pipeline status</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default CiCdPipelineSetup;
import React from 'react';

const InfrastructureAsCode = () => {
  return (
    <main className='app-shell'>
      <div className='container section'>
        <div className='section-title text-center'>
          <h2>Infrastructure as Code</h2>
          <p>Terraform, Ansible</p>
        </div>
        <div className='surface-panel p-4 p-md-5'>
          <p>We define and manage your cloud infrastructure using code. This approach enables versioning, reusability, and automation of your infrastructure provisioning, leading to faster, more reliable, and repeatable environment setups.</p>
          <h4>Tools and Practices:</h4>
          <ul>
            <li><strong>Terraform:</strong> For provisioning cloud resources across providers.</li>
            <li><strong>Ansible:</strong> For configuration management and application deployment.</li>
            <li>Creating reusable modules and playbooks</li>
            <li>Integrating IaC into CI/CD pipelines for full automation</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default InfrastructureAsCode;
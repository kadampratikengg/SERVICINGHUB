import React from 'react';

const AWSCloudSetup = () => {
  return (
    <main className='app-shell'>
      <div className='container section'>
        <div className='section-title text-center'>
          <h2>AWS Cloud Setup</h2>
          <p>EC2, IAM, S3, VPC</p>
        </div>
        <div className='surface-panel p-4 p-md-5'>
          <p>
            We set up AWS infrastructure for reliability, security, and cost
            control. Our team configures EC2, VPC, IAM, and S3 to meet your
            application requirements while following AWS best practices.
          </p>
          <h4>Included services:</h4>
          <ul>
            <li>EC2 instance planning and provisioning</li>
            <li>VPC design, subnets, security groups, and NAT</li>
            <li>IAM roles, policies, and secure access configuration</li>
            <li>S3 storage architecture with backup and lifecycle rules</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AWSCloudSetup;

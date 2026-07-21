import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const GcpCloudSetup = () => (
  <ServicePlaceholder
    title='Google Cloud (GCP)'
    subtitle='Compute, IAM, Storage'
    description='We set up Google Cloud infrastructure with secure compute, IAM, and modern storage solutions.'
    points={[
      'Provisioning compute resources and storage',
      'IAM and access management',
      'Backup and performance monitoring',
    ]}
  />
);

export default GcpCloudSetup;

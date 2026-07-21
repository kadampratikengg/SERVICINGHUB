import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const AzureCloudSetup = () => (
  <ServicePlaceholder
    title='Azure Cloud Setup'
    subtitle='VM, Storage, AD'
    description='We configure Azure cloud infrastructure for performance, security, and integration with your applications.'
    points={[
      'Virtual machine provisioning and storage configuration',
      'Active Directory and identity setup',
      'Backup and disaster recovery planning',
    ]}
  />
);

export default AzureCloudSetup;

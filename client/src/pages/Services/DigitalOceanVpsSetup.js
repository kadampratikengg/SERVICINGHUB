import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const DigitalOceanVpsSetup = () => (
  <ServicePlaceholder
    title='DigitalOcean / VPS Setup'
    subtitle='Droplets, DNS, SSL'
    description='We build and secure VPS hosting environments with DigitalOcean droplets, DNS setup, and SSL certificates.'
    points={[
      'Droplet deployment and networking',
      'DNS and SSL integration',
      'Monitoring and backup setup',
    ]}
  />
);

export default DigitalOceanVpsSetup;

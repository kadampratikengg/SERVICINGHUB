import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const DnsDomainSetup = () => (
  <ServicePlaceholder
    title='DNS & Domain Setup'
    subtitle='Hosting + Domain linking'
    description='We connect your domain to hosting, configure DNS, and make sure your website resolves correctly.'
    points={[
      'Domain configuration and DNS mapping',
      'Hosting setup and SSL readiness',
      'Propagation tracking and issue resolution',
    ]}
  />
);

export default DnsDomainSetup;

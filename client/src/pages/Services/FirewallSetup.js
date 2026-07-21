import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const FirewallSetup = () => (
  <ServicePlaceholder
    title='Firewall Setup'
    subtitle='Server & network security'
    description='We configure firewall systems that protect your network and server infrastructure from unauthorized access.'
    points={[
      'Network firewall configuration and rule management',
      'Server access control and threat prevention',
      'Monitoring and alert setup for suspicious traffic',
    ]}
  />
);

export default FirewallSetup;

import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const CloudflareSetup = () => (
  <ServicePlaceholder
    title='Cloudflare Setup'
    subtitle='DNS, Proxy, Firewall'
    description='We configure Cloudflare to speed up and protect your website from malicious traffic and downtime.'
    points={[
      'DNS and proxy setup for secure web delivery',
      'Firewall and bot protection configurations',
      'Performance caching and SSL settings',
    ]}
  />
);

export default CloudflareSetup;

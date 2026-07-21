import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const SslCertificateSetup = () => (
  <ServicePlaceholder
    title='SSL Certificate Setup'
    subtitle='HTTPS secure site'
    description='We install and configure SSL certificates so your website is secure and trusted by visitors and browsers.'
    points={[
      'SSL certificate selection and installation',
      'HTTPS configuration for your web server',
      'Renewal and security checks',
    ]}
  />
);

export default SslCertificateSetup;

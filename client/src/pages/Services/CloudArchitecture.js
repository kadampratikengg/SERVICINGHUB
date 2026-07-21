import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const CloudArchitecture = () => (
  <ServicePlaceholder
    title='Cloud Architecture'
    subtitle='Design scalable infrastructure'
    description='We design cloud architecture that supports growth, security, and efficient operations across your digital services.'
    points={[
      'Resilient architecture for scale and availability',
      'Cost-optimized infrastructure design',
      'Security layering and compliance readiness',
    ]}
  />
);

export default CloudArchitecture;

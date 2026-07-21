import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const ElectricalWork = () => (
  <ServicePlaceholder
    title='Electrical Work'
    subtitle='Wiring & installation'
    description='We provide electrical wiring and installation services for safe, code-compliant power delivery.'
    points={[
      'Interior and exterior wiring installations',
      'Lighting and power outlet setup',
      'Safety checks and equipment installation',
    ]}
  />
);

export default ElectricalWork;

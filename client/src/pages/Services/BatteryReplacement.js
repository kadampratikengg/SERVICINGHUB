import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const BatteryReplacement = () => (
  <ServicePlaceholder
    title='Battery Replacement'
    subtitle='Inverter/UPS batteries'
    description='We replace and service backup batteries to ensure your power systems are ready when outages occur.'
    points={[
      'Battery capacity testing and replacement',
      'UPS and inverter compatibility checks',
      'Safe installation and disposal of old batteries',
    ]}
  />
);

export default BatteryReplacement;

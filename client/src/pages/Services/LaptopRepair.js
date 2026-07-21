import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const LaptopRepair = () => (
  <ServicePlaceholder
    title='Laptop Repair'
    subtitle='All brands supported'
    description='We repair laptops from all major brands, handling hardware faults and software issues with care.'
    points={[
      'Hardware repair and component replacement',
      'Operating system troubleshooting and recovery',
      'Cleaning and performance optimization',
    ]}
  />
);

export default LaptopRepair;

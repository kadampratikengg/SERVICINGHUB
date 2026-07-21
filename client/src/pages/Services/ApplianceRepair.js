import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const ApplianceRepair = () => (
  <ServicePlaceholder
    title='Appliance Repair'
    subtitle='AC, Fridge, Washing Machine'
    description='We repair and maintain household appliances with fast, reliable service so your home systems stay functional.'
    points={[
      'Air conditioner troubleshooting and repair',
      'Refrigerator maintenance and part replacement',
      'Washing machine service and diagnostics',
    ]}
  />
);

export default ApplianceRepair;

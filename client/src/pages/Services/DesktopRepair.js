import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const DesktopRepair = () => (
  <ServicePlaceholder
    title='Desktop Repair'
    subtitle='Hardware + software'
    description='We repair desktop computers with expert hardware and software troubleshooting so your systems run reliably.'
    points={[
      'Component diagnostics and replacement',
      'OS repair and software cleanup',
      'Performance tuning and maintenance',
    ]}
  />
);

export default DesktopRepair;

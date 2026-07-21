import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const BackupSolutions = () => (
  <ServicePlaceholder
    title='Backup Solutions'
    subtitle='Auto backup setup'
    description='We design backup workflows that keep your data protected across systems and restore paths.'
    points={[
      'Automated backup scheduling for critical assets',
      'Cloud and local storage configuration',
      'Restore testing and business continuity planning',
    ]}
  />
);

export default BackupSolutions;

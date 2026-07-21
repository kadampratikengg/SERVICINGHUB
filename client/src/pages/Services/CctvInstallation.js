import React from 'react';
import ServicePlaceholder from './ServicePlaceholder';

const CctvInstallation = () => (
  <ServicePlaceholder
    title='CCTV Installation'
    subtitle='Home / Office CCTV'
    description='We install CCTV systems that deliver clear video coverage and secure monitoring for homes and businesses.'
    points={[
      'Camera selection and placement planning',
      'Installation of wired and wireless CCTV systems',
      'Remote access and storage configuration',
    ]}
  />
);

export default CctvInstallation;

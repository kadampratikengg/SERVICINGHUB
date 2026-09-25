import React from 'react';

const WhatsAppButton = () => {
  const rawNumber = process.env.REACT_APP_WHATSAPP_NUMBER || '+919404360234';
  const whatsappUrl = `https://wa.me/${rawNumber.replace(/\s+/g, '')}`;

  return (
    <a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='whatsapp-float-btn'
      aria-label='Chat with us on WhatsApp'
    >
      <i className='bi bi-whatsapp'></i>
      <span className='whatsapp-tooltip'>Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

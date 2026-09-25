// client/src/utils/contactStore.js

const INITIAL_CONTACT = {
  address: process.env.REACT_APP_ADDRESS || 'Solapur, Maharashtra, India',
  phone: process.env.REACT_APP_PHONE_NUMBER || '+91 9404360234',
  whatsappNumber: process.env.REACT_APP_WHATSAPP_NUMBER || '9404360234',
  email: process.env.REACT_APP_EMAIL || 'info@itservicinghub.in',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.442817349141!2d75.9064!3d17.6599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da3907a9d701%3A0x6b6ffc3848b89e6!2sSolapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715187744298!5m2!1sen!2sin',
};

export const getContactDetails = () => {
  const saved = localStorage.getItem('admin_contact_details');
  if (saved) {
    try {
      return { ...INITIAL_CONTACT, ...JSON.parse(saved) };
    } catch (e) {
      return INITIAL_CONTACT;
    }
  }
  return INITIAL_CONTACT;
};

export const saveContactDetails = (details) => {
  const current = getContactDetails();
  const updated = { ...current, ...details };
  localStorage.setItem('admin_contact_details', JSON.stringify(updated));
  return updated;
};

export const resetContactDetails = () => {
  localStorage.removeItem('admin_contact_details');
  return INITIAL_CONTACT;
};

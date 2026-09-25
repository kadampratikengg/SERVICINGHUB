// client/src/utils/messageStore.js

const INITIAL_MESSAGES = [
  {
    id: 'msg_101',
    name: 'Rajesh Sharma',
    email: 'rajesh.sharma@fintech.in',
    phone: '+91 9823011223',
    subject: 'Cloud Infrastructure & AWS Migration Inquiry',
    message: 'Hello IT Servicing Hub team, we are looking to migrate our database servers to AWS Multi-AZ. Please contact us for project estimation and SLA contract details.',
    submittedAt: '2026-09-25 10:15 AM',
    status: 'Unread',
  },
  {
    id: 'msg_102',
    name: 'Ananya Patel',
    email: 'ananya@satviknutrition.com',
    phone: '+91 9987123456',
    subject: 'E-commerce Custom API Integration',
    message: 'We need custom payment gateway API and Shiprocket tracking integration for our e-commerce portal. Kindly share your availability for a technical call.',
    submittedAt: '2026-09-24 04:30 PM',
    status: 'Read',
  },
  {
    id: 'msg_103',
    name: 'Vikram Kulkarni',
    email: 'vikram.k@logistics.co.in',
    phone: '+91 9422056789',
    subject: 'Office CCTV & Hardware AMC Setup',
    message: 'We require 16 HD IP camera CCTV installation and office desktop annual maintenance contract (AMC) for our Satara regional office under K Electronics.',
    submittedAt: '2026-09-23 11:45 AM',
    status: 'Read',
  },
];

export const getMessages = () => {
  const saved = localStorage.getItem('admin_messages');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return INITIAL_MESSAGES;
    }
  }
  localStorage.setItem('admin_messages', JSON.stringify(INITIAL_MESSAGES));
  return INITIAL_MESSAGES;
};

export const saveMessage = (msgData) => {
  const messages = getMessages();
  const newMsg = {
    id: 'msg_' + Date.now(),
    name: msgData.name || 'Anonymous',
    email: msgData.email || '',
    phone: msgData.phone || '',
    subject: msgData.subject || 'Website Inquiry',
    message: msgData.message || '',
    submittedAt: new Date().toLocaleString(),
    status: 'Unread',
  };
  const updated = [newMsg, ...messages];
  localStorage.setItem('admin_messages', JSON.stringify(updated));
  return newMsg;
};

export const deleteMessage = (id) => {
  const messages = getMessages();
  const updated = messages.filter((m) => m.id !== id);
  localStorage.setItem('admin_messages', JSON.stringify(updated));
  return updated;
};

export const markMessageAsRead = (id) => {
  const messages = getMessages();
  const updated = messages.map((m) => (m.id === id ? { ...m, status: 'Read' } : m));
  localStorage.setItem('admin_messages', JSON.stringify(updated));
  return updated;
};

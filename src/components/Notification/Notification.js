import React from 'react';
import './ScrollingNotification.css';

const Notification = ({ message }) => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">{message}</div>
    </div>
  );
};

export default Notification;

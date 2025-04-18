// GlowButton.js
import React from 'react';
import styles from '../styles/GlowButton.module.css';

const GlowButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.glowButton}>
      {children}
    </button>
  );
};

export default GlowButton;

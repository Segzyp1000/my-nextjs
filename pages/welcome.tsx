import React from 'react';
import styles from './Welcome.module.css';

const WelcomePage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div>
      <p className={styles.welcomeText}>Welcome to Next.js with TypeScript!</p>
      <p className={styles.dateText}>Today's date: {currentDate}</p>
    </div>
  );
};

export default WelcomePage;

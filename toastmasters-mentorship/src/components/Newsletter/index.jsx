import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className={styles.newsletter}>
      <h3 className={styles.title}>Join The Speaking Spotlight!</h3>
      <p className={styles.description}>
        Subscribe to our Newsletter
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email*"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.button}>
          Subscribe →
        </button>
      </form>
    </div>
  );
};

export default Newsletter;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navLeft}>
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=center" 
          alt="Logo" 
          className={styles.logoImage}
        />
        <span>District 114</span>
      </div>
      
      <nav className={styles.nav}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#educational" className={styles.navLink}>Educational Program</a>
        <a href="#resources" className={styles.navLink}>Resource and Events</a>
        <a href="#mentorship" className={styles.navLink}>Digital Mentorship</a>
      </nav>
      
      <div className={styles.navButtons}>
        <Link to="/login">
          <button className={styles.loginButton}>Login</button>
        </Link>
        <Link to="/signup">
          <button className={styles.signupButton}>Sign Up</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

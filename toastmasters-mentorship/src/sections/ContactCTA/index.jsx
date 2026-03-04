import React from 'react';
import Container from '../../layouts/Container';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  return (
    <section className={styles.contactCTA} id="contact">
      <Container>
        <h2 className={styles.title}>Ready to Get Started?</h2>
        <p className={styles.description}>
          Have questions about our programs or want to learn more about District 114? 
          Our team is here to help you begin your journey to confident public speaking.
        </p>
        <button className={styles.button}>
          Contact Us Today
        </button>
      </Container>
    </section>
  );
};

export default ContactCTA;

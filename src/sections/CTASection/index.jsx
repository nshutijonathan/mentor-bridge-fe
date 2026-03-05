import React from 'react';
import Container from '../../layouts/Container';
import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <section className={styles.ctaSection} id="about">
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h3>Learn, Build, & Discover</h3>
            <h2 className={styles.title}>
              Ready to grow?
            </h2>
            <p className={styles.description}>
              Join District 114 mentors and mentees building better speakers
            </p>
            <div className={styles.buttons}>
              <button className={styles.primaryButton}>
                Find a mentor
              </button>
              <button className={styles.secondaryButton}>
                Become a mentor
              </button>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop&crop=center" 
              alt="Professional woman speaking" 
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;

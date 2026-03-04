import React from 'react';
import Container from '../../layouts/Container';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <Container>
        <div className={styles.grid}>
          <div>
            <h1 className={styles.title}>
              Find your mentor, grow as a learner
            </h1>
            
            <p className={styles.description}>
              Connect with experienced Toastmasters who understand your journey. 
              Build the skills and confidence you need to lead.
            </p>
            
            <div className={styles.buttons}>
              <button className={styles.primaryButton}>
                Explore
              </button>
              <button className={styles.secondaryButton}>
                Mentor
              </button>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1432821596592-e2d18b781c8f?w=600&h=400&fit=crop&crop=center" 
              alt="Public speaking" 
              className={styles.illustration}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

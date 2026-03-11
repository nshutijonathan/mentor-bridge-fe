import React from 'react';
import Container from '../../layouts/Container';
import styles from './Hero.module.css';
import publicSpeakingImage from '../../assets/public-speaking.svg';

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
              src={publicSpeakingImage}
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

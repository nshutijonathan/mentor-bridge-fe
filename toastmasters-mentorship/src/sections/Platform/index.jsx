import React from 'react';
import Container from '../../layouts/Container';
import styles from './Platform.module.css';

const Platform = () => {
  const features = [
    {
      title: "Connection",
      heading: "Direct mentor access",
      description: "Browse profiles and request the right mentor",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=180&fit=crop&crop=center",
      layout: "vertical"
    },
    {
      title: "Growth", 
      heading: "Real leadership development",
      description: "Guidance from those who have walked the path",
      image: "https://images.unsplash.com/photo-1515378791036-0648a814c96b?w=400&h=180&fit=crop&crop=center",
      layout: "vertical"
    },
    {
      title: "Convenience",
      heading: "Digital mentorship whenever you need it", 
      description: "No barriers to meaningful connection and learning",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=180&fit=crop&crop=center",
      layout: "horizontal"
    }
  ];

  return (
    <>
      <div className={styles.yellowDivider}></div>
      <section className={styles.platform} id="platform">
        <Container>
          <div className={styles.subtitle}>Platform</div>
          <h2 className={styles.title}>What makes us different</h2>
          <p className={styles.description}>
            Mentors and mentees matched by expertise and goals
          </p>
          
          <div className={styles.cards}>
            {features.map((feature, index) => (
              <div key={index} className={`${styles.card} ${feature.layout === 'horizontal' ? styles.cardHorizontal : styles.cardVertical}`}>
                {feature.layout === 'horizontal' ? (
                  <>
                    <div className={styles.cardImageContainer}>
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className={styles.cardImage}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTitle}>{feature.title}</div>
                      <h3 className={styles.cardHeading}>{feature.heading}</h3>
                      <p className={styles.cardDescription}>{feature.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardContent}>
                      <div className={styles.cardTitle}>{feature.title}</div>
                      <h3 className={styles.cardHeading}>{feature.heading}</h3>
                      <p className={styles.cardDescription}>{feature.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          
          <div className={styles.ctaSection}>
            <div className={styles.ctaText}>WHAT ARE YOU WAITING FOR?</div>
            <button className={styles.ctaButton}>
              Start Now
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Platform;

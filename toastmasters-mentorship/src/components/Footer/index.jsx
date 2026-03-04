import React from 'react';
import Container from '../../layouts/Container';
import styles from './Footer.module.css';

const Footer = () => {
  const recentPosts = [
    {
      title: "2026 District 114 Call For Nominations",
      link: "#"
    },
    {
      title: "The Power of Branding: How a Teardrop Banner Brought a Toastmaster from London to Our Club",
      link: "#"
    },
    {
      title: "Dinh Oundo achieves Distinguished Toastmaster (DTM): A Symbol of Excellence and Service",
      link: "#"
    },
    {
      title: "Division C Toastmasters Open House! – You're Invited",
      link: "#"
    }
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.newsletterSection}>
          <h3 className={styles.newsletterTitle}>Join The Speaking Spotlight!</h3>
          <p className={styles.newsletterDescription}>
            Subscribe to our Newsletter
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email*"
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe →
            </button>
          </form>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.section}>
            <h4>Recent Posts</h4>
            <ul className={styles.posts}>
              {recentPosts.map((post, index) => (
                <li key={index} className={styles.post}>
                  <a href={post.link} className={styles.postTitle}>
                    {'>'} {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <img 
                src="https://i.imgur.com/2s46z0u.png" 
                alt="District 114 Logo" 
                className={styles.logoImage}
              />
            </div>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                f
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                ▶
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>
          
        </div>
        
        <div className={styles.copyright}>
          2026 - District 114 - All Rights Reserved
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

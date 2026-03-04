import React from 'react';
import Container from '../../layouts/Container';
import styles from './FAQ.module.css';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I find a mentor?",
      answer: "Browse our mentor profiles to see their expertise, experience level, and availability. When you find someone whose background matches your goals, send them a mentorship request. They'll review your profile and accept or decline based on their capacity."
    },
    {
      question: "What if I want to mentor?",
      answer: "Apply to become a mentor through our application process. You'll create a profile highlighting your expertise areas, experience level, and availability. Mentees will then be able to request mentorship from you based on what you offer."
    },
    {
      question: "Is there a cost involved?",
      answer: "This platform is provided as a service to District 114 members. Check with your club or district leadership for any membership requirements or fees related to Toastmasters participation."
    },
    {
      question: "How often do mentors and mentees meet?",
      answer: "That's between you and your mentor. Some meet weekly, others monthly. The platform lets mentors set their availability, and you can discuss what works best for both of you once matched."
    },
    {
      question: "Can I change mentors if needed?",
      answer: "Yes. If the match isn't working, you can end the mentorship and request a different mentor. We want you paired with someone who genuinely helps you grow."
    },
    {
      question: "What topics can mentors help with?",
      answer: "Mentors list their expertise areas when they join. Common areas include public speaking, leadership development, speech writing, and overcoming presentation anxiety. You can filter by these areas when searching."
    }
  ];

  return (
    <section className={styles.faq} id="faq">
      <Container>
        <h2 className={styles.title}>FAQ</h2>
        <p className={styles.subtitle}>Common questions about mentorship and getting started</p>
        <div className={styles.grid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>Still have questions?</h3>
          <p className={styles.ctaSubtext}>Reach out to us directly for more information</p>
          <button className={styles.ctaButton}>Contact</button>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;

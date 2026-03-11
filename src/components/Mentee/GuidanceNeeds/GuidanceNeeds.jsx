import styles from "./GuidanceNeeds.module.css";
import { BsPencil } from "react-icons/bs";

export default function GuidanceNeeds({
  interests = [],
  guidanceNeeds = [],
  onEdit,
}) {
  return (
    <section className={`${styles.contentCard} ${styles.interestsCard}`}>
      <div className={styles.cardHeader}>
        <h2>Areas of Interest &amp; Guidance Needs</h2>

        <button className={styles.editButton} type="button" onClick={onEdit}>
          <BsPencil />
          <span>Edit</span>
        </button>
      </div>

      {/* AREAS OF INTEREST */}
      <span className={`${styles.eyebrow} ${styles.interestsEyebrow}`}>
        AREAS OF INTEREST
      </span>

      <div className={styles.tagList}>
        {interests.length > 0 ? (
          interests.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))
        ) : (
          <span className={styles.emptyText}>No interests added yet.</span>
        )}
      </div>

      {/* GUIDANCE NEEDS */}

      <span className={`${styles.eyebrow} ${styles.guidanceEyebrow}`}>
        AREAS NEEDING GUIDANCE
      </span>

      <div className={styles.needsGrid}>
        {guidanceNeeds.length > 0 ? (
          guidanceNeeds.map((item) => (
            <article key={item.id} className={styles.needCard}>
              <span
                className={`${styles.needPriority} ${styles[item.priority.toLowerCase()]}`}
              >
                {item.priority}
              </span>

              <span className={styles.needLabel}>{item.title}</span>

              <p>{item.detail}</p>
            </article>
          ))
        ) : (
          <span className={styles.emptyText}>No guidance needs specified.</span>
        )}
      </div>
    </section>
  );
}
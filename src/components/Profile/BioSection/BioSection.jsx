import { useState } from "react";
import styles from "./BioSection.module.css";
import { BsPencil } from "react-icons/bs";

const PencilIcon = BsPencil;

function BioSection({ bio = [], onEdit }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`${styles.contentCard} ${styles.menteeBioCard}`}>
      <div className={styles.cardHeader}>
        <h2>Bio & Expertise</h2>

        <button
          className={styles.inlineEditButton}
          type="button"
          onClick={onEdit}
        >
          <PencilIcon />
          <span>Edit</span>
        </button>
      </div>

      <div
        className={`${styles.copyBlock} ${!expanded ? styles.collapsed : ""}`}
      >
        <span className={styles.eyebrow}>ABOUT ME</span>

        {bio.length > 0 ? (
          bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        ) : (
          <p>No bio information added yet.</p>
        )}
      </div>

      {/* Expand / Collapse */}

      {bio.length > 0 && (
        <button
          className={styles.expandButton}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
}

export default BioSection;

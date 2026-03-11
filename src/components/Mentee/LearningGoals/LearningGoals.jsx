import styles from "./LearningGoals.module.css";
import { BsPencil } from "react-icons/bs";

export default function LearningGoalsCard({
  location,
  timezone,
  experienceLevel,
  goals = [],
  onEdit,
}) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className={`${styles.contentCard} ${styles.learningCard}`}>
      <div className={styles.cardHeader}>
        <h2>Learning Goals &amp; Experience</h2>

        <button className={styles.editButton} type="button" onClick={onEdit}>
          <BsPencil />
          <span>Edit</span>
        </button>
      </div>

      {/* Metadata */}
      <div className={styles.learningMetaGrid}>
        <div className={styles.learningMetaItem}>
          <span className={styles.eyebrow}>LOCATION</span>
          <p>{location || "Not specified"}</p>
        </div>

        <div className={styles.learningMetaItem}>
          <span className={styles.eyebrow}>TIME ZONE</span>
          <p>{timezone || "Not specified"}</p>
        </div>

        <div className={styles.learningMetaItem}>
          <span className={styles.eyebrow}>EXPERIENCE LEVEL</span>
          <p>{experienceLevel || "Not specified"}</p>
        </div>
      </div>

      {/* Learning Goals */}
      <span className={`${styles.eyebrow} ${styles.learningEyebrow}`}>
        CURRENT LEARNING GOALS
      </span>

      <div className={styles.goalStack}>
        {goals.length === 0 && (
          <span className={styles.emptyState}>
            No learning goals added yet.
          </span>
        )}

        {goals.map((goal) => (
          <article key={goal.id} className={styles.goalCard}>
            <div className={styles.goalHeader}>
              <div>
                <h3>{goal.title}</h3>
                <p>{goal.detail}</p>
              </div>

              {goal.deadline && (
                <span className={styles.goalDeadline}>
                  Deadline: {formatDate(goal.deadline)}
                </span>
              )}
            </div>

            <div className={styles.goalProgressLabelRow}>
              <span>Progress</span>
              <span>{goal.progress}%</span>
            </div>

            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${goal.progress}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

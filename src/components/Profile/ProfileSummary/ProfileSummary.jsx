import styles from "./ProfileSummary.module.css";
import { BsPencil } from "react-icons/bs";
import { userMock } from "../../../mocks/userMock";

const PencilIcon = BsPencil;

function ProfileSummary({ user, stats, onEdit = () => {} }) {

  const profileUser = user || userMock.user;
  const profileStats = stats || userMock.stats;

  const fullName =
    profileUser.name ||
    `${profileUser.first_name ?? ""} ${profileUser.last_name ?? ""}`;

  const avatar =
    profileUser.avatar || profileUser.profile_image || "/default-avatar.png";

  const completed =
    profileStats.completed ??
    profileStats.completedMentorships ??
    0;

  return (
    <section className={`${styles.summaryCard} ${styles.menteeSummaryCard}`}>
      
      <div className={styles.menteeSummaryHeader}>
        <button
          className={styles.editProfileButton}
          type="button"
          onClick={onEdit}
          aria-label="Edit profile"
        >
          <PencilIcon />
          <span>Edit Profile</span>
        </button>
      </div>

      <div className={styles.menteeSummaryBody}>

        <div className={styles.identityBlock}>
          <div className={`${styles.avatar} ${styles.menteeAvatar}`}>
            <img
              src={avatar}
              alt={fullName}
              className={styles.avatarImg}
            />
          </div>

          <div>
            <h1 className={styles.profileName}>{fullName}</h1>
            <p className={styles.profileMeta}>{profileUser.role}</p>
          </div>
        </div>

        <div className={`${styles.statsRow} ${styles.menteeStatsRow}`}>

          <div className={styles.statItem}>
            <strong className={styles.currentMentorsValue}>
              {profileStats.currentMentors}
            </strong>
            <span>Current Mentors</span>
          </div>

          <div className={styles.statItem}>
            <strong className={styles.yearsExperienceValue}>
              {profileStats.yearsExperience}
            </strong>
            <span>Years Experience</span>
          </div>

          <div className={styles.statItem}>
            <strong className={styles.completedValue}>
              {completed}
            </strong>
            <span>Completed</span>
          </div>

        </div>
      </div>

    </section>
  );
}

export default ProfileSummary;
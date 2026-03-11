import { MdOutlineCheckCircle } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./Requests.module.css";
const CheckCircleIcon = MdOutlineCheckCircle;
const ClockIcon = FaRegClock;
const CloseIcon = IoCloseSharp;

 const mockRequests = [
  {
    id: 1,
    mentor: "Seble Tilahun",
    club: "Jupiter Toastmasters Club",
    location: "Addis Ababa, Ethiopia",
    district: "District 114",
    requestedOn: "Tue, February 15, 2026",
    status: "Pending",
    action: "Cancel",
    tone: "pending",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },

  {
    id: 2,
    mentor: "Rahel Gebra",
    club: "Jupiter Toastmasters Club",
    location: "Addis Ababa, Ethiopia",
    district: "District 114",
    requestedOn: "Tue, February 15, 2026",
    status: "Pending",
    action: "Cancel",
    tone: "pending",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },

  {
    id: 3,
    mentor: "Christian Jonny",
    club: "Jupiter Toastmasters Club",
    location: "Addis Ababa, Ethiopia",
    district: "District 114",
    requestedOn: "Tue, February 15, 2026",
    status: "Accepted",
    action: "Message",
    tone: "active",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 4,
    mentor: "Robert Irigena",
    club: "Jupiter Toastmasters Club",
    location: "Addis Ababa, Ethiopia",
    district: "District 114",
    requestedOn: "Tue, February 15, 2026",
    status: "Accepted",
    action: "Message",
    tone: "active",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },

  {
    id: 5,
    mentor: "Michael Degu",
    club: "Jupiter Toastmasters Club",
    location: "Addis Ababa, Ethiopia",
    district: "District 114",
    requestedOn: "Tue, February 15, 2026",
    status: "Accepted",
    action: "Message",
    tone: "active",
    photo: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

function RequestsList({ requests = mockRequests }) {
  const pendingRequests = requests.filter((request) => request.tone === "pending");
  const activeRequests = requests.filter((request) => request.tone === "active");

  return (
    <section className={`${styles.contentCard} ${styles.requestHistoryCard}`}>
      <div className={styles.cardHeader}>
        <h2>Mentor Request History</h2>
      </div>

      <p className={styles.requestHistoryIntro}>
        Track your mentor requests and manage your mentorship connections
      </p>

      <div className={styles.requestGroup}>
        <h3 className={styles.requestGroupTitle}>
          Pending Request ({pendingRequests.length})
        </h3>
        <div className={styles.pendingRequestGrid}>
          {pendingRequests.length === 0 ? (
            <p className={styles.requestMeta}>No pending requests.</p>
          ) : (
            pendingRequests.map((request) => (
              <article
                key={`${request.id}-pending`}
                className={styles.requestCard}
              >
                <div className={styles.requestHeader}>
                  <div className={styles.requestIdentity}>
                    <div className={styles.requestAvatar}>
                      <img
                        src={request.photo}
                        alt={request.mentor}
                        className={styles.avatarImg}
                      />
                    </div>
                    <div className={styles.requestIdentityCopy}>
                      <h3>{request.mentor}</h3>
                      <p>{request.club}</p>
                      <p>{request.location}</p>
                      <p>{request.district}</p>
                    </div>
                  </div>
                  <span
                    className={`${styles.statusBadge} ${styles[request.tone]}`}
                  >
                    {request.tone === "pending" && <ClockIcon />}
                    {request.tone === "active" && <CheckCircleIcon />}
                    {request.status}
                  </span>
                </div>

                <div className={styles.requestFooter}>
                  <p className={styles.requestMeta}>
                    Requested on {request.requestedOn}
                  </p>
                  <button
                    className={`${styles.requestLinkButton} ${styles.cancelAction}`}
                    type="button"
                  >
                    {request.action === "Cancel" ? <CloseIcon /> : null}
                    {request.action}
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      <div className={styles.requestGroup}>
        <h3 className={styles.requestGroupTitle}>
          Accepted ({activeRequests.length})
        </h3>
        <div className={styles.requestGrid}>
          {activeRequests.length === 0 ? (
            <p className={styles.requestMeta}>No accepted requests yet.</p>
          ) : (
            activeRequests.map((request) => (
              <article
                key={`${request.id}-active`}
                className={styles.requestCard}
              >
                <div className={styles.requestHeader}>
                  <div className={styles.requestIdentity}>
                    <div className={styles.requestAvatar}>
                      <img
                        src={request.photo}
                        alt={request.mentor}
                        className={styles.avatarImg}
                      />
                    </div>
                    <div className={styles.requestIdentityCopy}>
                      <h3>{request.mentor}</h3>
                      <p>{request.club}</p>
                      <p>{request.location}</p>
                      <p>{request.district}</p>
                    </div>
                  </div>
                  <span
                    className={`${styles.statusBadge} ${styles[request.tone]}`}
                  >
                    {request.tone === "pending" ? (
                      <ClockIcon />
                    ) : (
                      <CheckCircleIcon />
                    )}
                    {request.status}
                  </span>
                </div>

                <div className={styles.requestFooter}>
                  <p className={styles.requestMeta}>
                    Requested on {request.requestedOn}
                  </p>
                  <button
                    className={`${styles.requestLinkButton} ${
                      request.action === "Cancel"
                        ? styles.cancelAction
                        : styles.messageAction
                    }`}
                    type="button"
                  >
                    {request.action === "Cancel" ? <CloseIcon /> : null}
                    {request.action}
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default RequestsList;

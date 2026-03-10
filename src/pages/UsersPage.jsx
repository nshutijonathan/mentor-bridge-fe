import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import styles from './UsersPage.module.css';

function getUserId(user) {
  return user?.id || user?.uuid || user?._id || '';
}

function getUserLabel(user) {
  const firstName = user?.first_name || '';
  const lastName = user?.last_name || '';
  const fullName = `${firstName} ${lastName}`.trim();

  return (
    fullName ||
    user?.name ||
    user?.fullName ||
    user?.username ||
    user?.email ||
    'Unnamed user'
  );
}

export default function UsersPage() {
  const [scope, setScope] = useState('all');
  const [status, setStatus] = useState('');
  const [clubName, setClubName] = useState('');
  const [isMentorshipEnrolled, setIsMentorshipEnrolled] = useState('');

  const sourceLabel = useMemo(() => {
    if (scope === 'mentors') {
      return '/api/v1/users/mentors';
    }

    if (scope === 'mentees') {
      return '/api/v1/users/mentees';
    }

    return '/api/v1/users/';
  }, [scope]);

  const { users, isLoading, error } = useUsers({
    scope,
    status,
    clubName,
    isMentorshipEnrolled,
  });

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>Users</h1>
      <p className={styles.subtitle}>Data source: {sourceLabel}</p>

      <div className={styles.filters}>
        <div className={styles.scopeButtons}>
          <button
            type="button"
            className={scope === 'all' ? styles.scopeButtonActive : styles.scopeButton}
            onClick={() => setScope('all')}
          >
            All users
          </button>
          <button
            type="button"
            className={
              scope === 'mentors' ? styles.scopeButtonActive : styles.scopeButton
            }
            onClick={() => setScope('mentors')}
          >
            Mentors
          </button>
          <button
            type="button"
            className={
              scope === 'mentees' ? styles.scopeButtonActive : styles.scopeButton
            }
            onClick={() => setScope('mentees')}
          >
            Mentees
          </button>
        </div>

        <div className={styles.selects}>
          <label className={styles.filterField}>
            <span>Status</span>
            <select value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="">All</option>
              <option value="active">active</option>
              <option value="pending">pending</option>
              <option value="inactive">inactive</option>
            </select>
          </label>

          <label className={styles.filterField}>
            <span>Club name</span>
            <input
              type="text"
              value={clubName}
              onChange={(event) => setClubName(event.target.value)}
              placeholder="e.g. Toastmasters Club 1"
            />
          </label>

          <label className={styles.filterField}>
            <span>Mentorship enrolled</span>
            <select
              value={isMentorshipEnrolled}
              onChange={(event) => setIsMentorshipEnrolled(event.target.value)}
            >
              <option value="">All</option>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </label>
        </div>
      </div>

      {isLoading && <p>Loading users...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!isLoading && !error && users.length === 0 && (
        <p>No users were returned by the API.</p>
      )}

      {!isLoading && !error && users.length > 0 && (
        <ul className={styles.list}>
          {users.map((user) => {
            const userId = getUserId(user);

            return (
              <li key={userId || JSON.stringify(user)} className={styles.card}>
                <p className={styles.name}>{getUserLabel(user)}</p>
                <p className={styles.meta}>ID: {userId || 'N/A'}</p>
                <p className={styles.meta}>Email: {user?.email || 'N/A'}</p>
                <p className={styles.meta}>Role: {user?.role || 'N/A'}</p>

                {userId ? (
                  <Link to={`/users/${userId}`} className={styles.link}>
                    View details
                  </Link>
                ) : (
                  <span className={styles.disabled}>No id found</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

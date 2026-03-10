import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import useUserProfile from '../hooks/useUserProfile';
import { deleteUserById } from '../api/userApi';
import styles from './UserProfilePage.module.css';

function getEntries(user) {
  if (!user || typeof user !== 'object') {
    return [];
  }

  return Object.entries(user).filter(([key]) => key !== 'password_hash');
}

export default function UserProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isLoading, error } = useUserProfile(id);
  const [actionError, setActionError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const fullName = `${user?.first_name || ''} ${user?.last_name || ''}`.trim();
  const title = fullName || user?.email || 'User';

  async function handleDelete() {
    const shouldDelete = globalThis.confirm(
      'Are you sure you want to delete this user? This cannot be undone.',
    );

    if (!shouldDelete) {
      return;
    }

    setActionError('');
    setIsDeleting(true);

    try {
      await deleteUserById(id);
      navigate('/users');
    } catch (err) {
      setActionError(err.message || 'Failed to delete user');
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <section className={styles.page}>
      <Link to="/users" className={styles.backLink}>
        Back to users
      </Link>

      <h1 className={styles.title}>User Profile</h1>
      <p className={styles.subtitle}>Data source: /api/v1/users/{id}</p>

      {isLoading && <p>Loading user profile...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {actionError && <p className={styles.error}>{actionError}</p>}

      {!isLoading && !error && !user && <p>No user found.</p>}

      {!isLoading && !error && user && (
        <article className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <h2 className={styles.name}>{title}</h2>
              <p className={styles.email}>{user?.email || 'No email available'}</p>
            </div>

            <div className={styles.badges}>
              <span className={styles.badge}>{user?.role || 'unknown role'}</span>
              <span className={styles.badge}>{user?.status || 'unknown status'}</span>
            </div>
          </header>

          <dl className={styles.grid}>
            {getEntries(user).map(([key, value]) => (
              <div key={key} className={styles.item}>
                <dt className={styles.key}>{key}</dt>
                <dd className={styles.value}>
                  {typeof value === 'object'
                    ? JSON.stringify(value, null, 2)
                    : String(value)}
                </dd>
              </div>
            ))}
          </dl>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => navigate(`/users/${id}/edit`)}
            >
              Edit user
            </button>

            <button
              type="button"
              className={styles.deleteButton}
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete user'}
            </button>
          </div>
        </article>
      )}
    </section>
  );
}

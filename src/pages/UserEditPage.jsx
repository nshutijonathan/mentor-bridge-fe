import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateUserById } from '../api/userApi';
import useUserProfile from '../hooks/useUserProfile';
import styles from './UserEditPage.module.css';

function mapUserToForm(user) {
  return {
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    email: user?.email || '',
    role: user?.role || '',
    status: user?.status || '',
    club_name: user?.club_name || '',
    is_mentorship_enrolled: Boolean(user?.is_mentorship_enrolled),
  };
}

export default function UserEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isLoading, error } = useUserProfile(id);
  const [form, setForm] = useState(mapUserToForm(null));
  const [saveError, setSaveError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setForm(mapUserToForm(user));
    }
  }, [user]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSaveError('');
    setIsSaving(true);

    try {
      await updateUserById(id, form);
      navigate(`/users/${id}`);
    } catch (err) {
      setSaveError(err.message || 'Failed to update user');
    } finally {
      setIsSaving(false);
    }
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  return (
    <section className={styles.page}>
      <Link to={`/users/${id}`} className={styles.backLink}>
        Back to profile
      </Link>

      <h1 className={styles.title}>Edit User</h1>

      {isLoading && <p>Loading user...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {saveError && <p className={styles.error}>{saveError}</p>}

      {!isLoading && !error && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>First name</span>
            <input
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.field}>
            <span>Last name</span>
            <input
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className={styles.field}>
            <span>Role</span>
            <input name="role" value={form.role} onChange={handleChange} />
          </label>

          <label className={styles.field}>
            <span>Status</span>
            <input name="status" value={form.status} onChange={handleChange} />
          </label>

          <label className={styles.field}>
            <span>Club name</span>
            <input name="club_name" value={form.club_name} onChange={handleChange} />
          </label>

          <label className={styles.checkboxField}>
            <input
              name="is_mentorship_enrolled"
              type="checkbox"
              checked={form.is_mentorship_enrolled}
              onChange={handleChange}
            />
            <span>Mentorship enrolled</span>
          </label>

          <button type="submit" className={styles.saveButton} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save changes'}
          </button>
        </form>
      )}
    </section>
  );
}

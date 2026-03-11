import { useEffect, useState } from 'react';
import { getUsers } from '../api/userApi';

export default function useUsers(filters = {}) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const {
    scope = 'all',
    status = '',
    clubName = '',
    isMentorshipEnrolled = '',
  } = filters;

  useEffect(() => {
    let isMounted = true;

    async function loadUsers() {
      setIsLoading(true);
      setError('');

      try {
        const data = await getUsers({
          scope,
          status,
          club_name: clubName,
          is_mentorship_enrolled: isMentorshipEnrolled,
        });
        let resolvedUsers = [];

        if (Array.isArray(data)) {
          resolvedUsers = data;
        } else if (Array.isArray(data?.data)) {
          resolvedUsers = data.data;
        }

        if (isMounted) {
          setUsers(resolvedUsers);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch users');
          setUsers([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      isMounted = false;
    };
  }, [clubName, isMentorshipEnrolled, scope, status]);

  return { users, isLoading, error };
}

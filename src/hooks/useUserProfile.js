
import { useEffect, useState } from "react";
import { getUserProfile } from "../api/userApi";

export const useUserProfile = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserProfile(userId);
        setUser(data.data);
      } catch (error) {
        console.error("Failed to fetch user profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading };
};
=======
import { useEffect, useState } from 'react';
import { getUserById } from '../api/userApi';

export default function useUserProfile(id) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      if (!id) {
        setError('Missing user id');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError('');

      try {
        const data = await getUserById(id);

        if (isMounted) {
          setUser(data?.data ?? data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch user');
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadUser();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { user, isLoading, error };
}

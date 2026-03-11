
import { useEffect, useState } from "react";
import { getUserById } from "../api/userApi";

export default function useUserProfile(id) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      if (!id) {
        setError("Missing user id");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError("");

      try {
        const data = await getUserById(id);

        if (isMounted) {
          setUser(data?.data ?? data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to fetch user");
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

<<<<<<< HEAD
=======
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

>>>>>>> e95d5b4132e957abfb785cb32938798b7b7ea353
  return { user, isLoading, error };
}

import { useEffect, useState } from 'react';
import getUserById from "@/components/constants/request/getUserById";
import { UserDataInterface } from '@/components/constants/interfaces';

const useFetchUser = (id: string | undefined) => {
  const [user, setUser] = useState<UserDataInterface | undefined | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setLoading(false);
      } else {
        try {
          const data = await getUserById(id);
          setUser(data.user);
        } catch (error) {
          console.error(error);
          setUser(null);
        } finally {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      }
    };

    fetchData();
  }, [id]);

  return { user, loading };
};

export default useFetchUser;
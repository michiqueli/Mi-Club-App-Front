import { UserFullData } from "@/components/constants/interfaces";
import getUserById from "@/components/constants/request/getUserById";
import { useEffect, useState } from "react";

const useUserById = (id: string | undefined) => {
  const [user, setUser] = useState<UserFullData | undefined | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setLoading(false);
      } else {
        try {
          const data = await getUserById(id);
          setUser(data.user);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } catch (error) {
          console.error(error);
          setUser(null);
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
export default useUserById;

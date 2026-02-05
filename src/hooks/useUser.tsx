import { getUsers } from "@/api/user.api";
import type { User } from "@/types/User";
import { useEffect, useState } from "react";

function useUser() {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setUser(data);
    } catch (err) {
      setError("Failed to fetch users: " + (err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { user, loading, error };
}
export default useUser;

import { useState, useEffect } from "react";

const useFetchRandomUser = (page: number) => {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://randomuser.me/api/?page=${page}&results=10`
        );
        const data = await response.json();
        setUsers((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  return { users, isLoading };
};

export default useFetchRandomUser;

import { useState, useEffect } from "react";

const useFetchRandomUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchCatEndpoint = async () => {
      const response = await fetch("https://randomuser.me/api?results=10");
      const dataUser = await response.json();
      setUsers(dataUser.results);
    };

    fetchCatEndpoint();
  }, []);

  return users;
};

export default useFetchRandomUser;
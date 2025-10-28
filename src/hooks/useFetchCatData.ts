import { useState, useEffect } from "react";

const useFetchCatData = (page: number) => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatEndpoint = async () => {
      const response = await fetch(`https://catfact.ninja/facts?page=${page}`);
      const dataCat = await response.json();
      setCats(dataCat.data);
    };

    fetchCatEndpoint();
  }, [page]);

  return cats;
};

export default useFetchCatData;
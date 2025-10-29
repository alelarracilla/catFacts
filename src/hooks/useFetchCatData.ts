import { useState, useEffect } from "react";

const useFetchCatData = (page: number) => {
  const [cats, setCats] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCatFacts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://catfact.ninja/facts?page=${page}`
        );
        const data = await response.json();
        setCats((prev) => [...prev, ...data.data]);
      } catch (error) {
        console.error("Error fetching cat facts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCatFacts();
  }, [page]);

  return { cats, isLoading };
};

export default useFetchCatData;

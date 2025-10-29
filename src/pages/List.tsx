import { useEffect, useState } from "react";
import useFetchCatData from "../hooks/useFetchCatData";
import useFetchRandomUser from "../hooks/useFetchRandomUser";
import { CardType } from "../types/CardType";
import Card from "../components/Card/Card";

const List = () => {
  const [page, setPage] = useState<number>(1);
  const [dataCards, setDataCards] = useState<CardType[]>([]);
  const { cats: catFacts } = useFetchCatData(page);
  const { users: randomUsers } = useFetchRandomUser(page);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 150;

    if (nearBottom && !isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  useEffect(() => {
    if (catFacts.length === 0 || randomUsers.length === 0) return;

    setIsLoading(true);

    const limit = Math.min(catFacts.length, randomUsers.length);
    const newCards = catFacts.slice(0, limit).map((cat, i) => ({
      fact: cat.fact,
      name: `${randomUsers[i].name.first} ${randomUsers[i].name.last}`,
      imageURL: randomUsers[i].picture.thumbnail,
    }));

    setDataCards((prev) => [...prev, ...newCards]);
    setIsLoading(false);
  }, [catFacts, randomUsers]);

  return (
    <div className="flex flex-col justify-center items-center">
      {dataCards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          fact={card.fact}
          imageURL={card.imageURL}
        />
      ))}

      {isLoading && <p className="text-gray-500">Cargando más...</p>}
    </div>
  );
};

export default List;

import { useEffect, useState } from "react";
import useFetchCatData from "../hooks/useFetchCatData";
import useFetchRandomUser from "../hooks/useFetchRandomUser";
import { RandomUserType } from "../types/RandomUserType";
import { CatType } from "../types/CatType";
import { CardType } from "../types/CardType";
import Card from "../components/Card/Card";

const List = () => {
  const [page, setPage] = useState<number>(1);
  const [dataCards, setDataCards] = useState<Array<CardType>>([]);
  const catFacts: Array<CatType> = useFetchCatData(page);
  const randomUsers: Array<RandomUserType> = useFetchRandomUser();

  const handleScroll = () => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight;
    if (scrolledToBottom) {
      setPage((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (catFacts.length > 0 && randomUsers.length > 0) {
      const formattedData = catFacts.map((cat, index) => ({
        fact: cat.fact,
        name: `${randomUsers[index].name.first} ${randomUsers[index].name.last}`,
        imageURL: randomUsers[index].picture.thumbnail,
      }));

      setDataCards((prevState) => [...prevState, ...formattedData]);
    }
  }, [catFacts, randomUsers]);

  return (
    <div>
      {dataCards.length > 0 &&
        dataCards.map((cardData) => (
          <Card
            name={cardData.name}
            fact={cardData.fact}
            imageURL={cardData.imageURL}
          />
        ))}
    </div>
  );
};

export default List;

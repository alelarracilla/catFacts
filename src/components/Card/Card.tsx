import Avatar from "../Avatar/Avatar";
interface CardPropTypes {
  name: string;
  imageURL: string;
  fact: string;
}

const Card: React.FC<CardPropTypes> = ({ name, imageURL, fact }) => {
  return (
    <div>
      <Avatar imageURL={imageURL} name={name} />
      <p>{fact}</p>
    </div>
  );
};

export default Card;

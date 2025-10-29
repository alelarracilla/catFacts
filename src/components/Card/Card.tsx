import Avatar from "../Avatar/Avatar";
interface CardPropTypes {
  name: string;
  imageURL: string;
  fact: string;
}

const Card: React.FC<CardPropTypes> = ({ name, imageURL, fact }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-full max-w-sm border border-transparent hover:border-gray-200 cursor-pointer mb-2">
      <Avatar imageURL={imageURL} name={name} />
      <p>{fact}</p>
    </div>
  );
};

export default Card;

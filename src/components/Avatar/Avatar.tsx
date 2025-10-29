interface AvatarPropTypes {
  imageURL: string;
  name: string;
}

const Avatar: React.FC<AvatarPropTypes> = ({ imageURL, name }) => {
  return (
    <div className="flex flex-row items">
      <img src={imageURL} alt={name} />
      <p className="ml-2">{name}</p>
    </div>
  );
};

export default Avatar;

interface AvatarPropTypes {
  imageURL: string;
  name: string;
}

const Avatar: React.FC<AvatarPropTypes> = ({ imageURL, name }) => {
  return (
    <div>
      <img src={imageURL} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Avatar;

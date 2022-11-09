import imageNotFound from 'images/image-not-found.png';
import { Card, Description, Profile, Title } from './CastItem.styled';

const MovieItem = ({ profilePath, name, character }) => {
  const profile = profilePath
    ? `https://image.tmdb.org/t/p/w500${profilePath}`
    : imageNotFound;

  return (
    <Card>
      <Profile src={profile} alt={name} />
      <Description>
        <Title>{name}</Title>
        <p>Character: {character}</p>
      </Description>
    </Card>
  );
};

export default MovieItem;

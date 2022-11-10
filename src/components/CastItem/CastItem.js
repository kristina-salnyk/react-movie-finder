import imageNotFound from 'images/image-not-found.png';
import { Item, Description, Profile, Title } from './CastItem.styled';
import { IMAGE_URL } from '../../constants';
import PropTypes from 'prop-types';

const CastItem = ({ profilePath, name, character }) => {
  const profile = profilePath ? `${IMAGE_URL}${profilePath}` : imageNotFound;

  return (
    <Item>
      <Profile src={profile} alt={name} />
      <Description>
        <Title>{name}</Title>
        <p>Character: {character}</p>
      </Description>
    </Item>
  );
};

export default CastItem;

CastItem.propTypes = {
  character: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profilePath: PropTypes.string,
};

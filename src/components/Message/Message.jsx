import { Container, Text, Image } from './Message.styled';
import PropTypes from 'prop-types';
import emptyQuery from 'images/empty-query.png';
import error from 'images/error.png';
import noResults from 'images/no-results.png';

const messageDescription = {
  emptyQuery: {
    text: 'Type to search something',
    image: emptyQuery,
  },
  error: {
    text: 'Something went wrong. Try again later',
    image: error,
  },
  noResults: {
    text: 'Nothing to see here',
    image: noResults,
  },
};

const Message = ({ type }) => {
  const message = messageDescription[type];

  return (
    <Container>
      <Text>{message.text}</Text>
      <Image src={message.image} alt={message.text} />
    </Container>
  );
};

export default Message;

Message.propTypes = {
  type: PropTypes.string.isRequired,
};

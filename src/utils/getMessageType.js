import { MESSAGE_TYPES } from '../constants';

const getMessageType = ({ hasError, hasResults, hasSearchQuery = true }) => {
  if (hasError) {
    return MESSAGE_TYPES.ERROR;
  }
  if (!hasResults && !hasSearchQuery) {
    return MESSAGE_TYPES.EMPTY_QUERY;
  }
  if (!hasResults && hasSearchQuery) {
    return MESSAGE_TYPES.NO_RESULTS;
  }
  return null;
};

export default getMessageType;

import { Form, Button, ButtonLabel, Input } from './SearchForm.styled';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchForm = ({ searchQuery, onSubmit }) => {
  const handleFormSubmit = event => {
    event.preventDefault();

    const searchQuery = event.target.elements.searchQuery.value;
    onSubmit(searchQuery);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Button type="submit">
        <BiSearchAlt2 size="20" />
        <ButtonLabel>Search</ButtonLabel>
      </Button>
      <Input
        type="text"
        name="searchQuery"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        defaultValue={searchQuery}
      />
    </Form>
  );
};

export default SearchForm;

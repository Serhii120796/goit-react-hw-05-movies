import { Form, Input } from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target.elements.input.value;
    setSearchParams({ query: searchValue });
  }
      
return <Form onSubmit={handleSubmit}>
    <Input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder=""
      name="input"
      required
    />
    <button type="submit">Search</button>
  </Form>
};

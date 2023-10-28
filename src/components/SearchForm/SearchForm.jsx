import {Form, Input} from './SearchForm.styled'

export const SearchForm = ({ onSubmit }) => (
  <Form
    onSubmit={evt => {
      evt.preventDefault();
      const searchValue = evt.target.elements.input.value;
      onSubmit(searchValue);
    }}
  >
    <Input
      type="text"
      autoComplete="off"
      autoFocus
      //   placeholder="Search images and photos"
      name="input"
      required
    />
    <button type="submit">Search</button>
  </Form>
);

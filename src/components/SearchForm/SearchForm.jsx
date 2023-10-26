export const SearchForm = ({ onSubmit }) =>
    <form onSubmit={evt => {
        evt.preventDefault();
        const searchValue = evt.target.elements.input.value;
        onSubmit(searchValue)
    }}>
        <input
            type="text"
            autoComplete="off"
            autoFocus
            //   placeholder="Search images and photos"
            name="input"
            required
        />
        <button type="submit">Search</button>
    </form>;
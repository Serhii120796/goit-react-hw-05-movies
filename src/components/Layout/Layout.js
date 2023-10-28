import { Link, Navigation, Header } from './Layout.styled';

export const Layout = ({children}) => {
  return (
    <>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
          </Header>
          {children}
    </>
  );
};

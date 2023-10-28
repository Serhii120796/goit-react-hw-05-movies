import { Outlet } from 'react-router-dom';
import { Link, Navigation, Header } from './Layout.styled';

export default function Layout () {
  return (
    <>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </Header>
      <Outlet />
    </>
  );
};

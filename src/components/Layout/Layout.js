import { Outlet } from 'react-router-dom';
import { Header } from './Layout.styled';
import { Navigation } from '../Navigation/Navigation';

export default function Layout() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Outlet />
    </>
  );
}

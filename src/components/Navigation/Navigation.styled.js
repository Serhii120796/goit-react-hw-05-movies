import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
display: flex;
padding: 0 30px;
`;

export const Link = styled(NavLink)`
// display: block;
padding: 20px 0;

& + & {
    margin-left: 20px;
}

&.active {
    color: red;
}
`;
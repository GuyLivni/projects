import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Link } from '../../routes';

const StyledSideMenu = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 160pt;
  padding: 0.75rem;
  background: #efefef;
  height: 100%;
  min-height: 1100px;
  color: #000;
  user-select: none;
  top: 56px;
  left: 0;
  bottom: 0;
  right: auto;
  z-index: 1;
`;

const MenuItem = styled.a`
  font-size: 16px;
  color: #000;
  background: none;
  outline: 0;
  cursor: pointer;
  padding: 10px;
  transition: color 0.3s ease-in;
  &:hover {
    color: #9e7cc1;
  }
`;

const MenuItems = [
  { route: '/', name: 'Home', icon: 'home' },
  { route: '/movie/list', name: 'Movies', icon: 'tv' },
  { route: '/about', name: 'About', icon: 'info' },
];

const SideMenu = () => (
  <StyledSideMenu>
    {MenuItems.map(({ route, name, icon }) => (
      <Link key={name} route={route}>
        <MenuItem>
          <Icon name={icon} />
          {name}
        </MenuItem>
      </Link>
    ))}
  </StyledSideMenu>
);

export default SideMenu;

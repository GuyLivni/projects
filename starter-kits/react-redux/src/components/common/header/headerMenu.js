import React from "react";
import styled from "styled-components";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { media } from "../../../utils/styleUtils";
import menuImg from "../../../assets/images/menu.png";

const HeaderMenu = () => {
  const Menu = styled(Dropdown.Menu)`
    display: flex;
    align-items: center;
    ${media.handheld`
       font-size: 0.9em;
    `};
  `;

  const StyledLink = styled(Link)`
    color: #79589f;
    &:hover {
      color: #79589f;
    }
  `;

  const MenuIcon = styled.img.attrs({
    src: menuImg,
    alt: "user photo"
  })`
    position: relative;
    width: 35px;
    height: 35px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    overflow: hidden;
  `;

  const renderContent = () => {
    return (
      <Dropdown
        icon={false}
        floating
        pointing="top right"
        trigger={<MenuIcon />}
      >
        <Dropdown.Menu>
          <Dropdown.Item>
            <StyledLink to="/movies">
              <Icon name="tv" />Movies
            </StyledLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return <Menu>{renderContent()}</Menu>;
};

export default HeaderMenu;

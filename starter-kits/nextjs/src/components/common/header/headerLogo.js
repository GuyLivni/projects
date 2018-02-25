import styled from 'styled-components';
import { Link } from '../../../routes';

const Img = styled.img`
  width: 39px;
  cursor: pointer;
  background: #f7f7f7;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0 3px 3px;
`;

const logoImg = '../../../../static/images/logo.png';

const HeaderLogo = () => (
  <Link route="/">
    <Img src={logoImg} alt="logo" />
  </Link>
);

export default HeaderLogo;

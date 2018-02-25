import styled from 'styled-components';
import PropTypes from 'prop-types';
import SideMenu from '../sideMenu';
import Header from '../common/header';
import LoadingBar from '../common/loadingBar';

const LayoutContainer = styled.div`
  padding-left: 210px;
`;

const LayoutContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 100px 60px;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <LoadingBar />
    <Header />
    <SideMenu />
    <LayoutContent>{children}</LayoutContent>
  </LayoutContainer>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;

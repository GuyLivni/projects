import styled from 'styled-components';
import { connect } from 'react-redux';
import { ImmutableLoadingBar as ImLoadingBar } from 'react-redux-loading-bar';

const StyledLoadingBar = styled(ImLoadingBar)`
  background-color: #75d3f9;
  height: 4px;
  z-index: 10000000000;
  box-shadow: 1px 1px 6px #84b5ef;
  position: fixed;
  left: 0;
`;

const LoadingBar = () => <StyledLoadingBar showFastActions />;

export default connect()(LoadingBar);

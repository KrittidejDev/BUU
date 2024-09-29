import styled from 'styled-components';

export const LoadingStyled = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  .theme_standard_loading {
  }
`;

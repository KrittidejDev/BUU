import styled from "styled-components";

export const BodyEmptyStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  z-index: 99;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .backdrop {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.COLORS.BLACK_1}66;
  }
  .modal_body_layout {
    position: relative;
    .btn_close_modal {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 2;
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";

export const AlertStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  z-index: 99;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  .backdrop {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.COLORS.BLACK_1}D6;
  }
  .alert_body {
    position: relative;
    border-radius: 16px;
    width: 100%;
    max-width: 350px;
    padding: 18px 12px;
    background: ${({ theme }) => theme.COLORS.WHITE_1};
    .alert_close_wrap {
      position: absolute;
      top: 14px;
      right: 14px;
      cursor: pointer;
    }
    .alert_title {
      margin-bottom: 12px;
      text-align: center;
      font-size: ${({ theme }) => theme.FONTS.SIZES.S22};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      color: ${({ theme }) => theme.COLORS.RED_1};
    }
    .alert_description {
      text-align: center;
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
      color: ${({ theme }) => theme.COLORS.BLACK_2};
    }
    .alert_action_row {
      margin-top: 30px;
      display: flex;
      column-gap: 16px;
      .alert_action_col {
        flex: 1;
      }
    }
  }
`;

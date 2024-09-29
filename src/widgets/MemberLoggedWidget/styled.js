import styled from "styled-components";

export const MemberLoggedWidgetContainer = styled.div`
  width: 100%;
  height: 100%;
  .btn_login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${({ theme }) => theme.COLORS.WHITE_1};
    a {
      color: ${({ theme }) => theme.COLORS.BLACK_5};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    }
  }
`;

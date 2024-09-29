import styled from "styled-components";

export const EnrollNowContainer = styled.div`
  border-radius: 30px;
  box-shadow: 0px 0px 4px 0px #00000040;
  padding: 12px;
  height: calc(100% - 24px);
  .card_container {
    margin: auto;
    max-width: 285px;
    text-align: center;
    .card_title {
      margin-bottom: 16px;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S36};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    }
    .enroll_college {
      margin-bottom: 15px;
      border-radius: 18px;
      padding: 8px;
      min-height: 72px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ themeColor }) =>
        themeColor
          ? themeColor
          : "linear-gradient(90deg, #38b4e7 0%, #75c7e9 58.5%)"};
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
      cursor: pointer;
    }
    .enroll_new {
      margin-bottom: 8px;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
      cursor: pointer;
    }
    .enroll_underline {
      text-decoration: underline;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S15};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      cursor: pointer;
    }
  }
`;

import styled from "styled-components";

export const OtpFieldStyled = styled.div`
  width: 100%;
  .otp_input_container {
    width: 100%;
    .label {
      margin-bottom: 10px;
      color: ${({ theme, isErr }) =>
        isErr ? theme.COLORS.RED_1 : theme.COLORS.BLACK_3};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    }
    .otp_input {
      width: 100%;
      column-gap: 10px;
      .input_item {
        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_10};
        padding: 5% 0;
        width: 100% !important;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.BLACK_3};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      }
    }
    .errors {
      margin-top: 6px;
      padding-left: 16px;
      font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      color: ${({ theme }) => theme.COLORS.RED_1};
    }
  }

  .theme_standard {
  }
`;

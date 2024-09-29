import styled, { keyframes } from "styled-components";

// Define the keyframes for the scale animation
const scaleUpDown = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08); /* ขยายขนาดเป็น 1.5 เท่า */
  }
  100% {
    transform: scale(1);
  }
`;

export const NavbarWidgetContainer = styled.div`
  height: 60px;
  .nav_container {
    height: 100%;
    display: flex;
    .nav_left_col {
      flex: 1;
      height: 100%;
      background: linear-gradient(90deg, #f89925 0%, #ffce00 75%);
      .nav_body_container {
        margin: auto;
        max-width: 1168px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 8px;
        .nav_body_left_col {
          display: flex;
          align-items: center;
          column-gap: 14px;
          .btn_register {
            border-radius: 9px;
            box-shadow: 0px 1px 4px 0px #00000026;
            padding: 5px 0px 3px 0px;
            width: 117px;
            text-align: center;
            background: ${({ theme }) => theme.COLORS.WHITE_1};
            color: ${({ theme }) => theme.COLORS.BLACK_2};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S17};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
            animation: ${scaleUpDown} 2s ease-in-out infinite;
          }
          .nav_line_vertical {
            width: 1px;
            height: 34px;
            background: ${({ theme }) => theme.COLORS.GRAY_11};
          }
          .welcom_label {
            max-width: 325px;
            color: ${({ theme }) => theme.COLORS.BLACK_3};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S15};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
          }
        }
        .nav_body_right_col {
          display: flex;
          align-items: center;
          column-gap: 14px;
          .phone_block {
            display: flex;
            align-items: center;
            column-gap: 5px;
            .phone_label {
              color: ${({ theme }) => theme.COLORS.BLACK_3};
              font-size: ${({ theme }) => theme.FONTS.SIZES.S15};
              font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
            }
          }
        }
      }
    }
    .nav_right_col {
      flex-basis: 117px;
      height: 100%;
    }
  }
  color: ${({ theme }) => theme.COLORS.BLACK_1};
  font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
`;

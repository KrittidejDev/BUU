import styled from "styled-components";

export const ContactContainer = styled.div`
  border-radius: 30px;
  box-shadow: 0px 0px 4px 0px #00000040;
  padding: 12px;
  height: calc(100% - 24px);
  .card_container {
    margin: auto;
    max-width: 395px;
    text-align: center;
    .card_title {
      margin-bottom: 16px;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S36};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    }
    .phone_block {
      display: flex;
      column-gap: 4px;
      &.center {
        align-items: center;
      }
      &.mb_20 {
        margin-bottom: 20px;
      }
      .phone_left_col {
        display: flex;
        column-gap: 8px;
        &.center {
          align-items: center;
        }
        .phone_label {
          white-space: nowrap;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
      }
      .phone_right_col {
        padding-top: 1px;
        .phone_value {
          text-align: left;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
        }
      }
    }
  }
`;

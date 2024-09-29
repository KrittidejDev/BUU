import styled from "styled-components";

export const CountactUsContainer = styled.div`
  border-radius: 30px;
  box-shadow: 0px 0px 4px 0px #00000040;
  padding: 12px;
  height: calc(100% - 24px);
  .card_container {
    margin: auto;
    max-width: 335px;
    text-align: center;
    .card_title {
      margin-bottom: 16px;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S36};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    }
    .contact_block {
      display: flex;
      justify-content: space-between;
      .contact_item {
        .contact_icon {
          margin-bottom: 6px;
          &.pt_5 {
            padding-top: 5px;
          }
          &.mb_line {
            margin-bottom: 1px;
          }
          &.mb_11 {
            margin-bottom: 11px;
          }
        }
        .contact_name {
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
      }
    }
  }
`;

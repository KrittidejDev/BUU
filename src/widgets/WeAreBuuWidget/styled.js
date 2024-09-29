import styled from "styled-components";

export const WeAreBuuWidgetContainer = styled.div`
  position: relative;
  .we_buu_img {
    display: block;
    width: 100%;
    height: auto;
  }
  .we_are_info_block {
    position: absolute;
    top: 20px;
    left: 269px;
    display: flex;
    column-gap: 26px;
    .we_are_info_left_col {
      flex-basis: 269px;
      .network_img {
        width: 100%;
        height: auto;
      }
    }
    .we_are_info_right_col {
      flex-basis: 546px;
      .prefix_label {
        margin-bottom: px;
        color: ${({ theme }) => theme.COLORS.GRAY_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S46};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      }
      .name_label {
        display: flex;
        font-size: ${({ theme }) => theme.FONTS.SIZES.S79};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
        .buu_label {
          margin-right: 14px;
          color: ${({ theme }) => theme.COLORS.YELLOW_1};
        }
        .s_label {
          color: ${({ theme }) => theme.COLORS.YELLOW_1};
        }
        .and_label {
          margin-left: -10px;
          margin-right: -28px;
          color: ${({ theme }) => theme.COLORS.ORANGE_1};
        }
        .a_label {
          color: ${({ theme }) => theme.COLORS.YELLOW_1};
        }
      }
      .decs {
        color: ${({ theme }) => theme.COLORS.BLACK_6};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
      }
    }
  }
`;

import styled from "styled-components";

export const SAMouWidgetContainer = styled.div`
  padding: 85px 22px 85px 22px;
  .mou_title {
    margin-bottom: 22px;
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S79};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
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
    .mou_label {
      margin-left: 14px;
      color: ${({ theme }) => theme.COLORS.ORANGE_1};
    }
  }
  .carousel_block {
    position: relative;
    margin: auto;
    width: 80%;
    .pd_item_wrap {
      .mou_img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

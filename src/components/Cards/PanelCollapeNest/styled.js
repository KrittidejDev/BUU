import styled from "styled-components";

export const PanelCollapeNestContainer = styled.div`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: box-shadow 0.6s ease-in-out;
  .panel_block {
    border-radius: 10px;
    padding: 13px 15px 11px 29px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 8px;
    background: linear-gradient(180deg, #f9d10f 0%, #f89925 100%);
    cursor: pointer;
    .panel_title {
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S32};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
    }
    .panel_icon {
      transition: transform 1s;
      transform: ${({ isExpand }) => (isExpand ? "rotate(180deg)" : "unset")};
    }
  }
  .panel_body {
    display: grid;
    grid-template-rows: ${({ isExpand }) => (isExpand ? "1fr" : "0fr")};
    transition: 750ms grid-template-rows ease;
    overflow: hidden;
    .panel_body_sub_block {
      overflow: hidden;
      padding-top: 22px;
    }
  }

  .panel_block_item_lv2 {
    padding: 10px 24px 10px 47px;
    display: flex;
    align-items: center;
    column-gap: 26px;
    text-decoration: underline;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    .panel_block_icon_item_lv2 {
    }
    .panel_block_title_item_lv2 {
      .highlight {
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
      }
    }
  }
  .panel_block_lv2 {
    border-radius: 10px;
    padding: 10px 24px 10px 47px;
    display: flex;
    align-items: center;
    column-gap: 12px;
    cursor: pointer;
    .panel_title_lv2 {
      margin-bottom: 9px;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S25};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
      .normal {
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
        .highlight {
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
      }
    }
    .panel_icon_lv2 {
      transition: transform 1s;
      transform: unset;
    }
    &.expand {
      .panel_icon_lv2 {
        transform: rotate(180deg);
      }
    }
  }
  .panel_body_lv2 {
    display: grid;
    grid-template-rows: 0fr;
    transition: 750ms grid-template-rows ease;
    overflow: hidden;
    .panel_body_sub_block_lv2 {
      overflow: hidden;
    }
    &.expand {
      grid-template-rows: 1fr;
    }
  }

  .panel_block_lv3 {
    border-radius: 10px;
    padding: 10px 24px 10px 47px;
    display: flex;
    align-items: center;
    column-gap: 12px;
    cursor: pointer;
    .panel_title_lv3 {
      margin-bottom: 9px;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    }
    .panel_icon_lv3 {
      transition: transform 1s;
      transform: unset;
    }
    .panel_file_lv3 {
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      text-decoration: underline;
    }
    &.expand {
      .panel_icon_lv3 {
        transform: rotate(180deg);
      }
    }
  }
  .panel_body_lv3 {
    display: grid;
    grid-template-rows: 0fr;
    transition: 750ms grid-template-rows ease;
    overflow: hidden;
    .panel_body_sub_block_lv3 {
      overflow: hidden;
    }
    &.expand {
      grid-template-rows: 1fr;
    }
  }

  .panel_block_lv4 {
    border-radius: 10px;
    padding: 10px 24px 10px 97px;
    display: flex;
    align-items: center;
    column-gap: 12px;
    cursor: pointer;
    .panel_title_lv4 {
      margin-bottom: 9px;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S25};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    }
    .panel_icon_lv4 {
      transition: transform 1s;
      transform: unset;
    }
    .panel_file_lv4 {
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      text-decoration: underline;
    }
    &.expand {
      .panel_icon_lv4 {
        transform: rotate(180deg);
      }
    }
  }
  .panel_body_lv4 {
    display: grid;
    grid-template-rows: 0fr;
    transition: 750ms grid-template-rows ease;
    overflow: hidden;
    .panel_body_sub_block_lv4 {
      overflow: hidden;
    }
    &.expand {
      grid-template-rows: 1fr;
    }
  }

  &.theme_blue {
    .panel_block {
      background: linear-gradient(90deg, #38b4e7 0%, #75c7e9 58.5%);
    }
  }
`;

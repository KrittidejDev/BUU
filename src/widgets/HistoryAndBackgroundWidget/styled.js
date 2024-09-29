import styled from "styled-components";

export const HistoryAndBackgroundWidgetContainer = styled.div`
  padding: 60px 22px 156px 22px;
  .history_title {
    margin-bottom: 30px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S48};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
  }
  .title_paragraph {
    margin-bottom: 19px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S32};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
  }
  .history_desc {
    margin: auto;
    margin-bottom: 100px;
    max-width: 677px;
    p {
      padding: 0px;
      margin: 0px;
      &.paragraph_mb {
        margin-bottom: 20px;
      }
    }
  }
  .line_horizontal {
    margin: auto;
    margin-bottom: 59px;
    max-width: 460px;
    height: 0.5px;
    background: ${({ theme }) => theme.COLORS.GRAY_15};
  }
  .history_block {
    position: relative;
    display: flex;
    justify-content: center;
    column-gap: 116px;
    .line_vertical {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: -1;
      .line1 {
        border-radius: 12px;
        width: 12px;
        height: 65px;
        background: ${({ theme }) => theme.COLORS.ORANGE_1};
      }
      .line2 {
        border-radius: 12px;
        width: 12px;
        height: 664px;
        background: ${({ theme }) => theme.COLORS.YELLOW_1};
      }
      .line3 {
        border-radius: 12px;
        width: 12px;
        height: 330px;
        background: ${({ theme }) => theme.COLORS.ORANGE_1};
      }
      .line4 {
        border-radius: 12px;
        width: 12px;
        height: 148px;
        background: ${({ theme }) => theme.COLORS.YELLOW_1};
      }
      .line5 {
        border-radius: 12px;
        width: 12px;
        height: 445px;
        background: ${({ theme }) => theme.COLORS.ORANGE_1};
      }
    }
    .history_left_col {
      max-width: 607px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .history_right_col {
      max-width: 607px;
      width: 100%;
    }
  }

  .history_item {
    width: 100%;
    &.pt_26 {
      padding-top: 26px;
    }
    &.pt_42 {
      padding-top: 42px;
    }
    &.pt_63 {
      padding-top: 63px;
    }
    &.pt_97 {
      padding-top: 97px;
    }
    &.pt_178 {
      padding-top: 178px;
    }
    .history_figture {
      &.txt_right {
        text-align: right;
      }
      .history_img {
        margin-bottom: 226px;
        max-width: 475px;
        height: auto;
        &.mb_0 {
          margin-bottom: 0px;
        }
        &.mb_12 {
          margin-bottom: 12px;
        }
        &.mb_53 {
          margin-bottom: 53px;
        }
        &.mw_447 {
          max-width: 447px;
        }
        &.mw_320 {
          max-width: 320px;
        }
        &.mw_344 {
          max-width: 344px;
        }
      }
    }

    .paragraph {
      margin: 0;
      padding: 0;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      margin-bottom: 42px;
      &.txtIndent {
        text-indent: 42px;
      }
      &.mb_15 {
        margin-bottom: 15px;
      }
      &.mb_26 {
        margin-bottom: 27px;
      }
      &.mb_42 {
        margin-bottom: 42px;
      }
      &.mw_509 {
        max-width: 509px;
      }
      .semibold {
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      }
    }
    .history_list {
      .history_li {
        color: ${({ theme }) => theme.COLORS.BLACK_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
        .semibold {
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
        .small {
          font-size: ${({ theme }) => theme.FONTS.SIZES.S13};
        }
      }
      &.mb_9 {
        margin-bottom: 9px;
      }
      &.mb_47 {
        margin-bottom: 47px;
      }
    }
    .year_block {
      position: relative;
      margin-left: -60px;
      padding-left: 100px;
      border-bottom: 2px dashed ${({ theme }) => theme.COLORS.ORANGE_1};
      padding-bottom: 2px;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S32};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      &.txt_right {
        text-align: right;
        margin-right: -60px;
        margin-left: 0;
        padding-right: 100px;
      }
      .circle {
        position: absolute;
        left: -18px;
        bottom: -20px;
        border-radius: 100px;
        padding: 11px;
        height: fit-content;
        background: ${({ theme }) => theme.COLORS.YELLOW_1};
        &.right {
          left: unset;
          right: -18px;
        }
        .sub_circle {
          border-radius: 17px;
          width: 17px;
          height: 17px;
          background: ${({ theme }) => theme.COLORS.WHITE_1};
        }
      }
    }
  }
`;

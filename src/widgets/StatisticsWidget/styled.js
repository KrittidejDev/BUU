import styled from "styled-components";

export const StatisticsWidgetContainer = styled.div`
  padding-bottom: 28px;
  display: flex;
  align-items: center;
  .statistics_left_col {
    position: relative;
    margin-right: -360px;
    padding: 60px 22px 56px 22px;
    flex: 1;
    background: ${({ theme }) => theme.COLORS.YELLOW_1};
    .statistics_title {
      margin-bottom: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 8px;
      color: ${({ theme }) => theme.COLORS.BLACK_7};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S43};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    }
    .statistic_figture {
      position: absolute;
      left: 0px;
      .statistic_img {
        width: 380px;
        height: auto;
      }
    }
    .statistic_contaienr {
      margin: auto;
      max-width: 554px;
      .statistic_block {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 70px;
      }
      .statistic_line_horizontal {
        margin: 40px 0px;
        height: 2px;
        background: ${({ theme }) => theme.COLORS.WHITE_1};
      }
    }
  }
  .statistics_right_col {
    flex: 1;
    z-index: 2;
    .statistics_img {
      width: 100%;
      height: auto;
    }
  }
`;

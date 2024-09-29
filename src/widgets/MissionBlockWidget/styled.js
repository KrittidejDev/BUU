import styled from "styled-components";

export const MissionBlockWidgetContainer = styled.div`
  .mission_title {
    margin-bottom: 57px;
    text-align: center;
    font-size: 48px;
  }
  .mission_list {
    display: flex;
    column-gap: 80px;
    .mission_item {
      position: relative;
      flex: 1;
      .icon {
        margin-bottom: 74px;
        text-align: center;
        .icon_id {
          width: 102px;
          height: 100px;
        }
      }
    }
    .text_info {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      z-index: 3;
    }
    .text_background {
      position: absolute;
      top: 50px;
      left: 0px;
      right: 0px;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.WHITE_2};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S250};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      z-index: -1;
    }
  }
`;

import styled from "styled-components";

export const InfoSysCurrentStudetnWidgetContainer = styled.div`
  .line_horizontal {
    height: 20px;
    background: ${({ theme }) => theme.COLORS.YELLOW_2};
  }
  .info_sys_container {
    margin: auto;
    padding: 90px 22px 209px 22px;
    max-width: 1680px;
    .preview_wrap {
      margin-bottom: 170px;
    }
    .filter_block {
      margin-bottom: 80px;
      display: flex;
      justify-content: center;
      column-gap: 57px;
      .filter_item {
        border-radius: 18px;
        border: 1px solid ${({ theme }) => theme.COLORS.BLACK_1}4D;
        box-shadow: 1px 5px 9px 0px #00000026;
        padding: 15px 15px 17px 15px;
        max-width: 548px;
        width: 100%;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_13};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S36};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
        cursor: pointer;
        &.active {
          border: none;
          padding: 16px 16px 18px 16px;
          background: linear-gradient(180deg, #f9d10f 0%, #f89925 100%);
        }
      }
    }
    .info_system_list {
      display: flex;
      flex-wrap: wrap;
      column-gap: 48px;
      row-gap: 62px;
      .infoty_system_item_wrap {
        flex-basis: calc(50% - 24px);
        cursor: pointer;
      }
    }
    .info_system_list2 {
      display: flex;
      flex-wrap: wrap;
      column-gap: 80px;
      row-gap: 112px;
      .infoty_system_item_wrap2 {
        flex-basis: calc(33% - 48px);
        cursor: pointer;
      }
    }
  }
`;

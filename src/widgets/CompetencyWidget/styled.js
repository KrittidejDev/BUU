import styled from "styled-components";

export const CompetencyWidgetContainer = styled.div`
  .competency_block {
    padding: 102px 22px 54px 22px;
    .competency_row {
      display: flex;
      align-items: center;
      justify-content: center;
      .text_block {
        margin-right: 66px;
        max-width: 296px;
        .text {
          text-align: right;
          font-size: 48px;
        }
      }
      .axis_line {
        width: 2px;
        height: 332px;
        background: #000;
      }
      .item_list {
        margin-left: 73px;
        max-width: 1026px;
        display: flex;
        align-item: center;
        .titel_text {
          font-size: 32px;
        }
      }
    }
  }
`;

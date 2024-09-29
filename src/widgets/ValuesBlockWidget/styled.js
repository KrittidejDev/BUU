import styled from "styled-components";

export const ValuesBlockWidgetContainer = styled.div`
  .values_block {
    padding: 88px 22px 162px 22px;
    margin: auto;
    max-width: 1340px;
    .values_title {
      text-align: center;
      font-size: 48px;
    }
    .value_subtitle {
      margin-bottom: 17px;
      text-align: center;
      font-size: 64px;
    }
    .value_undertitle {
      text-align: center;
      font-size: 36px;
      margin-bottom: 73px;
    }
    .value_block_list {
      display: flex;
      row-gap: 40px;
      flex-wrap: wrap;
      .value_items {
        display: flex;
        align-items: center;
        flex-basis: calc(50% - 50px);
        column-gap: 27px;
        &: nth-child(even) {
          padding-left: 100px;
        }
        .txt_rectanger {
          width: 110px;
          height: 110px;
          text-align: center;
          font-size: 76px;
          border: 9px solid #f89925;
        }
        .text_block {
          .text {
            font-weight: bold;
            font-size: 44px;
          }
          .subtext {
            font-size: 36px;
          }
        }
      }
    }
  }
`;

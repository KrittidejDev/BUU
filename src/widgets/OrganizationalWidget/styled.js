import styled from "styled-components";

export const OrganizationalWidgetContainer = styled.div`
  padding: 85px 22px 138px 22px;
  background-image: url("/images/backgrounds/Rectangle 1028.png");
  background-size: cover;
  .orgz_title {
    text-align: center;
    font-size: 48px;
  }
  .orgz_subtitle {
    margin-bottom: 54px;
    text-align: center;
    font-size: 36px;
  }
  .orgz_block_list {
    display: flex;
    align-items: center;
    justify-content: center;
    .text_block {
      max-width: 456px;
      .text {
        text-align: center;
        font-size: 89px;
      }
      .subtext {
        text-align: center;
        font-size: 40px;
      }
    }
    .axis_line {
      margin-left: 38px;
      width: 2px;
      height: 332px;
      background: #000;
    }
    .item_list {
      display: flex;
      flex-direction: column;
      justify_content: center;
      .block_item {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 50px;
        .titel_text {
          margin-right: 50px;
          font-size: 76px;
        }
        .sub_text {
          font-size: 44px;
        }
        .sub_two_text {
          font-size: 36px;
        }
      }
    }
  }
`;

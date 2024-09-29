import styled from "styled-components";

export const AcademicNewsWidgetContainer = styled.div`
  padding: 112px 22px 95px 22px;
  .academic_news_container {
    margin: auto;
    max-width: 1155px;
    &.mb_68 {
      margin-bottom: 68px;
    }
    .academic_topic_wrap {
      margin-bottom: 58px;
      display: flex;
      column-gap: 16px;
    }
    .acadmic_news_list_block {
      position: relative;
      display: flex;
      column-gap: 77px;
      .new_item_wrap {
        cursor: pointer;
      }
    }
  }
`;

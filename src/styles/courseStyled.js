import styled from "styled-components";

export const CourseStyled = styled.div`
  .course_list_block {
    margin: auto;
    padding: 100px 0px;
    max-width: 1760px;
    overflow: hidden;
    .course_preview_item {
      margin-bottom: 25px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;

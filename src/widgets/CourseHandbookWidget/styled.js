import styled from "styled-components";

export const CourseHandbookWidgetContainer = styled.div`
  .course_hanbook_title {
    margin-bottom: 6px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S36};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
  }
  .course_hanbook_plan_img {
    margin-bottom: 62px;
    width: 100%;
    height: auto;
  }
  .course_hanbook_latest {
    display: flex;
    justify-content: flex-end;
  }
  .course_hanbook_history_list {
    .course_hanbook_history_item {
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLACK_3};
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
  .btn_download_course {
    display: flex;
    align-items: center;
    column-gap: 10px;
    text-decoration: underline;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    cursor: pointer;
    &.mb_12 {
      margin-bottom: 12px;
    }
  }
`;

import styled from "styled-components";

export const OurCourseWidgetContainer = styled.div`
  padding: 40px 22px 85px 22px;
  .our_course_title {
    margin-bottom: 50px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S40};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
  }
  .our_course_content_block {
    margin: auto;
    max-width: 1168px;

    .our_course_item {
      position: relative;
      margin-bottom: 25px;
      border-radius: 5px;
      cursor: pointer;
      &:nth-child(even) {
        .course_info_block {
          right: 52px;
        }
      }
      &:nth-child(odd) {
        .course_info_block {
          left: 52px;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        .course_figture {
          .course_img {
            transform: scale(1.2, 1.2);
          }
        }
      }
      .course_figture {
        overflow: hidden;
        .course_img {
          display: block;
          width: 100%;
          height: auto;
          transition: all 0.2s ease-in-out;
        }
      }
      .course_info_block {
        position: absolute;
        top: 0px;
        z-index: 2;
        padding: 16px 30px 32px 30px;
        max-width: 394px;
        width: 100%;
        height: calc(100% - 48px);
        display: flex;
        flex-direction: column;
        background: ${({ theme }) => theme.COLORS.WHITE_1}E6;
        .short_name {
          margin-bottom: -10px;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S90};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
        }
        .department_th {
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S27};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
        }
        .department_en {
          flex: 1;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S13};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
        }
        .faculty_th {
          margin-bottom: 5px;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
        .btn_read_more {
          text-decoration: underline;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S13};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
          cursor: pointer;
        }
      }
    }
  }
`;

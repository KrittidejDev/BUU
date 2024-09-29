import styled from "styled-components";

export const CoursePreviewItemContainer = styled.div`
  position: relative;
  border-radius: 5px;
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
    left: ${({ isRight }) => (isRight ? "unset" : "0px")};
    right: ${({ isRight }) => (isRight ? "0px" : "unset")};
    z-index: 2;
    border-left: ${({ isRight, borderColor }) =>
      isRight ? "unset" : `26px solid ${borderColor}`};
    border-right: ${({ isRight, borderColor }) =>
      isRight ? `26px solid ${borderColor}` : "unset"};
    padding: 16px 30px 32px 30px;
    max-width: 542px;
    width: 100%;
    height: calc(100% - 48px);
    display: flex;
    flex-direction: column;
    background: ${({ theme, bgColor }) =>
      bgColor ? bgColor : `${theme.COLORS.WHITE_1}E6`};
    .short_name {
      margin-bottom: -20px;
      margin-left: -10px;
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S126};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
    }
    .department_th {
      color: ${({ theme }) => theme.COLORS.BLACK_12};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S44};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      line-height: 50px;
    }
    .department_en {
      flex: 1;
      color: ${({ theme }) => theme.COLORS.BLACK_12};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    }
    .faculty_th {
      margin-bottom: 27px;
      color: ${({ theme }) => theme.COLORS.BLACK_12};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S32};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
    }
    .btn_read_more {
      border-radius: 11px;
      padding: 12.5px 26px;
      width: fit-content;
      background: linear-gradient(180deg, #ffffff 40.68%, #bebebe 100%);
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S23};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      cursor: pointer;
    }
  }
`;

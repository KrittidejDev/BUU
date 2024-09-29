import styled from "styled-components";

export const CourseLabelValueContainer = styled.div`
  border-bottom: ${({ isNotBorder, theme }) =>
    isNotBorder ? "unset" : `2px solid ${theme.COLORS.BLACK_3}`};
  padding: 10px 0px;
  display: flex;
  align-items: baseline;
  column-gap: 4px;
  .course_label {
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
  }
  .course_value {
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    max-width: 1086px;
  }

  &.theme_vertical {
    flex-direction: column;
  }
`;

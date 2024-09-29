import styled from "styled-components";

export const BtnLangWidgetContainer = styled.div`
  border-radius: 14px;
  padding: 1.5px 3px 2.5px 3px;
  width: 106px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  background: ${({ theme }) => theme.COLORS.BLACK_3};
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
  cursor: pointer;
  &.flex_end {
    justify-content: flex-end;
  }
  .circle_icon {
    border-radius: 21px;
    width: 21px;
    height: 21px;
    background: ${({ theme }) => theme.COLORS.YELLOW_1};
  }
`;

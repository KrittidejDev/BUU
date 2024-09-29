import styled from "styled-components";

export const FilterBlockFieldContainer = styled.div`
  display: flex;
  column-gap: 8px;
  overflow: auto;
  .fb_option_item {
    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.COLORS.ORANGE_1};
    padding: 5.5px 32px;
    background: inherit;
    color: ${({ theme }) => theme.COLORS.BLACK_3};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    white-space: nowrap;
    cursor: pointer;
    &.active {
      background: ${({ theme }) => theme.COLORS.ORANGE_1};
      color: ${({ theme }) => theme.COLORS.WHITE_1};
    }
  }
`;

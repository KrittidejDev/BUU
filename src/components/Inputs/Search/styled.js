import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_12};
  display: flex;
  padding: 8px 0px;
  .flex_1_col {
    flex: 1;
    padding: 0px 16px;
    &.left {
      padding: 0px 8px 0px 16px;
    }
    &.right {
      padding: 0px 16px 0px 8px;
    }
  }
  .flex_2_col {
    flex: 2;
    border-left: 1px solid ${({ theme }) => theme.COLORS.PURPLE_1};
    border-right: 1px solid ${({ theme }) => theme.COLORS.PURPLE_1};
    padding: 0px 16px;
  }
  .s_cate {
    display: flex;
    align-items: center;
    column-gap: 8px;
    color: ${({ theme }) => theme.COLORS.PURPLE_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    cursor: pointer;
    .cate_icon_wrap {
      transition: transform 1s;
      transform: ${({ isCateFocus }) =>
        isCateFocus ? "rotate(90deg)" : "unset"};
    }
  }
  .s_course {
    margin: 0;
    padding: 3px 0;
    border: none;
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.BLACK_2};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.ORANGE_3};
    }
  }
  .s_word {
    display: flex;
    align-items: center;
    column-gap: 8px;
    color: ${({ theme }) => theme.COLORS.ORANGE_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    cursor: pointer;
  }

  .dropdown_content_block {
    margin-top: 4px;
    box-shadow: 0px 1px 3px 1px #00000026;
    position: absolute;
    top: 44px;
    left: 0px;
    border-radius: 10px;
    width: 100%;
    max-height: 30vh;
    background: ${({ theme }) => theme.COLORS.WHITE_1};
    overflow: auto;
    z-index: 22;
    .option_item {
      padding: 12px 16px;
      width: calc(100% - 32px);
      display: flex;
      justify-content: space-between;
      color: ${({ theme }) => theme.COLORS.BLACK_3};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.COLORS.GREEN_4};
        color: ${({ theme }) => theme.COLORS.GREEN_1};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      }
    }
  }
`;

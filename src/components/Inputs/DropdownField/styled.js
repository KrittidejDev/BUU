import styled from "styled-components";

export const DropdownFieldStyled = styled.div`
  position: relative;
  .label {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.COLORS.GRAY_4};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }
  .dropdown_input {
    border-radius: 8px;
    border: 1px solid
      ${({ theme, isError }) =>
        isError ? theme.COLORS.RED_1 : theme.COLORS.BLUE_1};
    padding: 16px 12px;
    width: calc(100% - 32px);
    display: flex;
    justify-content: space-between;
    background: ${({ theme, disabled }) =>
      disabled ? theme.COLORS.GRAY_4 : theme.COLORS.WHITE_1};
    color: ${({ theme }) => theme.COLORS.BLACK_2};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-family: inherit;
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    cursor: pointer;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_9};
    }
    &:focus {
      margin-bottom: 0px;
      border-bottom: 3px solid ${({ theme }) => theme.COLORS.GREEN_5};
    }
    .my_arrow_clasnName {
      position: absolute;
      right: 10px;
    }
    .my_menu_className {
      width: 150px;
    }
  }
  .dropdown_content_block {
    margin-top: 4px;
    box-shadow: 0px 1px 3px 1px #00000026;
    position: absolute;
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

  &.theme_filter {
    .dropdown_input {
      border-radius: 100px;
      border: 1px solid
        ${({ theme, isError }) =>
          isError ? theme.COLORS.RED_1 : theme.COLORS.GRAY_12};
      padding: 5.5px 24px;
      width: calc(100% - 48px);
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      span {
        color: ${({ theme }) => theme.COLORS.GRAY_12};
      }
    }
  }
`;

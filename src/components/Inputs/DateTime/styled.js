import styled from "styled-components";

export const DateTimeStyled = styled.div`
  width: 100%;
  position: relative;
  .label {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.COLORS.GRAY_4};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }
  input {
    border-radius: 8px;
    border: 1px solid
      ${({ theme, isError }) =>
        isError ? theme.COLORS.RED_1 : theme.COLORS.BLUE_1};
    padding: 16px 12px;
    width: calc(100% - 24px);
    background: ${({ theme, disabled }) =>
      disabled ? theme.COLORS.GRAY_4 : theme.COLORS.WHITE_1};
    color: ${({ theme }) => theme.COLORS.BLACK_2};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-family: inherit;
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_9};
    }
    &:focus {
    }
  }
  .errors {
    margin-top: 2px;
    padding-left: 16px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.RED_1};
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  &.theme_standard {
    .label {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    }
  }
`;

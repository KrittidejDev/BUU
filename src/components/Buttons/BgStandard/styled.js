import styled from "styled-components";

export const BgStandardStyled = styled.div`
  .btn {
    border-radius: 18px;
    border: none;
    padding: 13.5px 12px;
    width: 100%;
    background: ${({ theme, disabled }) =>
      disabled
        ? `${theme.COLORS.GRAY_5}`
        : "linear-gradient(180deg, #F9D10F 0%, #F89925 100%);"};
    color: ${({ theme, disabled }) =>
      disabled ? `${theme.COLORS.WHITE_1}` : theme.COLORS.BLACK_13};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S39};
    font-family: inherit;
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    &:hover {
    }
  }

  &.theme_cancel {
    .btn {
      border: 1px solid ${({ theme }) => theme.COLORS.BLACK_3};
      background: transparent;
      color: ${({ theme }) => theme.COLORS.BLACK_3};
    }
  }

  &.theme_shortcut {
    .btn {
      font-size: ${({ theme }) => theme.FONTS.SIZES.S32};
    }
  }

  &.theme_shortcut_transparent {
    .btn {
      border: 1px solid ${({ theme }) => theme.COLORS.BLACK_1}4D;
      background: ${({ theme, disabled }) =>
        disabled ? `${theme.COLORS.GRAY_5}` : "transparent"};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S32};
    }
  }
`;

import styled from "styled-components";

export const CircularProgressContainer = styled.div`
  .cp_total {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_7};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S48};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
  }
  .cp_label {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_7};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }

  &.theme_small {
    .cp_total {
      font-size: ${({ theme }) => theme.FONTS.SIZES.S48};
    }
    .cp_label {
      font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    }
  }
`;

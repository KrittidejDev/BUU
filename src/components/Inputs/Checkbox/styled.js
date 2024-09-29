import styled from "styled-components";

export const CheckboxContainer = styled.div`
  .checkbox_container {
    display: flex;
    column-gap: 8px;
    cursor: pointer;
    .checkbox_label {
      color: ${({ theme }) => theme.COLORS.GRAY_4};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
      .cb_link {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .errors {
    margin-top: 2px;
    padding-left: 16px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.RED_1};
  }
  a {
    color: ${({ theme }) => theme.COLORS.GREEN_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
  }
`;

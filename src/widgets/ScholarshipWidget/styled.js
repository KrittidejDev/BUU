import styled from "styled-components";

export const ScholarshipWidgetContainer = styled.div`
  border-radius: 27px;
  padding: 43px 120px 56px 120px;
  background: ${({ bgColor }) =>
    bgColor ? bgColor : "linear-gradient(180deg, #c3eafa 0%, #75c7e9 100%)"};
  .partner_title {
    margin-bottom: 27px;
    text-align: center;
    color: ${({ theme, txtColor }) =>
      txtColor ? txtColor : theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S36};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
  }
  .partner_list {
    display: flex;
    justify-content: center;
    column-gap: 40px;
    .partner_item {
      flex: 1;
      max-width: 227px;
      .partner_img {
        margin-bottom: 22px;
        width: 100%;
        height: auto;
      }
      .partner_label {
        text-align: center;
        color: ${({ theme, txtColor }) =>
          txtColor ? txtColor : theme.COLORS.BLACK_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      }
    }
  }
`;

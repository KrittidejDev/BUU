import styled from "styled-components";

export const FooterWidgetContainer = styled.div`
  .footer_info_container {
    padding: 62px 22px 36px 22px;
    background-image: url(/images/icons/bg-footer.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .footer_info_block {
      margin: auto;
      max-width: 1398px;
      .footer_logo {
        margin-bottom: px;
        width: 289px;
        height: auto;
      }
      .footer_info_row {
        display: flex;
        column-gap: 133px;
        .footer_info_left_col {
          .faculty_label {
            color: ${({ theme }) => theme.COLORS.GRAY_8};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S25};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
          }
          .college_label {
            margin-bottom: 15px;
            color: ${({ theme }) => theme.COLORS.GRAY_8};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
          }
          .address_label {
            margin-bottom: 31px;
            color: ${({ theme }) => theme.COLORS.GRAY_7};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
          }
          .contact_row {
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            column-gap: 18px;
          }
          .btn_send_to_admin {
            margin-bottom: 12px;
            text-decoration: underline;
            color: ${({ theme }) => theme.COLORS.GRAY_7};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
            cursor: pointer;
          }
        }
        .footer_info_right_col {
          flex: 1;
          display: flex;
          justify-content: space-between;
          column-gap: 8px;
          .shortcut_title {
            margin-bottom: 40px;
            color: ${({ theme }) => theme.COLORS.BLACK_10};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S27};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
          }
          .shortcut_item {
            color: ${({ theme }) => theme.COLORS.GRAY_7};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
            cursor: pointer;
          }
        }
      }
    }
  }
  .copyright_container {
    padding: 17px 22px;
    background: ${({ theme }) => theme.COLORS.YELLOW_1};
    .copyright_block {
      margin: auto;
      max-width: 1398px;
      display: flex;
      justify-content: space-between;
      column-gap: 8px;
      .copyright_right_col {
        .copyright_left_col {
          color: ${({ theme }) => theme.COLORS.GRAY_7};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S17};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
        }
        .copyright_right_col {
          color: ${({ theme }) => theme.COLORS.GRAY_7};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S17};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
        }
      }
    }
  }
`;

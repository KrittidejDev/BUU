import styled from "styled-components";

export const RegistrationStyled = styled.div`
  .line_horizontal {
    height: 20px;
    background: ${({ theme }) => theme.COLORS.YELLOW_2};
  }
  .registration_body_container {
    padding: 75px 22px 233px 22px;
    .btn_regis_wrap {
      margin: auto;
      margin-bottom: 79px;
      width: 360px;
    }
    .academic_year_block {
      text-align: center;
      .academic_title {
        margin-bottom: 61px;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.BLACK_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S48};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      }
      .academib_desc {
        margin-bottom: 38px;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.BLACK_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S29};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      }
      .buu_img {
        margin-bottom: 61px;
        max-width: 320px;
        height: auto;
      }
      .academic_list {
        margin: auto;
        margin-bottom: 69px;
        max-width: 740px;
        .academic_item {
          text-align: left;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S29};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
          span {
            text-decoration: underline;
          }
        }
      }
      .line_horizontal {
        margin: auto;
        max-width: 224px;
        height: 2px;
        background: ${({ theme }) => theme.COLORS.BLACK_1};
      }

      .content_block {
        padding-top: 60px;
        padding-bottom: 80px;
        margin: auto;
        max-width: 1128px;
        .header_block {
          margin-bottom: 37px;
          .header_label_normal {
            text-align: center;
            color: ${({ theme }) => theme.COLORS.BLACK_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S36};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIGOLD};
          }
          .header_label_big {
            text-align: center;
            color: ${({ theme }) => theme.COLORS.BLACK_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S48};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIGOLD};
          }
          .header_label_date {
            text-align: center;
            color: ${({ theme }) => theme.COLORS.BLACK_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S27};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIGOLD};
          }
        }
        .figture_content {
          margin-bottom: 37px;
          text-align: center;
          .content_img {
            max-width: 800px;
            height: auto;
          }
        }
        .content_list {
          &.mb_12 {
            margin-bottom: 12px;
          }
          &.mb_30 {
            margin-bottom: 30px;
          }
          .content_item {
            text-align: left;
            color: ${({ theme }) => theme.COLORS.BLACK_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S29};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
            &.decimal_style {
              list-style: decimal;
            }
            &.underline {
              text-decoration: underline;
            }
            .txt_big {
              font-size: ${({ theme }) => theme.FONTS.SIZES.S34};
              font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
            }
            .underline {
              text-decoration: underline;
            }
          }
        }
        .topic_label {
          text-align: left;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S34};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
      }
    }
    .contact_info_section {
      margin-bottom: 102px;
      display: flex;
      column-gap: 10px;
      .contact_info_item {
        flex: 1;
      }
    }
    .shortcut_block {
      display: flex;
      justify-content: center;
      column-gap: 57px;
      .shortcut_item {
        max-width: 550px;
      }
    }
  }
`;

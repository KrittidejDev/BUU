import styled from "styled-components";

export const ContactUsStyled = styled.div`
  .line_horizontal {
    height: 20px;
    background: ${({ theme }) => theme.COLORS.YELLOW_2};
  }
  .contact_us_contaienr {
    padding: 80px 22px 160px 22px;
    .executive_block {
      margin: auto;
      margin-bottom: 140px;
      max-width: 1310px;
      .executive_title {
        margin-bottom: 37px;
        display: flex;
        align-items: center;
        column-gap: 8px;
        color: ${({ theme }) => theme.COLORS.BLACK_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S48};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      }
      .executive_row {
        display: flex;
        align-items: center;
        .executive_col {
          flex: 1;
          .executive_img {
            width: 100%;
            height: auto;
          }
          .executive_info_block {
            padding-left: 100px;
            .executive_info_title {
              margin-bottom: 21px;
              display: flex;
              align-items: center;
              column-gap: 8px;
              color: ${({ theme }) => theme.COLORS.BLACK_1};
              font-size: ${({ theme }) => theme.FONTS.SIZES.S29};
              font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
            }
            .executive_info_row {
              display: flex;
              column-gap: 6px;
              &.mb_14 {
                margin-bottom: 14px;
              }
              .executive_info_label {
                width: 90px;
                color: ${({ theme }) => theme.COLORS.BLACK_1};
                font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
                font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
              }
              .executive_info_value {
                color: ${({ theme }) => theme.COLORS.BLACK_1};
                font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
                font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
              }
            }
            .btn_call_block {
              .btn_call {
                margin-bottom: 31px;
                border-radius: 9px;
                padding: 5px 10px;
                display: flex;
                align-items: center;
                column-gap: 10px;
                background: ${({ theme }) => theme.COLORS.BLACK_3};
                color: ${({ theme }) => theme.COLORS.WHITE_1};
                font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
                font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
                font-family: inherit;
                cursor: pointer;
              }
              .line_horizontal_black {
                width: 161px;
                height: 2px;
                background: ${({ theme }) => theme.COLORS.BLACK_1};
              }
            }
          }
        }
      }
    }
    .location_block {
      margin: auto;
      max-width: 1166px;
      .location_header {
        margin-bottom: 58px;
        .location_title {
          margin-bottom: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 12px;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S48};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
        }
        .location_faculty {
          text-align: center;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S31};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
        }
        .location_university {
          text-align: center;
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S23};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
        }
      }
      .location_contact_block {
        .location_map_wrap {
          margin-bottom: 3px;
          width: calc(100% - 3.5px);
          height: ${({ mapHeight }) => mapHeight}px;
        }
        .contact_block {
          padding: 27px 35px 60px 35px;
          display: flex;
          align-items: flex-end;
          background: linear-gradient(180deg, #f9d10f 0%, #f89925 100%);
          .contact_col {
            flex: 1;
            .social_block {
              display: flex;
              column-gap: 30px;
              .social_item {
              }
            }
          }
        }
      }
    }
  }
`;

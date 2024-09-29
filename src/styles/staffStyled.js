import styled from "styled-components";

export const StaffStyled = styled.div`
  .about_us_menu {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
  }
  .staff_container {
    margin: auto;
    padding: 114px 22px 208px 22px;
    max-width: 1390px;
    .title {
      margin-bottom: 71px;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S32};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
    }
    .staff_list {
      display: flex;
      margin-left: 120px;
      flex-wrap: wrap;
      column-gap: 45px;
      row-gap: 61px;
      flex-basis: calc(33.33% - 10px);
      .staff_info_block {
        padding: 11px 22px 22px 21px;
        display: column;
        width: 319px;
        border-radius: 7px;
        box-shadow: 1px 4px 10px 0px #00000033;
        .staff_img {
          width: 100%;
          height: auto;
        }
        .staff_info_sub_block {
          .name_label {
            color: ${({ theme }) => theme.COLORS.BLACK_17};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
          }
          .position_label {
            margin-bottom: 11px;
            color: ${({ theme }) => theme.COLORS.BLACK_17};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
          }
          .line_black {
            width: 41px;
            height: 2px;
            background: ${({ theme }) => theme.COLORS.BLACK_1};
            margin-bottom: 7px;
          }
          .info_label {
            max-width: 247px;
            font-weight: blod;
            font-size: 16px;
            margin-bottom: 40px;
            &.mb {
              margin-bottom: 15px;
            }
          }
          .contact {
            display: column;
            row-gap: 4px;
            .contact_vector {
              display: flex;
              column-gap: 7px;

              width: 243px;
              .vector_logo {
                width: 19px;
                height: 19px;
              }
              .text_vector {
                font-size: 14px;
                font-weight: bold;
              }
            }
            .contact_email {
              display: flex;
              column-gap: 5px;
              .email_logo {
                width: 22px;
                height: 22px;
              }
              .text_email {
                font-size: 14px;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
`;

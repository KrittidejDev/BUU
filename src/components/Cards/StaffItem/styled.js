import styled from "styled-components";

export const StaffItemContainer = styled.div`
  .staff_info_sub_block {
    .name_label {
      color: ${({ theme }) => theme.COLORS.BLACK_17};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
    }
    .staff_img {
      object-fit: cover;
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
    .info_label_block {
      display: flex;
      height: 83px;
      margin-bottom: 32px;
      .info_label {
        max-width: 247px;
        font-size: 16px;
      }
    }
    .contact {
      display: column;
      .contact_vector {
        display: flex;
        column-gap: 6px;
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
        align-items: center;
        column-gap: 6px;
        margin-bottom: 6px;
        .email_logo {
          width: 18px;
          height: 15px;
        }
        .text_email {
          font-size: 14px;

          font-weight: bold;
        }
      }
      .contact_cv {
        display: flex;
        column-gap: 6px;
        text-decoration: underline;
        .cv_logo {
          width: 22px;
          height: 22px;
        }
        .text_cv {
          font-size: 14px;
          text-decoration: underline;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const AvatarUploadStyled = styled.div`
  width: 100%;
  .label {
    margin-bottom: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_4};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }
  .upload_container {
    .avatar_upload_row {
      display: flex;
      align-items: center;
      column-gap: 48px;
      row-gap: 16px;
      .avt_left_col {
        .avatar_img {
          border-radius: 160px;
          width: 160px;
          height: 160px;
          object-fit: cover;
        }
      }
      .avt_right_col {
        .btn_upload {
          margin-bottom: 6px;
          border-radius: 8px;
          padding: 12px 24px;
          background: ${({ theme }) => theme.COLORS.PURPLE_1};
          color: ${({ theme }) => theme.COLORS.WHITE_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
          font-family: inherit;
          cursor: pointer;
        }
        .avt_desc {
          color: ${({ theme }) => theme.COLORS.GRAY_4};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
        }
      }
    }
  }

  .errors {
    margin-top: 4px;
    padding-left: 16px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
    color: ${({ theme }) => theme.COLORS.RED_1};
  }

  @media (max-width: ${({ theme }) => theme.SCREENS.SURFACE_DUO}) {
    .upload_container {
      .avatar_upload_row {
        flex-direction: column;
      }
    }
  }
`;

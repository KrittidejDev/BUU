import styled from "styled-components";

export const UploadImgFieldStyled = styled.div`
  width: 100%;
  .label {
    margin-bottom: 7px;
    color: ${({ theme }) => theme.COLORS.BLACK_2};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
  }
  .upload_container {
    position: relative;
    width: 100%;
    .input_upload {
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_1};
      padding: 16px 56px;
      width: fit-content;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.PURPLE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
      cursor: pointer;
    }
    .preview_img_figture {
      margin-top: 24px;
      .priview_img {
        width: 200px;
        height: auto;
        object-fit: contain;
      }
      .remove_icon_wrap {
        position: absolute;
        top: 4px;
        right: 4px;
        z-index: 22;
        background: ${({ theme }) => theme.COLORS.WHITE_1};
        border-radius: 32px;
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  .errors {
    margin-top: 4px;
    padding-left: 16px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
    color: ${({ theme }) => theme.COLORS.RED_1};
  }
`;

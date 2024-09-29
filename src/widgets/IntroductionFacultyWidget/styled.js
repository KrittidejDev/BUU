import styled from "styled-components";

export const IntroductionFacultyWidgetContainer = styled.div`
  padding: 115px 22px 40px 22px;
  .introduction_title {
    margin-bottom: 39px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S40};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
  }
  .yt_contaioner {
    margin: auto;
    width: 100%;
    max-width: 1276px;
    .yt_preview_block {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
      .yt_ifram {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 16px;
      }
    }
  }
`;

import styled from "styled-components";

export const BannerCourseWidgetContainer = styled.div`
  position: relative;
  .navbar_menu_wrap {
    position: absolute;
    top: 0px;
    z-index: 2;
  }
  .banner_item {
    position: relative;
    display: flex;
    align-items: center;
    .banner_img {
      display: block;
      width: 100%;
      height: auto;
    }
    .bn_content_block {
      position: absolute;
      left: 5%;
      z-index: 2;
      .bn_label_p1 {
        margin-bottom: 24px;
        width: fit-content;
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S168};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        line-height: 148px;
        .bn_underline {
          margin: 0 0px 0px 15px;
          height: 12px;
          background: ${({ theme }) => theme.COLORS.WHITE_1};
        }
      }
      .bnp2p3_block {
        margin-bottom: 16px;
        line-height: 90px;
        .bn_label_p2 {
          color: ${({ theme }) => theme.COLORS.WHITE_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S76};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
        .bn_label_p3 {
          color: ${({ theme }) => theme.COLORS.WHITE_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S76};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
      }
      .bn_label_p4 {
        margin-bottom: 73px;
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S43};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      }
      .bn_label_p5 {
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S44};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        .bn_underline_p5 {
          margin-bottom: 15px;
          width: 136px;
          height: 4px;
          background: ${({ theme }) => theme.COLORS.WHITE_1};
        }
      }
    }
  }
`;

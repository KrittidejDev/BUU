import styled from "styled-components";

export const ExectiveCommitteeStyled = styled.div`
  .about_us_menu {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
  }
  .executive_body_container {
    padding: 114px 22px 284px 22px;
    .executive_content_container {
      margin: auto;
      max-width: 1170px;
      .title {
        margin-bottom: 51px;
        text-align: center;
        color: #000000;
        font-size: 40px;
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.NotoSansThai};
      }
      .executive_list {
        .executive_item {
          margin-bottom: 51px;
          border-radius: 7px;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          &:nth-child(even) {
            .info_block {
              left: 171px;
            }
          }
          &:last-child {
            margin-bottom: 0px;
          }
          .banner_img {
            width: 100%;
            height: auto;
          }
          .info_block {
            position: absolute;
            right: 116px;
            bottom: 145px;
            max-width: 430px;
            .info_name {
              color: ${({ theme }) => theme.COLORS.WHITE_1};
              font-size: ${({ theme }) => theme.FONTS.SIZES.S25};
              font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.NotoSansThai};
            }
            .info_positoin {
              color: ${({ theme }) => theme.COLORS.WHITE_1};
              font-size: ${({ theme }) => theme.FONTS.SIZES.S25};
              font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.NotoSansThai};
            }
          }
        }
      }
    }
  }
`;

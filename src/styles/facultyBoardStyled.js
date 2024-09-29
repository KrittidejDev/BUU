import styled from "styled-components";

export const FacultyBoardStyled = styled.div`
  .about_us_menu {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
  }
  .about_us_body_container {
    padding: 114px 22px 208px 22px;
    .about_us_committee_container {
      margin: auto;
      max-width: 1200px;
      .title {
        margin-bottom: 51px;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.BLACK_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S40};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
      }
      .banner_block {
        margin-bottom: 110px;
        border-radius: 7px;
        position: relative;
        display: flex;
        align-items: center;
        overflow: hidden;
        .imgs {
          width: 100%;
          height: auto;
        }
        .banner_info_block {
          position: absolute;
          right: 136px;
          bottom: 126px;
          .banner_info_name {
            color: ${({ theme }) => theme.COLORS.WHITE_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S32};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
          }
          .banner_info_positoin {
            color: ${({ theme }) => theme.COLORS.WHITE_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S24};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
          }
          .banner_info_phone {
            color: ${({ theme }) => theme.COLORS.WHITE_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
          }
        }
      }
      .committee_list {
        display: flex;
        margin-left: 0px;
        flex-wrap: wrap;
        column-gap: 45px;
        row-gap: 61px;
        flex-basis: calc(33.33% - 0px);
        .staff_info_block {
          padding: 11px 22px 22px 21px;
          display: column;
          width: 319px;
          height: 402px;
          border-radius: 7px;
          box-shadow: 1px 4px 10px 0px #00000033;
          .staff_img {
            width: 100%;
            height: auto;
          }
          .staff_info_sub_block {
            .name_label {
              margin-left: 50px;
              color: ${({ theme }) => theme.COLORS.BLACK_17};
              font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
              font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
            }
            .position_label {
              margin-left: 50px;
              margin-bottom: 11px;
              color: ${({ theme }) => theme.COLORS.BLACK_17};
              font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
              font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
            }
            .line_black {
              margin-left: 50px;
              width: 41px;
              height: 2px;
              background: ${({ theme }) => theme.COLORS.BLACK_1};
              margin-bottom: 7px;
            }
          }
        }
      }
    }
  }
`;

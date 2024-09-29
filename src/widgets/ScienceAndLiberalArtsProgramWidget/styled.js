import styled, { keyframes } from "styled-components";

// การกำหนด keyframes สำหรับการหมุน
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-75deg);
  }
`;
export const ScienceAndLiberalArtsProgramWidgetContainer = styled.div`
  padding-top: 85px;
  .sal_container {
    padding: 0 22px 85px 22px;
    background-image: url(/images/icons/bg-gray-gradient.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .sal_row {
      margin: auto;
      max-width: 1743px;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 62px;
      .sac_left_col {
        margin-top: -60px;
        flex: 1;
        max-width: 850px;
        .sal_img {
          width: 100%;
          height: auto;
        }
      }
      .sac_right_col {
        flex-basis: 532px;
        .sal_info_block {
          .sal_logo_img {
            margin-bottom: 25px;
            width: 100%;
            height: auto;
          }
          .faculty_label {
            margin-bottom: 16px;
            color: ${({ theme }) => theme.COLORS.BLACK_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S26};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
          }
          .faculty_desc {
            margin-bottom: 45px;
            color: ${({ theme }) => theme.COLORS.BLACK_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
          }
          .btn_view_more {
            border-radius: 14px;
            padding: 6px 0 4px 0px;
            width: 117px;
            text-align: center;
            background: ${({ theme }) => theme.COLORS.YELLOW_2};
            color: ${({ theme }) => theme.COLORS.GRAY_12};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
            cursor: pointer;
          }
        }
      }
    }
  }
`;

import styled from "styled-components";

export const PanelCollapeContainer = styled.div`
  box-shadow: ${({ isExpand }) =>
    isExpand ? "0px 4px 4px 0px #00000040" : "unset"};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: box-shadow 0.6s ease-in-out;
  .panel_block {
    border-radius: 10px;
    padding: 20.5px 24px 20.5px 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 8px;
    background: transparent;
    cursor: pointer;
    .panel_title {
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S36};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    }
    .panel_icon {
      transition: transform 1s;
      transform: ${({ isExpand }) => (isExpand ? "rotate(180deg)" : "unset")};
    }
  }
  .panel_body {
    display: grid;
    grid-template-rows: ${({ isExpand }) => (isExpand ? "1fr" : "0fr")};
    transition: 750ms grid-template-rows ease;
    overflow: hidden;
    .panel_body_sub_block {
      overflow: hidden;
      .panel_info_block {
        padding: 20px 40px 32px 40px;
        .paragraph_label {
          color: ${({ theme }) => theme.COLORS.BLACK_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
          &.mb_12 {
            margin-bottom: 12px;
          }
          &.mb_30 {
            margin-bottom: 30px;
          }
          &.pl_22 {
            padding-left: 22px;
          }
          .topic_label {
            color: ${({ theme }) => theme.COLORS.BLACK_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
            &.underline {
              text-decoration: underline;
            }
          }
          p {
            padding: 0px;
            margin: 0px;
            text-indent: 42px;
          }
        }
        .paragraph_list {
          margin-bottom: 30px;
          .paragraph_li {
            color: ${({ theme }) => theme.COLORS.BLACK_1};
            font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
            font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
          }
        }
        .panel_img_list {
          display: flex;
          column-gap: 8px;
          .panel_figture {
            flex: 1;
            img {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }

  &.theme_blue {
    .panel_block {
      background: linear-gradient(90deg, #38b4e7 0%, #75c7e9 58.5%);
    }
  }

  &.theme_green {
    .panel_block {
      background: linear-gradient(90deg, #136835 0%, #6cc06e 88.5%);
    }
  }

  &.theme_gray {
    .panel_block {
      background: linear-gradient(90deg, #4e4e4f 0%, #8f8a9c 79%);
    }
  }

  &.theme_pink {
    .panel_block {
      background: linear-gradient(90deg, #d03493 13.17%, #d36fac 100%);
    }
  }
  &.theme_orange {
    .panel_block {
      background: linear-gradient(90deg, #fcb026 13.17%, #fed58b 100%);
    }
  }
`;

import styled from "styled-components";

export const ActivityItemContainer = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE_1};
  &:hover {
    .act_figture {
      .act_img {
        transform: scale(1.2, 1.2);
      }
    }
  }
  .act_oragng_bg {
    height: 11px;
    background: ${({ theme }) => theme.COLORS.ORANGE_1};
  }
  .act_info_block {
    padding: 25px 14px 34px 14px;
    display: flex;
    column-gap: 18px;
    .act_left_col {
      flex-basis: 45px;
      flex-shrink: 0;
      .act_date {
        border-bottom: 4.5px solid ${({ theme }) => theme.COLORS.BLACK_7};
        padding-bottom: 17px;
        .date_label {
          margin-bottom: -6px;
          text-align: center;
          color: ${({ theme }) => theme.COLORS.BLACK_7};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S40};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
        }
        .month_label {
          text-align: center;
          color: ${({ theme }) => theme.COLORS.BLACK_7};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
      }
    }
    .act_right_col {
      flex: 1;
      padding-top: 10px;
      .act_topic {
        margin-bottom: 52px;
        color: ${({ theme }) => theme.COLORS.BLACK_9};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      }
      .act_time {
        color: ${({ theme }) => theme.COLORS.BLACK_9};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
      }
      .location {
        margin-bottom: 26px;
        color: ${({ theme }) => theme.COLORS.BLACK_9};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
      }
      .btn_read_more {
        margin-left: auto;
        margin-right: -14px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 10px 29px;
        width: fit-content;
        background: ${({ theme }) => theme.COLORS.YELLOW_1};
        color: ${({ theme }) => theme.COLORS.BLACK_7};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        cursor: pointer;
      }
    }
  }
  .act_figture {
    overflow: hidden;
    .act_img {
      display: block;
      width: 100%;
      height: auto;
      transition: all 0.2s ease-in-out;
    }
  }

  .act_oragng_yewllow {
    height: 21px;
    background: ${({ theme }) => theme.COLORS.YELLOW_1};
  }
`;

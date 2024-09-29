import styled from "styled-components";

export const ActivityWidgetContainer = styled.div`
  position: relative;
  padding: 69px 22px 60px 22px;
  background: linear-gradient(180deg, #ededed 28%, rgba(237, 237, 237, 0) 100%);
  .activity_container {
    margin: auto;
    max-width: 1155px;
    .topic_wrap {
      margin-bottom: 41px;
    }
    .activity_list_block {
      position: relative;
      margin-bottom: 35px;
      .activity_item_wrap {
        cursor: pointer;
      }
    }
    .btn_read_all {
      margin: auto;
      border-radius: 11px;
      padding: 16px 50px;
      width: fit-content;
      background: ${({ theme }) => theme.COLORS.GRAY_1};
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      cursor: pointer;
    }
  }
  .mySwiper {
    padding-bottom: 40px;
  }
  .swiper-pagination {
    bottom: 0px;
  }
  .swiper-pagination-bullet {
    border-radius: 12px;
    width: 22px;
    height: 5px;
    background: ${({ theme }) => theme.COLORS.GRAY_6};
    &.swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.COLORS.GRAY_5};
    }
  }
`;

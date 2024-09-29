import styled from "styled-components";

export const NewsWidgetContainer = styled.div`
  display: flex;
  .news_item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:nth-child(even) {
      .news_label {
        color: ${({ theme }) => theme.COLORS.BLACK_7};
      }
    }
    &:hover {
      .news_figture {
        .news_img {
          transform: scale(1.2, 1.2);
        }
      }
    }
    .news_figture {
      width: 100%;
      overflow: hidden;
      .news_img {
        display: block;
        width: 100%;
        height: auto;
        transition: all 0.2s ease-in-out;
      }
    }

    .news_label {
      position: absolute;
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S36};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    }
  }
`;

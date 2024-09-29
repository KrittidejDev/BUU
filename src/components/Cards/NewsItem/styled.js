import styled from "styled-components";

export const NewsItemContainer = styled.div`
  &:hover {
    .news_img {
      transform: scale(1.2, 1.2);
    }
  }
  .news_figture {
    margin-bottom: 22px;
    border-radius: 10px;
    overflow: hidden;
    .news_img {
      display: block;
      width: 100%;
      height: auto;
      transition: all 0.2s ease-in-out;
    }
  }
  .created_date_label {
    margin-bottom: 3px;
    color: ${({ theme }) => theme.COLORS.GRAY_4};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
  }
  .new_desc {
    margin-bottom: 19px;
    color: ${({ theme }) => theme.COLORS.BLACK_8};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
  }
  .btn_read_more {
    border-radius: 7px;
    padding: 6px 0px;
    width: 103px;
    text-align: center;
    background: ${({ theme }) => theme.COLORS.YELLOW_1};
    color: ${({ theme }) => theme.COLORS.BLACK_7};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S18};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
    cursor: pointer;
  }
`;

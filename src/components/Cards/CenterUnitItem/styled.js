import styled from "styled-components";

export const CenterUnitItemContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  .center_unit_figture {
    overflow: hidden;
    .center_unit_img {
      display: block;
      width: 100%;
      height: auto;
      transition: all 0.2s ease-in-out;
      &:hover {
        transform: scale(1.2, 1.2);
      }
    }
  }
  .center_unit_name {
    position: absolute;
    bottom: 0px;
    width: calc(100% - 24px);
    padding: 12px;
    text-align: center;
    background: ${({ theme }) => theme.COLORS.YELLOW_1}CC;
    color: ${({ theme }) => theme.COLORS.BLACK_7};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.BOLD};
  }
`;

import styled from "styled-components";

export const InfoSysItemType1Container = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  .info_sys_figture {
    .info_sys_img {
      width: 100%;
      height: auto;
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      .info_sys_img {
        transform: scale(1.2, 1.2);
      }
    }
  }
  .info_system_label {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 56px;
    padding: 10px 0px;
    width: 100%;
    text-align: center;
    background: ${({ theme }) => theme.COLORS.GRAY_14};
    color: ${({ theme }) => theme.COLORS.BLACK_16};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S44};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    z-index: 2;
  }
`;

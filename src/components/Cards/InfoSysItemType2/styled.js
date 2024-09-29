import styled from "styled-components";

export const InfoSysItemType2Container = styled.div`
  position: relative;
  &:hover {
    .info_sys_figture {
      .info_sys_img {
        transform: scale(1.2, 1.2);
      }
    }
  }
  .info_sys_figture {
    border-radius: 18px;
    overflow: hidden;
    .info_sys_img {
      width: 100%;
      height: auto;
      transition: all 0.2s ease-in-out;
    }
  }

  .info_system_label {
    padding-top: 30px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.BLACK_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S32};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
  }
`;

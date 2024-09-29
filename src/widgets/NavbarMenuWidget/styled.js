import styled from "styled-components";

export const NavbarMenuWidgetContainer = styled.div`
  width: calc(100vw - 15px);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.7) 100%
  );
  .navbar_menu_container {
    margin: auto;
    max-width: 1068px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 8px;
    .navbar_menu_left_col {
      .logo_img {
        width: 210px;
        height: auto;
      }
    }
    .navbar_menu_right_col {
      display: flex;
      column-gap: 30px;
      .navbar_menu_item {
        text-align: center;
        color: ${({ theme }) => theme.COLORS.BLACK_1};
        font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
        cursor: pointer;
        .nbm_label {
          color: ${({ theme }) => theme.COLORS.BLACK_4};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
        }
        .nbm_label_en {
          color: ${({ theme }) => theme.COLORS.GRAY_1};
          font-size: ${({ theme }) => theme.FONTS.SIZES.S13};
          font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.LIGHT};
        }
        &.active {
          border-bottom: 3px solid ${({ theme }) => theme.COLORS.ORANGE_1};
        }
      }
    }
  }
`;

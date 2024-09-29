import styled from "styled-components";

export const HistoryStyled = styled.div`
  .about_us_menu {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
  }
  .about_us_menu_container {
    width: 100%;
    height: auto;
    .mission_block {
      position: relative;
      padding: 57px 22px 99px 22px;
      .mission_list_bg {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        background: linear-gradient(180deg, #f9d10f 40%, #f89925 100%);
        z-index: -2;
      }
   
    }
  }
`;

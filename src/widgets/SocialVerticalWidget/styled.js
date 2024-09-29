import styled from "styled-components";

export const SocialVerticalWidgetContainer = styled.div`
  position: fixed;
  right: 35px;
  bottom: 70px;
  z-index: 99;
  .social_item {
    margin-bottom: 16px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0px;
    }
    .social_img {
      width: 58px;
      height: auto;
    }
  }
`;

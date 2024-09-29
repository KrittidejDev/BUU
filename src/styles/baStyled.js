import styled from "styled-components";

export const BaStyled = styled.div`
  .body_contaienr {
    margin: auto;
    padding: 70px 0px 190px 0px;
    max-width: 1276px;
    .section {
      margin-bottom: 68px;
      &.mb_37 {
        margin-bottom: 37px;
      }
      &.mb_58 {
        margin-bottom: 58px;
      }
      &.mb_68 {
        margin-bottom: 68px;
      }
      &.mb_83 {
        margin-bottom: 83px;
      }
    }
    .contact_info_section {
      display: flex;
      column-gap: 10px;
      .contact_info_item {
        flex: 1;
      }
    }
  }
`;

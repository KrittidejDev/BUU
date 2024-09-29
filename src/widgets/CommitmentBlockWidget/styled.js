import styled from "styled-components";

export const CommitmentBlockWidgetContainer = styled.div`
  .commitment_block {
    padding: 100px 22px 138px 22px;
    max-width: auto;
    background: linear-gradient(
      180deg,
      #ededed 28%,
      rgba(237, 237, 237, 0) 100%
    );
    .commitment_title {
      font-size: 42px;
      text-align: center;
      margin-bottom: 11px;
    }
    .commitment_sub_title {
      margin-bottom: 101px;
      text-align: center;
      font-size: 40px;
      &.mb_7 {
        margin-bottom: 7px;
      }
    }
    .line_horizontal {
      margin: auto;
      margin-bottom: 97px;
      width: 238px;
      height: 2px;
      background: #353535;
    }
    .commitment_sub_title_en {
      text-align: center;
      font-size: 24px;
      margin-bottom: 7px;
    }
  }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    body {
      margin: 0;
      padding: 0;
      position: relative;
      font-size: 14px;
      color: #333333;
      background: #FFFFFF;
    }
    a {
      text-decoration: none;
    }
    svg {
      display: block;
    }
    button {
      border: none; 
      &:focus {
        outline: none;
      }
    }
    input {
      &:focus {
        outline: none;
      }
    }
    textarea {
      &:focus {
        outline: none;
      }
    }
  }
`;

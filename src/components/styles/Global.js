import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:wght@600&display=swap');
  *, *:before, *:after {
      margin:0;
      padding:0;
      box-sizing:inherit
  }

  html{
    font-size: 62.5%;
    box-sizing: border-box;
  }

  /* @font-face{
    font-family: Barlow;
    font-style: san-serif;
    font-weight: 600px;
  } */

  body {
      font-family: "Barlow", san-serif;
      font-weight: 600;
      line-height:1.6;
      color:#818498
  }
`;

export default GlobalStyle;

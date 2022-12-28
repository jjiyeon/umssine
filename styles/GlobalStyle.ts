import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body{
    margin: 0;
    box-sizing: border-box;
  }

  h1,p,div{
    margin: 0;
  }
`;

export default GlobalStyle;

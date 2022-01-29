import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
* {
        box-sizing: border-box
    }  
    
 html {
     margin: 0;
     -ms-overflow-style: scrollbar;
      font-family: Karla,serif;
 }

`;

export default GlobalStyled;

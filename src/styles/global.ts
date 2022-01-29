import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

 html {
     box-sizing: border-box;
     -ms-overflow-style: scrollbar;
      font-family: Karla,serif;
 }

 ul {
     padding: 0;
     margin: 0;
 }

 li {
     list-style: none;
 }

`;

export default GlobalStyled;

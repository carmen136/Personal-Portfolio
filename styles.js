import { createGlobalStyle } from "styled-components";
import { Lexend } from "next/font/google";

const lexendPeta = Lexend({ subsets: ['latin'] });

export default createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  width: 100%;
  font-family: ${lexendPeta.style.fontFamily};
}

h1 {
    font-size: 75px;
    text-transform: uppercase;
    text-align: right;
}

h2 {
    font-size: 65px;
    text-transform: uppercase;
}


`;
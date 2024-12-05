import { createGlobalStyle } from "styled-components";


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
  background-color: lightcoral;
}

`;
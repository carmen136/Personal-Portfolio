import { createGlobalStyle } from "styled-components";
import { Lexend, Alumni_Sans_Pinstripe } from "next/font/google";

export const lexendPeta = Lexend({ subsets: ['latin'] });
export const alumniSansPinstripe = Alumni_Sans_Pinstripe({ subsets: ['latin'], weight: ['400'] });

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

    @media (max-width: 576px) {
        font-size: 34px;
    }

    @media (max-width: 992px) {
        font-size: 40px;
    }

    @media (min-width: 1710px) {
        font-size: 90px;
    }
}

h2 {
    font-size: 65px;
    text-transform: uppercase;

    @media (max-width: 576px) {
        font-size: 28px;
    }

    @media (max-width: 992px) {
        font-size: 35px;
    }
}

h3 {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 5px;

    @media (min-width: 992px) {
        font-size: 20px;
    }
}


`;
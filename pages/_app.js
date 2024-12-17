"use client";

import GlobalStyle from "../styles";
import Header from "/components/Header";
import Footer from "/components/Footer";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [noHover, setNoHover] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: none)');
        setNoHover(mediaQuery.matches);

        const handleChange = (e) => setNoHover(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

  return (
  <>
    <GlobalStyle />
    <Header noHover={noHover}/>
    <Component {...pageProps} noHover={noHover} />
    <Footer />
  </>
  )
}

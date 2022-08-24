import { Container, NextUIProvider, createTheme } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        gold: "#FFD700",
        gold1: "#F9F295",
        gold2: "#E0AA3E",
        gold3: "#E0AA3E",
        gold4: "#B88A44",
        gradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
        gradient2:
          "linear-gradient(to right, #BF953F, #FCF6BA, #FCF6BA, #FBF5B7, #AA771C)",

        gradientBackGround: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
        radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
      },
      fonts: {
        sans: `'Nunito', sans-serif;`,
        primary: `'Baskervville', serif;`,
        secondary: `'Nunito', sans-serif;`,
      },
    },
  });

  return (
    <NextUIProvider theme={theme}>
      <Container
        fluid
        css={{
          background: "#042F14",
          padding: 0,
        }}
      >
        <Header />
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
  );
}

export default MyApp;

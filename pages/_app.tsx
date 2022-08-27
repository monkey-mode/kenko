import { Container, NextUIProvider, createTheme } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        primary: "#464E2E",
        secondary: "#302922",
        primaryGold: "#E0AA3E",
        secondaryGold: "#E1AB25",
        warningLight: "$primaryGold",
        gold1: "#F9F295",
        gold2: "#d6a657",
        gold3: "#E0AA3E",
        gold4: "#B88A44",
        gradient: "linear-gradient(to right, #BF953F,  #FCF6BA,  #AA771C)",
        gradient2:
          "linear-gradient(to right, #BF953F, #FCF6BA, #FCF6BA, #FBF5B7, #AA771C)",

        gradientBackGround: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
        radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
      },
      fonts: {
        sans: `'Baskervville','Noto Sans Thai', sans-serif;`,
        primary: `'Baskervville', serif;`,
        secondary: `'Nunito', sans-serif;`,
      },
    },
  });

  return (
    <NextUIProvider theme={theme}>
      <div
        style={{
          width: "100%",
          height: "auto",
          background: "#464E2E",
        }}
      >
        <Header />
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;

import { createTheme, NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "dark",
    theme: {
      colors: {
        primary: "#464E2E",
        secondary: "#302922",
        primaryGold: "#E0AA3E",
        secondaryGold: "#f2d274",
        warningLight: "$primaryGold",
        gradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
        gradient2:
          "linear-gradient(to right, #BF953F, #FCF6BA, #FCF6BA, #FBF5B7, #AA771C)",

        gradientBackGround: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
        radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
      },
      fonts: {
        sans: `'Nunito','Lora','Noto Sans Thai', sans-serif;`,
        primary: `'Lora','Noto Sans Thai', serif;`,
        secondary: `'Nunito','Noto Sans Thai', sans-serif;`,
      },
    },
  });

  return (
    <NextUIProvider theme={theme}>
      <div
        style={{
          width: "100vw",
          height: "auto",
          background: "#464E2E",
        }}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default MyApp;

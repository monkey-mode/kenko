import { Container, NextUIProvider, createTheme } from "@nextui-org/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: "light",
    theme: {
      colors: {
        gold: "#FFD700",
        gold1: "#F9F295",
        gold2: "#E0AA3E",
        gold3: "#E0AA3E",
        gold4: "#B88A44",
        gradient:
          "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        gradientBackGround: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
        radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
      },
    },
  });
  return (
    <NextUIProvider theme={theme}>
      <Container fluid>
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
  );
}

export default MyApp;

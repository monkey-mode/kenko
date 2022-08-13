import { Container, NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Container fluid>
        <Component {...pageProps} />
      </Container>
    </NextUIProvider>
  );
}

export default MyApp;

/* eslint-disable react/no-unescaped-entities */
import { Container, Grid, Image, Text } from "@nextui-org/react";

function LandingPage() {
  return (
    <Container
      fluid
      direction="column"
      justify="center"
      alignContent="center"
      css={{
        height: "100vh",
        background: "#042F14",
        display: "flex",
        padding: 0,
      }}
    >
      <Grid.Container
        justify="center"
        alignContent="center"
        css={{ h: "100%" }}
      >
        <Grid
          xs={12}
          md={6}
          justify="center"
          alignContent="stretch"
          alignItems="center"
        >
          <Container md>
            <Text
              h1
              weight="bold"
              css={{ textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C" }}
            >
              The essence of healt & vitality in one place
            </Text>
          </Container>
        </Grid>
        <Grid
          xs={12}
          md={6}
          justify="center"
          css={{
            h: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Image
            objectFit={"scale-down"}
            showSkeleton
            maxDelay={200}
            src="/landing.png"
            alt="langing"
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default LandingPage;

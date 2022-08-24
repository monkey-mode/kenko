import { Checkbox, Container, Grid, Image, Row, Text } from "@nextui-org/react";
import { servicesList } from "../consts";

function LandingPage() {
  return (
    <Container
      fluid
      direction="column"
      justify="center"
      alignContent="center"
      alignItems="center"
      css={{
        height: "fit-content",
        display: "flex",
        padding: 0,
      }}
    >
      <Grid.Container
        justify="center"
        alignContent="stretch"
        css={{ h: "100%" }}
      >
        <Grid
          xs={0}
          md={6}
          justify="center"
          alignContent="stretch"
          alignItems="center"
        >
          <Container xs justify="flex-end" css={{ zIndex: 100 }}>
            <Text
              h1
              weight="bold"
              css={{
                textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
                fontFamily: "$primary",
              }}
            >
              The essence of healt & vitality in one place
            </Text>
            {serviceList(servicesList)}
          </Container>
        </Grid>
        <Grid
          xs={12}
          md={0}
          justify="center"
          alignContent="stretch"
          alignItems="center"
        >
          <Container xs justify="flex-end">
            <Text
              h1
              weight="bold"
              css={{
                mt: "100px",
                textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
                fontFamily: "$primary",
              }}
            >
              The essence of healt & vitality in one place
            </Text>
            {serviceList(servicesList)}
          </Container>
        </Grid>
        <Grid
          xs={0}
          md={6}
          justify="center"
          css={{
            h: "100vh",
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
        <Grid
          xs={12}
          md={0}
          justify="center"
          css={{
            h: "100%",
          }}
        >
          <Image
            objectFit={"contain"}
            width={"60%"}
            showSkeleton
            maxDelay={200}
            src="/landing2.png"
            alt="langing"
          />
        </Grid>
      </Grid.Container>
      <div
        style={{
          opacity: "10%",
          width: "80%",
          borderTop: "2px solid #ffffff",
          borderRadius: "1px",
        }}
      ></div>
    </Container>
  );
}

export default LandingPage;

function serviceList(services: string[]) {
  return (
    <>
      {services.map((service) => {
        return (
          <Row align="center" key={service}>
            <Text
              className="material-symbols-rounded"
              weight="extrabold"
              css={{
                mr: "$5",
                lineHeight: "normal",
                textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
                height: "fit-content",
              }}
            >
              check_circle
            </Text>
            <Text
              h6
              weight="thin"
              transform="uppercase"
              css={{
                fontFamily: "$secondary",
              }}
            >
              {service}
            </Text>
          </Row>
        );
      })}
    </>
  );
}

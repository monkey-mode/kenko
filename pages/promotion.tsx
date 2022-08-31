import { Card, Container, Text } from "@nextui-org/react";
import type { NextPage } from "next";

const Promotion: NextPage = () => {
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
      <Text
        h1
        weight="bold"
        css={{
          textGradient: "$gradient",
          fontFamily: "$primary",
        }}
      >
        Our Promotion
      </Text>
      <Card css={{ w: "70%", mb: "$10" }}>
        <Card.Image
          src="/Promotion.png"
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card>
    </Container>
  );
};

export default Promotion;

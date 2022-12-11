import { Container, Text } from "@nextui-org/react";
import type { NextPage } from "next";

import dynamic from "next/dynamic";

const CollapseMenmu = dynamic(() => import("../components/CollapseMenu"), {
  ssr: false,
});


const Services: NextPage = () => {

  return (
    <Container
      sm
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
        Our Services
      </Text>
      <CollapseMenmu/>
    </Container>
  );
};

export default Services;

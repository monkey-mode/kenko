import { Card, Col, Row, Grid, Text, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { SubServiceType } from "../types";

type Props = {
  image: string;
  serviceName: string;
};

export const ServiceCard = ({ image, serviceName }: Props) => (
  <Card css={{ w: "100%", h: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Our service
        </Text>
        <Text h3 color="white">
          {serviceName}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={image}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    {/* <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        bottom: 0,
        zIndex: 1,
      }}
    >

    </Card.Footer> */}
  </Card>
);

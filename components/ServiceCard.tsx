import { Card, Col, Row, Grid, Text, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { SubServiceType } from "../types";

type Props = {
  image: string;
  serviceName: string;
  subService: SubServiceType[];
};

export const ServiceCard = ({ image, serviceName, subService }: Props) => (
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
    <Card.Footer
      className="serviceCard"
      isBlurred
      css={{
        height: "100%",
        position: "absolute",
        bgBlur: "#0f111466",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Grid.Container gap={3}>
        {subService.map((service, index) => {
          return (
            <Grid key={index}>
              <Link color={"text"} block href="#" css={{ p: "$0" }}>
                <Text color="#d1d1d1" size={15}>
                  {service.th}/
                </Text>
                <Text color="#d1d1d1" size={15}>
                  {service.en}
                </Text>
              </Link>
            </Grid>
          );
        })}
      </Grid.Container>
    </Card.Footer>
  </Card>
);

import { Card, Col, Text } from "@nextui-org/react";

type Props = {
  image: string;
  serviceName?: string;
  des?: string;
};

export const ServiceCard = ({ image, serviceName, des }: Props) => (
  <Card css={{ w: "100%", h: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          {des}
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
  </Card>
);

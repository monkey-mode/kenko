import {
  Button,
  Card,
  Checkbox,
  Col,
  Container,
  Grid,
  Image,
  Row,
  Table,
  Text,
} from "@nextui-org/react";
import { columns, rows, servicesList } from "../consts";
import { ServiceType } from "../types";

function MassagePage() {
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
      <Text h1 transform="uppercase" css={{ letterSpacing: "0.2rem" }}>
        massage menu
      </Text>
      <Grid.Container justify="center" alignContent="stretch" gap={2}>
        {servicesList[2].subService.map((service, index) => {
          return (
            <Grid
              key={index}
              justify="center"
              alignItems="center"
              xs={12}
              sm={6}
              md={4}
            >
              <Card css={{ w: "500px", h: "600px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="black"
                    >
                      {service.th}
                    </Text>
                    <Text h3 color="black">
                      {service.en}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src="/massage-menu/balm-massage.jpg"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Table
                        aria-label="Example table with dynamic content"
                        css={{
                          height: "auto",
                          minWidth: "100%",
                        }}
                      >
                        <Table.Header columns={columns}>
                          {(column) => (
                            <Table.Column key={column.key}>
                              {column.label}
                            </Table.Column>
                          )}
                        </Table.Header>
                        <Table.Body items={rows}>
                          {(item) => (
                            <Table.Row key={item.key}>
                              {(columnKey) => (
                                <Table.Cell>{item[columnKey]}</Table.Cell>
                              )}
                            </Table.Row>
                          )}
                        </Table.Body>
                      </Table>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
}

export default MassagePage;

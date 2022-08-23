import { Button, Card, Container, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import PageLogo from "./PageLogo";

function Headers() {
  return (
    <Card.Footer
      css={{
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container lg>
        <Row justify="space-between">
          <Row align="center" css={{ width: "fit-content" }}>
            <Link href="/">
              <PageLogo />
            </Link>

            <Link href="/backoffice">
              <Button light color="primary" auto>
                <Text h6 weight={"normal"}>
                  HOME
                </Text>
              </Button>
            </Link>
            <Link href="/proposal">
              <Button light color="primary" auto>
                <Text h6 weight={"normal"}>
                  ABOUT US
                </Text>
              </Button>
            </Link>
            <Link href="/proposal">
              <Button light color="primary" auto>
                <Text h6 weight={"normal"}>
                  PRODUCT
                </Text>
              </Button>
            </Link>
            <Link href="/proposal">
              <Button light color="primary" auto>
                <Text h6 weight={"normal"}>
                  CONTRACT
                </Text>
              </Button>
            </Link>
          </Row>
          <Button light color="primary" auto>
            Primary
          </Button>
        </Row>
      </Container>
    </Card.Footer>
  );
}

export default Headers;

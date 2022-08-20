import { Container, Card, Text, Button, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

function Headers() {
  return (
    <Card.Footer
      css={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container lg>
        <Row justify="space-between">
          <Row align="baseline" css={{ width: "fit-content" }}>
            <Text
              h1
              size={60}
              css={{
                textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
              }}
              weight="bold"
            >
              <span
                className="material-symbols-rounded"
                style={{ fontSize: "3rem" }}
              >
                face
              </span>
            </Text>

            <Link href="/backoffice">
              <a>
                <Button light color="primary" auto>
                  <Text h5>Home</Text>
                </Button>
              </a>
            </Link>
            <Link href="/proposal">
              <a>
                <Button light color="primary" auto>
                  <Text h5>About us</Text>
                </Button>
              </a>
            </Link>
            <Link href="/proposal">
              <a>
                <Button light color="primary" auto>
                  <Text h5>Product</Text>
                </Button>
              </a>
            </Link>
            <Link href="/proposal">
              <a>
                <Button light color="primary" auto>
                  <Text h5>Contract</Text>
                </Button>
              </a>
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

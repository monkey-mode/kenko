import { Container, Card, Text, Button, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

function Home() {
  return (
    <Card.Footer
      isBlurred
      css={{
        position: "sticky",
        bgBlur: "#ffffff66", //isDark ? "#0f111466" : "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        top: 0,
        zIndex: 100,
      }}
    >
      <Container sm>
        <Row justify="space-between">
          <Row align="baseline" css={{ width: "fit-content" }}>
            <Link href="/">
              <a>
                <Button shadow color="gradient" auto>
                  <Text h4>KENKO</Text>
                </Button>
              </a>
            </Link>
            <Link href="/backoffice">
              <a>
                <Button light color="primary" auto>
                  <Text h5>Approve</Text>
                </Button>
              </a>
            </Link>
            {" | "}
            <Link href="/proposal">
              <a>
                <Button light color="primary" auto>
                  <Text h5>Proposal</Text>
                </Button>
              </a>
            </Link>
          </Row>
        </Row>
      </Container>
    </Card.Footer>
  );
}

export default Home;

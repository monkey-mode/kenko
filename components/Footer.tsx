import { Container, Card, Text, Button, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

function Footer() {
  return (
    <Container
      fluid
      css={{ background: "$gradientBackGround", height: "300px" }}
    >
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
  );
}

export default Footer;

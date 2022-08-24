import { Button, Card, Container, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import PageLogo from "./PageLogo";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function Headers() {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    scrollY.onChange((latest) => {
      setScroll(latest);
    });
  }, []);

  const getBackGround = () => {
    return scroll > 80 ? "saturate(180%) blur(10px)" : "";
  };
  return (
    <Card.Footer
      css={{
        backdropFilter: getBackGround(),
        position: "fixed",
        top: 0,
        zIndex: 900,
        borderRadius: 0,
      }}
    >
      <Container lg>
        <Row justify="space-between">
          <Link href="/">
            <a>
              <PageLogo />
            </a>
          </Link>

          <Row align="center" css={{ width: "fit-content" }}>
            <Link href="/backoffice">
              <Button light auto>
                <Text
                  h6
                  css={{
                    textGradient: "$gradient",
                  }}
                  weight={"normal"}
                >
                  HOME
                </Text>
              </Button>
            </Link>
            <Link href="/proposal">
              <Button light auto>
                <Text
                  h6
                  css={{
                    textGradient: "$gradient",
                  }}
                  weight={"normal"}
                >
                  ABOUT US
                </Text>
              </Button>
            </Link>
            <Link href="/proposal">
              <Button light auto>
                <Text
                  h6
                  css={{
                    textGradient: "$gradient",
                  }}
                  weight={"normal"}
                >
                  PRODUCT
                </Text>
              </Button>
            </Link>
            <Link href="/proposal">
              <Button light auto>
                <Text
                  h6
                  css={{
                    textGradient: "$gradient",
                  }}
                  weight={"normal"}
                >
                  CONTRACT
                </Text>
              </Button>
            </Link>
          </Row>
          <Button light auto>
            <span className="material-symbols-rounded">list</span>
          </Button>
        </Row>
      </Container>
    </Card.Footer>
  );
}

export default Headers;

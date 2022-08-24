import { Card, Text } from "@nextui-org/react";
import { Logo } from "../assets/logo";

function PageLogo() {
  return (
    <Card isPressable variant={"flat"} css={{ background: "transparent" }}>
      <Card.Body css={{ p: "0" }}>
        <div style={{ display: "flex" }}>
          <Logo fill={"#ffffff"} height={"60px"} width={"60px"} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              h4
              weight={"normal"}
              css={{
                textGradient: "$gradient",
                fontFamily: "$primary",
                letterSpacing: "0.5rem",
              }}
            >
              KENKO
            </Text>
            <Text
              weight={"light"}
              size={"0.8rem"}
              css={{
                textGradient: "$gradient",
                fontFamily: "$secondary",
                letterSpacing: "0.2rem",
              }}
            >
              BEAUTY & MASSAGE
            </Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PageLogo;

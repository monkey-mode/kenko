import { Card, Link, Text } from "@nextui-org/react";
import { Logo } from "../assets/logo";

function PageLogo() {
  return (
    <Link href="/">
      <Card isPressable variant={"flat"} css={{ background: "transparent" }}>
        <Card.Body css={{ p: "0" }}>
          <div style={{ display: "flex" }}>
            <Logo
              fill={"#ffffff"}
              height={"60px"}
              width={"60px"}
              withBg={false}
              bg={""}
            />

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
                  textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
                  fontFamily: "$primary",
                  letterSpacing: "0.5rem",
                }}
              >
                KENKO
              </Text>
              <Text
                weight={"bold"}
                size={"0.8rem"}
                css={{
                  textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
                  letterSpacing: "0.2rem",
                }}
              >
                BEAUTY & MASSAGE
              </Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default PageLogo;

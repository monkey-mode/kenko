import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Divider, Grid, Row, Text } from "@nextui-org/react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { faSquareFacebook, faLine } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import PageLogo from "./PageLogo";

function Footer() {
  return (
    <Container
      css={{
        background: "$colors$secondary",
        width: "100%",
        maxW: "100%",
        h: "fit-content",
        p: "$0",
        m: "$0",
      }}
    >
      <Grid.Container
        justify="center"
        gap={3}
        css={{ p: "$0", m: "$0", maxW: "100%" }}
      >
        <Grid>
          <PageLogo />
        </Grid>
        <Grid>
          <Text h5 weight={"extrabold"} css={{ textGradient: "$gradient" }}>
            Contracts
          </Text>
          <Link href={"https://www.facebook.com/kenkothonglor"}>
            <Text className="contract" h6 weight={"medium"}>
              <FontAwesomeIcon icon={faSquareFacebook} /> Kenko Beauty & Massage
            </Text>
          </Link>
          <Link href={"https://line.me/ti/p/%40kenkothonglor"}>
            <Text className="contract" h6 weight={"medium"}>
              <FontAwesomeIcon icon={faLine} /> @kenkothonglor
            </Text>
          </Link>
          <Link href={"tel:0926573779"}>
            <Text className="contract" h6 weight={"medium"}>
              <FontAwesomeIcon icon={faPhone} /> 092-657-3779
            </Text>
          </Link>
        </Grid>
        <Grid>
          <Text h5 weight={"extrabold"} css={{ textGradient: "$gradient" }}>
            Address
          </Text>
          <Text h6 weight={"medium"} css={{ maxW: "200px" }}>
            58/2 58/2 ซ. สุขุมวิท 55 แขวง คลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร
            10110
          </Text>
        </Grid>

        <Grid xs={12} justify={"center"}>
          <Text h6 css={{ fontFamily: "$secondary" }}>
            Copyright ©2022 All rights reserved | Kenko Beauty & Massage
          </Text>
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default Footer;

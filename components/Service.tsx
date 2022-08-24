import {
  Avatar,
  Checkbox,
  Container,
  Grid,
  Image,
  Row,
  Text,
} from "@nextui-org/react";
import { useMediaQuery } from "../hooks/useMediaQuery";

function Service() {
  const isMd = useMediaQuery(960);
  return (
    <Container
      fluid
      direction="column"
      justify="center"
      alignContent="center"
      alignItems="center"
      css={{
        background: "#042F14",
        display: "flex",
      }}
    >
      <Grid.Container md justify="center" gap={4}>
        <Grid xs={12} md={3} alignItems="center" direction="column">
          <Avatar
            src="/services/FacialTreatments.jpg"
            css={{ size: isMd ? "$32" : "$72" }}
          />
          <Text h5 transform="uppercase" weight={"normal"}>
            Facail Treatment
          </Text>
        </Grid>
        <Grid xs={12} md={3} alignItems="center" direction="column">
          <Avatar
            src="/services/BodyScrub.jpg"
            css={{ size: isMd ? "$32" : "$72" }}
          />
          <Text h5 transform="uppercase" weight={"normal"}>
            Body Scrub
          </Text>
        </Grid>
        <Grid xs={12} md={3} alignItems="center" direction="column">
          <Avatar
            src="/services/Wax.jpg"
            css={{ size: isMd ? "$32" : "$72" }}
          />
          <Text h5 transform="uppercase" weight={"normal"}>
            PHILOSHOPHY
          </Text>
        </Grid>
        <Grid xs={12} md={3} alignItems="center" direction="column">
          <Avatar
            src="/services/Massage.jpg"
            css={{ size: isMd ? "$32" : "$72" }}
          />
          <Text h5 transform="uppercase" weight={"normal"}>
            Massage
          </Text>
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default Service;

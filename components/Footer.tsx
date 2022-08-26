import { Container, Card, Text, Button, Row, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import PageLogo from "./PageLogo";

function Footer() {
  return (
    <Container
      fluid
      direction="column"
      justify="center"
      alignContent="center"
      alignItems="center"
      css={{
        background: "$colors",
        display: "flex",
        h: "fit-content",
        p: "$0",
      }}
    >
      <Grid.Container lg justify="center" gap={4}>
        <Grid>
          <PageLogo />
          <img src="https://img.icons8.com/color/48/FFFFFF/facebook.png" />
          <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
        </Grid>
        <Grid>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d968.9726474170778!2d100.57843883552442!3d13.725073300282753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fa937568dd1%3A0x3eeb0c9aaaccd032!2sIZAKAYA%20KOKORO%20(Thonglor)!5e0!3m2!1sth!2sth!4v1661525393578!5m2!1sth!2sth"
            width="300"
            height="300"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
        <Grid></Grid>
      </Grid.Container>
    </Container>
  );
}

export default Footer;

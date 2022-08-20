/* eslint-disable react/no-unescaped-entities */
import { Container, Card, Text, Button, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

function LandingPage() {
  return (
    <Container
      fluid
      direction="column"
      justify="center"
      alignContent="center"
      css={{
        height: "100vh",
        background: "#042F14",
        display: "flex",
        padding: 0,
      }}
    >
      <Container lg>
        <Grid.Container gap={2} lg justify="center" alignContent="center">
          <Grid xs={12} md={6} justify="center">
            <Text
              h1
              weight="bold"
              css={{ textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C" }}
            >
              The essence of healt & vitality in one place
            </Text>
          </Grid>
          <Grid xs={12} md={6} justify="center">
            <Text
              h1
              size={60}
              css={{
                textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
              }}
              weight="bold"
            >
              Let's Make the Web Prettier
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </Container>
  );
}

export default LandingPage;

import { faLine, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Link, Text } from "@nextui-org/react";
import type { NextPage } from "next";

const Contracts: NextPage = () => {
  return (
    <Container
      fluid
      direction="column"
      justify="center"
      alignContent="center"
      alignItems="center"
      css={{
        height: "fit-content",
        display: "flex",
        padding: 0,
      }}
    >
      <Text
        h1
        weight="bold"
        css={{
          textGradient: "$gradient",
          fontFamily: "$primary",
        }}
      >
        Our Contracts
      </Text>
      <Card css={{ w: "70%", h: "500px", mb: "$10" }}>
        <Card.Header
          css={{
            justifyContent: "space-around",
            background: "$secondary",
          }}
        >
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
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.1698442199853!2d100.57717075001165!3d13.72414388509259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d01d010fec4c2bc!2sKenko%20beauty%20%26%20massage!5e0!3m2!1sth!2sth!4v1661883876349!5m2!1sth!2sth"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contracts;

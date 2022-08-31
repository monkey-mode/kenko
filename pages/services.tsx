import {
  Card,
  Collapse,
  Container,
  Grid,
  Row,
  Text,
  Image,
} from "@nextui-org/react";
import type { NextPage } from "next";
import { useState } from "react";
import MenuHeader from "../components/MenuHeader";
import {
  bodyCareService,
  massageService,
  massageService2,
  waxService,
} from "../consts";
import { faSpa, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services: NextPage = () => {
  const [mssageImg, setMassageImg] = useState<string>(massageService[0].img);
  const [mssageImg2, setMassageImg2] = useState<string>(massageService2[0].img);
  const [massageHl, setMassageHl] = useState<number>(0);
  const [massageHl2, setMassageHl2] = useState<number>(0);

  const [waxHl, setWaxHl] = useState<number>(0);
  const [bodyHl, setBodyHl] = useState<number>(0);

  return (
    <Container
      sm
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
      <Grid.Container gap={2}>
        <Grid xs={12} sm={6} justify={"flex-end"}>
          <Card css={{ w: "100%", h: "100%" }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={mssageImg}
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} direction={"column"}>
          <MenuHeader text="massage menu" />
          <Collapse.Group>
            {massageService.map((service, index) => {
              return (
                <Collapse
                  showArrow={false}
                  key={index}
                  expanded={index == 0 ? true : false}
                  onChange={(e, index, value) => {
                    if (index) {
                      setMassageHl(index - 1);
                    }
                    setMassageImg(service.img);
                  }}
                  title={
                    <Row
                      justify="space-between"
                      css={{
                        background:
                          massageHl == index ? "$secondary" : "transparent",
                        borderRadius: "$xl",
                        px: massageHl == index ? "$10" : "$0",
                      }}
                    >
                      <Text
                        h6
                        transform="uppercase"
                        className="menuheader"
                        css={{
                          color: `${massageHl == index ? "$primaryGold" : ""}`,
                        }}
                      >
                        {service.en}
                      </Text>
                      <FontAwesomeIcon
                        style={{
                          color: `${massageHl == index ? "#E0AA3E" : ""}`,
                        }}
                        icon={faSpa}
                      />
                    </Row>
                  }
                  subtitle={
                    <Text small css={{ color: "$accents8" }}>
                      {service.th}
                    </Text>
                  }
                >
                  <>
                    <Text
                      size={12}
                      css={{
                        fontFamily: "$secondary",
                        lineHeight: "normal",
                      }}
                    >
                      {service.desc}
                    </Text>
                    <Row justify="flex-end">
                      <Text
                        key={index}
                        weight={"extrabold"}
                        h6
                        css={{
                          letterSpacing: "1px",
                          fontFamily: "$secondary",
                          textGradient: "$gradient",
                        }}
                      >
                        {service.price.map((data, index) => {
                          return `${data.period} ${data.price}${" "}
                          ${service.price.length - 1 == index ? "" : "/ "}
                          `;
                        })}
                      </Text>
                    </Row>
                  </>
                </Collapse>
              );
            })}
          </Collapse.Group>
        </Grid>

        <Grid xs={12} sm={6} direction={"column"}>
          <MenuHeader text="massage menu" />
          <Collapse.Group>
            {massageService2.map((service, index) => {
              return (
                <Collapse
                  showArrow={false}
                  key={index}
                  expanded={index == 0 ? true : false}
                  onChange={(e, index, value) => {
                    if (index) {
                      setMassageHl2(index - 1);
                    }
                    setMassageImg2(service.img);
                  }}
                  title={
                    <Row
                      justify="space-between"
                      css={{
                        background:
                          massageHl2 == index ? "$secondary" : "transparent",
                        borderRadius: "$xl",
                        px: massageHl2 == index ? "$10" : "$0",
                      }}
                    >
                      <Text
                        h6
                        transform="uppercase"
                        className="menuheader"
                        css={{
                          color: `${massageHl2 == index ? "$primaryGold" : ""}`,
                        }}
                      >
                        {service.en}
                      </Text>
                      <FontAwesomeIcon
                        style={{
                          color: `${massageHl2 == index ? "#E0AA3E" : ""}`,
                        }}
                        icon={faSpa}
                      />
                    </Row>
                  }
                  subtitle={
                    <Text small css={{ color: "$accents8" }}>
                      {service.th}
                    </Text>
                  }
                >
                  <>
                    <Text
                      size={12}
                      css={{
                        fontFamily: "$secondary",
                        lineHeight: "normal",
                      }}
                    >
                      {service.desc}
                    </Text>
                    <Row justify="flex-end">
                      <Text
                        key={index}
                        weight={"extrabold"}
                        h6
                        css={{
                          letterSpacing: "1px",
                          fontFamily: "$secondary",
                          textGradient: "$gradient",
                        }}
                      >
                        {service.price.map((data, index) => {
                          return `${data.period} ${data.price}${" "}
                          ${service.price.length - 1 == index ? "" : "/ "}
                          `;
                        })}
                      </Text>
                    </Row>
                  </>
                </Collapse>
              );
            })}
          </Collapse.Group>
        </Grid>
        <Grid xs={12} sm={6} justify={"flex-end"}>
          <Card css={{ w: "100%", h: "100%" }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={mssageImg2}
                objectFit="cover"
                width="100%"
                height="100%"
                alt="Relaxing app background"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} direction={"column"}>
          <MenuHeader text="wax menu" />
          <Collapse.Group>
            {waxService.map((service, index) => {
              return (
                <Collapse
                  // contentLeft={
                  //   <Image src={service.icon ?? ""} alt={service.en} />
                  // }
                  expanded={index == 0 ? true : false}
                  showArrow={false}
                  key={index}
                  onChange={(e, index, value) => {
                    if (index) {
                      setWaxHl(index - 1);
                    }
                  }}
                  title={
                    <Row
                      justify="space-between"
                      css={{
                        background:
                          waxHl == index ? "$secondary" : "transparent",
                        borderRadius: "$xl",
                        px: waxHl == index ? "$10" : "$0",
                      }}
                    >
                      <Text
                        h6
                        transform="uppercase"
                        className="menuheader"
                        css={{
                          color: `${waxHl == index ? "$primaryGold" : ""}`,
                        }}
                      >
                        {service.en}
                      </Text>
                      <FontAwesomeIcon
                        style={{
                          color: `${waxHl == index ? "#E0AA3E" : ""}`,
                        }}
                        icon={faSpa}
                      />

                      {/* <Text
                        key={index}
                        weight={"extrabold"}
                        css={{
                          fontFamily: "$secondary",
                          color: "$colors$primaryGold",
                        }}
                      >
                        {service.price[0].price}
                      </Text> */}
                    </Row>
                  }
                  subtitle={
                    <Text small css={{ color: "$accents8" }}>
                      {service.th}
                    </Text>
                  }
                >
                  <Card css={{ w: "100%", h: "300px" }} variant={"flat"}>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={service.img}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt="Relaxing app background"
                      />
                    </Card.Body>
                    <Card.Footer
                      css={{
                        justifyContent: "flex-end",
                        background: "$secondary",
                      }}
                    >
                      <Text
                        key={index}
                        weight={"extrabold"}
                        h6
                        css={{
                          letterSpacing: "1px",
                          fontFamily: "$secondary",
                          textGradient: "$gradient",
                        }}
                      >
                        {service.price[0].price}
                      </Text>
                    </Card.Footer>
                  </Card>
                </Collapse>
              );
            })}
          </Collapse.Group>
        </Grid>
        <Grid xs={12} sm={6} direction={"column"}>
          <MenuHeader text="body care treatment menu" />
          <Collapse.Group>
            {bodyCareService.map((service, index) => {
              return (
                <Collapse
                  // contentLeft={
                  //   <Image src={service.icon ?? ""} alt={service.en} />
                  // }
                  expanded={index == 0 ? true : false}
                  showArrow={false}
                  key={index}
                  onChange={(e, index, value) => {
                    if (index) {
                      setBodyHl(index - 1);
                    }
                  }}
                  title={
                    <Row
                      justify="space-between"
                      css={{
                        background:
                          bodyHl == index ? "$secondary" : "transparent",
                        borderRadius: "$xl",
                        px: bodyHl == index ? "$10" : "$0",
                      }}
                    >
                      <Text
                        h6
                        transform="uppercase"
                        className="menuheader"
                        css={{
                          color: `${bodyHl == index ? "$primaryGold" : ""}`,
                        }}
                      >
                        {service.en}
                      </Text>
                      <FontAwesomeIcon
                        style={{
                          color: `${bodyHl == index ? "#E0AA3E" : ""}`,
                          marginLeft: "1rem",
                        }}
                        icon={faSpa}
                      />
                    </Row>
                  }
                  subtitle={
                    <Text small css={{ color: "$accents8" }}>
                      {service.th}
                    </Text>
                  }
                >
                  <Card css={{ w: "100%", h: "300px" }} variant={"flat"}>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={service.img}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt="Relaxing app background"
                      />
                    </Card.Body>
                    <Card.Footer
                      css={{
                        justifyContent: "flex-end",
                        background: "$secondary",
                      }}
                    >
                      <Text
                        key={index}
                        weight={"extrabold"}
                        h6
                        css={{
                          letterSpacing: "1px",
                          fontFamily: "$secondary",
                          textGradient: "$gradient",
                        }}
                      >
                        {service.price[0].price}
                      </Text>
                    </Card.Footer>
                  </Card>
                </Collapse>
              );
            })}
          </Collapse.Group>
          {/* <MenuHeader text="parafin menu" />
          <Collapse.Group>
            {bodyCareService.map((service, index) => {
              return (
                <Collapse
                  // contentLeft={
                  //   <Image src={service.icon ?? ""} alt={service.en} />
                  // }
                  expanded={index == 0 ? true : false}
                  showArrow={false}
                  key={index}
                  onChange={(e, index, value) => {
                    if (index) {
                      setBodyHl(index - 1);
                    }
                  }}
                  title={
                    <Row
                      justify="space-between"
                      css={{
                        background:
                          bodyHl == index ? "$secondary" : "transparent",
                        borderRadius: "$xl",
                        px: bodyHl == index ? "$10" : "$0",
                      }}
                    >
                      <Text
                        h6
                        transform="uppercase"
                        className="menuheader"
                        css={{
                          color: `${bodyHl == index ? "$primaryGold" : ""}`,
                        }}
                      >
                        {service.en}
                      </Text>
                      <FontAwesomeIcon
                        style={{
                          color: `${bodyHl == index ? "#E0AA3E" : ""}`,
                          marginLeft: "1rem",
                        }}
                        icon={faSpa}
                      />
                    </Row>
                  }
                  subtitle={
                    <Text small css={{ color: "$accents8" }}>
                      {service.th}
                    </Text>
                  }
                >
                  <Card css={{ w: "100%", h: "300px" }} variant={"flat"}>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={service.img}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        alt="Relaxing app background"
                      />
                    </Card.Body>
                    <Card.Footer
                      css={{
                        justifyContent: "flex-end",
                        background: "$secondary",
                      }}
                    >
                      <Text
                        key={index}
                        weight={"extrabold"}
                        h6
                        css={{
                          letterSpacing: "1px",
                          fontFamily: "$secondary",
                          textGradient: "$gradient",
                        }}
                      >
                        {service.price[0].price}
                      </Text>
                    </Card.Footer>
                  </Card>
                </Collapse>
              );
            })}
          </Collapse.Group> */}
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Services;

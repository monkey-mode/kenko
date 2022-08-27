import {
  Button,
  Card,
  Col,
  Collapse,
  Container,
  Grid,
  Image,
  Row,
  Text,
} from "@nextui-org/react";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ServiceCard } from "../components/ServiceCard";

import { massageService, servicesList, waxService } from "../consts";
import { useState } from "react";
import { Logo } from "../assets/logo";
import MenuHeader from "../components/MenuHeader";

function WebService() {
  const isLg = useMediaQuery(1280);

  const [mssageImg, setMassageImg] = useState<string>(massageService[0].img);
  const [waxImg, setWaxImg] = useState<string>(waxService[0].img);

  const [waxHl, setWaxHl] = useState<number>(0);

  return (
    <Container
      fluid
      css={{
        background: "$secondary",
        p: "$0",
        m: "$0",
        height: "auto",
      }}
    >
      <Container lg>
        <Grid.Container gap={2} css={{ position: "relative" }}>
          {/*massage menu*/}
          <Grid xs={12} md={6} direction={"column"}>
            <MenuHeader text="massage menu" />
            <Collapse.Group>
              {massageService.map((service, index) => {
                return (
                  <Collapse
                    key={index}
                    expanded={index == 0 ? true : false}
                    onChange={() => {
                      setMassageImg(service.img);
                    }}
                    title={
                      <Row justify="space-between">
                        <Text
                          h5
                          transform="uppercase"
                          css={{ letterSpacing: "0.2rem" }}
                        >
                          {service.en}
                        </Text>
                      </Row>
                    }
                    subtitle={service.th}
                  >
                    <>
                      <Card css={{ w: "100%", h: "300px" }}>
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
                      <Text
                        blockquote
                        css={{
                          background: "$primary",
                          fontFamily: "$secondary",
                        }}
                      >
                        {service.desc}
                      </Text>
                      {service.price.map((data, index) => {
                        return (
                          <Row justify="flex-end" key={index}>
                            <Text
                              weight={"extrabold"}
                              css={{
                                fontFamily: "$secondary",
                                color: "$colors$primaryGold",
                              }}
                            >
                              {data.period}
                            </Text>
                            <Text
                              weight={"extrabold"}
                              css={{
                                fontFamily: "$secondary",
                                color: "$colors$primaryGold",
                                ml: "$10",
                              }}
                            >
                              {data.price}
                            </Text>
                          </Row>
                        );
                      })}
                    </>
                  </Collapse>
                );
              })}
            </Collapse.Group>
          </Grid>
          {/*wax menu*/}
          <Grid xs={12} md={6} direction={"column"}>
            <MenuHeader text="wax menu" />
            <Collapse.Group>
              {waxService.map((service, index) => {
                return (
                  <Collapse
                    contentLeft={
                      <Image src={service.icon ?? ""} alt={service.en} />
                    }
                    expanded={index == 0 ? true : false}
                    showArrow={false}
                    key={index}
                    onChange={(e, index, value) => {
                      if (index) {
                        setWaxHl(index - 1);
                      }
                      setWaxImg(service.img);
                    }}
                    title={
                      <Row justify="space-between">
                        <Text
                          h5
                          transform="uppercase"
                          css={{ letterSpacing: "0.2rem" }}
                        >
                          {service.en}
                        </Text>

                        <Text
                          key={index}
                          weight={"extrabold"}
                          css={{
                            fontFamily: "$secondary",
                            color: "$colors$primaryGold",
                          }}
                        >
                          {service.price[0].price}
                        </Text>
                      </Row>
                    }
                    subtitle={service.th}
                  >
                    <Card css={{ w: "100%", h: "300px" }}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={service.img}
                          objectFit="cover"
                          width="100%"
                          height="100%"
                          alt="Relaxing app background"
                        />
                      </Card.Body>
                    </Card>
                  </Collapse>
                );
              })}
            </Collapse.Group>
          </Grid>
          <Grid xs={12} md={6}>
            <Card css={{ w: "100%", h: "600px" }}>
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
          <Grid xs={12} md={6} direction={"column"}>
            <Text
              h5
              transform="uppercase"
              css={{ letterSpacing: "0.2rem", fontFamily: "$primary" }}
            >
              massage menu
            </Text>
            <Collapse.Group>
              {massageService.map((service, index) => {
                return (
                  <Collapse
                    key={index}
                    expanded={index == 0 ? true : false}
                    onChange={() => {
                      setMassageImg(service.img);
                    }}
                    title={
                      <Text
                        h5
                        transform="uppercase"
                        css={{ letterSpacing: "0.2rem" }}
                      >
                        {service.en}
                      </Text>
                    }
                    subtitle={service.th}
                  >
                    <>
                      <Text
                        css={{
                          fontFamily: "$secondary",
                        }}
                      >
                        {service.desc}
                      </Text>
                      {service.price.map((data, index) => {
                        return (
                          <Row justify="flex-end" key={index}>
                            <Text
                              weight={"extrabold"}
                              css={{
                                fontFamily: "$secondary",
                                color: "$colors$primaryGold",
                              }}
                            >
                              {data.period}
                            </Text>
                            <Text
                              weight={"extrabold"}
                              css={{
                                fontFamily: "$secondary",
                                color: "$colors$primaryGold",
                                ml: "$10",
                              }}
                            >
                              {data.price}
                            </Text>
                          </Row>
                        );
                      })}
                    </>
                  </Collapse>
                );
              })}
            </Collapse.Group>
          </Grid>

          {/* <Grid
            xs={12}
            css={{
              position: "absolute",
              left: "50%",
              top: "652px",
              zIndex: 100,
              p: "$0",
            }}
          >
            <Logo
              fill={""}
              height={"200px"}
              width={"200px"}
              withBg={true}
              bg={"#302922"}
            />
          </Grid> */}
          {/* <Grid xs={12} md={6} direction={"column"}>
            <MenuHeader text="wax menu" />
            <Collapse.Group>
              {waxService.map((service, index) => {
                return (
                  <Collapse
                    expanded={index == 0 ? true : false}
                    showArrow={false}
                    key={index}
                    onChange={(e, index, value) => {
                      if (index) {
                        setWaxHl(index - 1);
                      }
                      setWaxImg(service.img);
                    }}
                    title={
                      <Row
                        // css={{
                        //   background: waxHl == index ? "black" : "transparent",
                        //   borderRadius: "$xl",
                        //   px: "$10",
                        // }}
                        justify="space-between"
                      >
                        <Text
                          h5
                          transform="uppercase"
                          css={{ letterSpacing: "0.2rem" }}
                        >
                          {service.en}
                        </Text>

                        <Text
                          key={index}
                          weight={"extrabold"}
                          css={{
                            fontFamily: "$secondary",
                            color: "$colors$primaryGold",
                          }}
                        >
                          {service.price[0].price}
                        </Text>
                      </Row>
                    }
                    subtitle={service.th}
                  >
                    <Card css={{ w: "100%", h: "300px" }}>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={service.img}
                          objectFit="cover"
                          width="100%"
                          height="100%"
                          alt="Relaxing app background"
                        />
                      </Card.Body>
                    </Card>
                  </Collapse>
                );
              })}
            </Collapse.Group>
          </Grid> */}
        </Grid.Container>
      </Container>
    </Container>
  );
}

export default WebService;

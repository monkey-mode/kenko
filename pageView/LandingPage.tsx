import { Container, Grid, Image, Row, Text } from "@nextui-org/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ServiceCard } from "../components/ServiceCard";
import { landingList } from "../consts";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ServiceType } from "../types";

function LandingPage() {
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
      <Grid.Container
        justify="center"
        alignContent="stretch"
        css={{ h: "100%" }}
      >
        <Grid justify="center" alignContent="stretch" alignItems="center">
          <Container xs justify="flex-end" css={{ zIndex: 100 }}>
            <Text
              h1
              weight="bold"
              css={{
                textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
                fontFamily: "$primary",
              }}
            >
              About us
            </Text>
            <Text
              weight="normal"
              blockquote
              css={{
                fontFamily: "$primary",
                background: "$secondary",
              }}
            >
              {`Happiness is the goal for everyone. To have a wonderful life, it
              comes from healthy body combining with healthy mind. Preme Spa
              aims to this concept and truly believe that body and mind are one
              and they are the key foundations for wellness - and that's what
              our treatments are all about. We hope our variety of special
              treatments and services by qualified therapists bring you the most
              pleasant relaxing experience, and happiness - because your
              contentment is our inspiration`}
            </Text>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[Autoplay, EffectCoverflow, Navigation]}
              className="mySwiper"
            >
              {landingList.map((service, index) => (
                <SwiperSlide key={index}>
                  <ServiceCard image={service.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </Grid>
        <Grid
          xs={0}
          md={6}
          justify="center"
          css={{
            h: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Image
            objectFit={"scale-down"}
            showSkeleton
            maxDelay={200}
            src="/landing.png"
            alt="langing"
          />
        </Grid>
        <Grid
          xs={12}
          md={0}
          justify="center"
          css={{
            h: "100%",
          }}
        >
          <Image
            objectFit={"contain"}
            width={"60%"}
            showSkeleton
            maxDelay={200}
            src="/landing2.png"
            alt="langing"
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default LandingPage;

function serviceList(services: ServiceType[]) {
  return (
    <>
      {services.map((service) => {
        return (
          <Row align="center" key={service.name}>
            <Text
              className="material-symbols-rounded"
              weight="extrabold"
              css={{
                mr: "$5",
                lineHeight: "normal",
                textGradient: "to right, #BF953F,  #FCF6BA,  #AA771C",
                height: "fit-content",
              }}
            >
              check_circle
            </Text>
            <Text
              h6
              weight="thin"
              transform="uppercase"
              css={{
                fontFamily: "$secondary",
              }}
            >
              {service.name}
            </Text>
          </Row>
        );
      })}
    </>
  );
}

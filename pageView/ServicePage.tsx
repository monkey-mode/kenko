import { Container, Grid } from "@nextui-org/react";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ServiceCard } from "../components/ServiceCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { servicesList } from "../consts";

function Service() {
  const isLg = useMediaQuery(1280);
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
        p: "$0",
      }}
    >
      <Grid.Container md justify="center" gap={4}>
        {/* <Grid xs={12} md={3} alignItems="center" direction="column">
          <Avatar
            zoomed
            src="/services/FacialTreatments.jpg"
            css={{ size: isMd ? "$32" : "$72" }}
          />
          <Text h5 transform="uppercase" weight={"normal"}>
            Facail Treatment
          </Text>
        </Grid>
        <Grid xs={12} md={3} alignItems="center" direction="column">
          <Avatar
            zoomed
            src="/services/BodyScrub.jpg"
            css={{ size: isMd ? "$32" : "$72" }}
          />
          <Text h5 transform="uppercase" weight={"normal"}>
            Body Scrub
          </Text>
        </Grid>
        <Grid xs={12} md={3} alignItems="center" direction="column">
          <Avatar
            zoomed
            src="/services/Wax.jpg"
            css={{ size: isMd ? "$32" : "$72" }}
          />
          <Text h5 transform="uppercase" weight={"normal"}>
            PHILOSHOPHY
          </Text>
        </Grid>
        <Grid xs={12} md={3} alignItems="center" direction="column">
          <Avatar
            zoomed
            src="/services/Massage.jpg"
            css={{ size: isMd ? "$32" : "$72" }}
          />
          <Text h5 transform="uppercase" weight={"normal"}>
            Massage
          </Text>
        </Grid> */}
        <Grid xs={12}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={isLg ? 1 : 2}
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
            modules={[Autoplay, EffectCoverflow]}
            className="mySwiper"
          >
            {servicesList.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard
                  image={service.image}
                  serviceName={service.name}
                  subService={service.subService}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid.Container>
    </Container>
  );
}

export default Service;

// function CreateServiceList() {
//   const list =

//   return list;
// }

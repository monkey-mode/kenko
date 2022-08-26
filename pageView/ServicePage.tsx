import { Container, Grid } from "@nextui-org/react";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ServiceCard } from "../components/ServiceCard";

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
        background: "#3A2503",
        display: "flex",
        p: "$0",
      }}
    >
      <Grid.Container md justify="center" gap={4}>
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
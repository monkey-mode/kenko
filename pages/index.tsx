import { Card, Grid, Text, Button, Image } from "@nextui-org/react";
import type { NextPage } from "next";
import Footer from "../components/Footer";

type Props = {
  text: string;
};

const Home: NextPage = () => {
  const MockItem = ({ text }: Props) => {
    return (
      // <Card css={{ h: "$24", $$cardColor: "$colors$primary" }}>
      //   <Card.Body>
      //     <Text h6 size={15} color="white" css={{ mt: 0 }}>
      //       {text}
      //     </Text>
      //     <Button color="gradient" auto>
      //       Gradient
      //     </Button>

      //   </Card.Body>
      // </Card>
      <Image
        // loader={myLoader}
        objectFit="cover"
        src="/beauty-spa.jpg"
        alt="Picture of the author"
      />
    );
  };
  return (
    <>
      <Image
        // loader={myLoader}
        src="/beauty-spa.jpg"
        alt="Picture of the author"
      />
      <Image
        // loader={myLoader}
        src="/beauty-spa2.jpg"
        alt="Picture of the author"
      />
      <Image
        // loader={myLoader}
        src="/beauty-spa3.jpg"
        alt="Picture of the author"
      />
      <Footer />
    </>

    // <Grid.Container gap={1} justify="center">
    //   <Grid xs={0} md={3}>
    //     <MockItem text="1 of 3" />
    //   </Grid>
    //   <Grid xs={12} md={6}>
    //     <MockItem text="2 of 3" />
    //   </Grid>
    //   <Grid xs={0} md={3}>
    //     <MockItem text="3 of 3" />
    //   </Grid>
    // </Grid.Container>
  );
};

export default Home;

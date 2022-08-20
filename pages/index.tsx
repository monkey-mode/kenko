import { Image } from "@nextui-org/react";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    <>
      <LandingPage />
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
  );
};

export default Home;

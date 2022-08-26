import { Image } from "@nextui-org/react";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "../pageView/LandingPage";
import MassagePage from "../pageView/MassagePage";
import Service from "../pageView/ServicePage";

const Home: NextPage = () => {
  return (
    <div>
      <LandingPage />
      <Service />
      <MassagePage />
    </div>
  );
};

export default Home;

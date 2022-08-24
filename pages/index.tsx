import { Image } from "@nextui-org/react";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Service from "../components/Service";

const Home: NextPage = () => {
  return (
    <div>
      <LandingPage />
      <Service />
    </div>
  );
};

export default Home;

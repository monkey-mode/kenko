import type { NextPage } from "next";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import LandingPage from "../pageView/LandingPage";
import MassagePage from "../pageView/MassagePage";
import Service from "../pageView/ServicePage";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <LandingPage />
      <Divider />
      <Service />
      <Divider />
      <MassagePage />
      <Divider />
      <Footer />
    </div>
  );
};

export default Home;

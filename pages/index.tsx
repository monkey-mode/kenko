import type { NextPage } from "next";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import LandingPage from "../pageView/LandingPage";
import MassagePage from "../pageView/MassagePage";
import Service from "../pageView/ServicePage";
import WebService from "../pageView/WebService";

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
      <Service />
      {/* <MassagePage />
      <Divider /> */}
      <WebService />
      <Footer />
    </div>
  );
};

export default Home;

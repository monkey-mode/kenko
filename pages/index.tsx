import type { NextPage } from "next";
import LandingPage from "../pageView/LandingPage";
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
      <Service />
    </div>
  );
};

export default Home;

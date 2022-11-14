import type { NextPage } from "next";
import Header from "../components/header/header";
import Map from "../components/map/map";
import Sidebar from "../components/sidebar/sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
};

export default Home;

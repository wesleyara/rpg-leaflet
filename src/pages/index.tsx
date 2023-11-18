import type { NextPage } from "next";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("../leaflet/LeafletMap"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <LeafletMap />
    </>
  );
};

export default Home;

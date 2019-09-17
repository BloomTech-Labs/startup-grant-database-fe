import React from "react";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <GrantList />
        <GrantShowcase />
        <Filters />
      </div>
    </>
  );
};

export default Home;

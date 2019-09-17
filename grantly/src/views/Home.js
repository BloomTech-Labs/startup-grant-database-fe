import React from "react";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";

const Home = () => {
  return (
    <div>
      <GrantList />
      <GrantShowcase />
      <Filters />
    </div>
  );
};

export default Home;

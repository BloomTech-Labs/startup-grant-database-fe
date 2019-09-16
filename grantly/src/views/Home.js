import React from "react";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";

const Home = () => {
  return (
    <div>
      <GrantList />
      {/* Grant Showcase component*/}
      <Filters />
    </div>
  );
};

export default Home;

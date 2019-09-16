import React from "react";
import GrantList from "./grants/GrantList";
import Filters from "./Filters";

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

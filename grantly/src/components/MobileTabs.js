import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GrantList from "./grants/GrantList"

const MobileTabs = () => {
  const [tab, setTab] = useState(0);
  const tabs = ["Home", "Bookmarked", "Account"];
  const index = 0;

  const toRender = () => {
    if(tab === 0){
      return <GrantList />
    } else{
      return <h1>Testing</h1>
    }
  }
  const TabPanel = () => {
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={tab !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
      >
        <Box p={3}>{toRender()}</Box>
      </Typography>
    );
  };
  const changeTab = (event, value) => {
    console.log("Change", value);
    setTab(value);
  };

  const handleChangeIndex = index => {
    setTab(index);
  };

  return (
    <div>
      <Tabs
        value={tab}
        onChange={changeTab}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        {/* {tabs.map(tab => (
          <Tab tabel={tab} key={tab} />
        ))} */}
        <Tab label={tabs[0]} />
        <Tab label={tabs[1]} />
        <Tab label={tabs[2]} />
      </Tabs>

      <SwipeableViews index={tab} onChangeIndex={handleChangeIndex}>
        <TabPanel value={tab} index={0}>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={tab} index={2}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default MobileTabs;

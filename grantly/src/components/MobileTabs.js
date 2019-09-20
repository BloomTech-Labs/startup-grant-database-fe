import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";

import GrantList from "./grants/GrantList";

// const useStyles = makeStyles(theme => ({
//   root: {
//     color: "#3DB8B3"
//   }
// }));
// const MobileTabs = () => {
// const [tab, setTab] = useState(0);
// const [index, setIndex] = useState(0);
// const tabs = ["Home", "Bookmarked", "Account"];

// useEffect
// const classes = useStyles();

// const toRender = () => {
//   if (tab === index) {
//     console.log("render")
//     return<h1>Test</h1>;
//   } else if(tab === 1){
//     console.log("else if")

//     return <h1>Testing</h1>;
//   }
// };
// const TabPanel = () => {
//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={tab !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//     >
//       <Box p={3}>{toRender()}</Box>
//     </Typography>
//   );
// };
// const changeTab = (event, value) => {
//   setTab(value);
//   setIndex(value);
//   console.log("changeTab", value, index)
// };

// const handleChangeIndex = index => {
//   console.log("index", index)
//   setTab(index);
//   setIndex(index)
// };

// return (
//   <div>
//     <Tabs
//       value={tab}
//       onChange={changeTab}
//       indicatorColor="primary"
//       textColor="primary"
//       variant="fullWidth"
//       aria-label="full width tabs example"
//     >
//       {/* {tabs.map(tab => (
//         <Tab tabel={tab} key={tab} />
//       ))} */}
//       <Tab label={tabs[0]} className={classes.root} />
//       <Tab label={tabs[1]} className={classes.root} />
//       <Tab label={tabs[2]} className={classes.root} />
//     </Tabs>

//     <SwipeableViews index={tab} onChangeIndex={handleChangeIndex}>
//       <TabPanel value={tab} index={0}></TabPanel>
//       <TabPanel value={tab} index={1}></TabPanel>
//       <TabPanel value={tab} index={2}></TabPanel>
//     </SwipeableViews>
//   </div>
//);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));
const MobileTabs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Grants" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <GrantList />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}><h1>Hello</h1></TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Si
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default MobileTabs;

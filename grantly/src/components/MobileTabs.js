import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const MobileTabs = () => {
    const [tab, setTab] = useState(0)
    const tabs = ["Home", "Bookmarked", "Account"]
    const value = 0;
    const index = 0;
    const TabPanel = () => {
      return (
        <Typography
          component="div"
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
        >
          <Box p={3}>{tabs}</Box>
        </Typography>
      );
    }
    const changeTab = value => {
        setTab(value);
    }
    
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
          <Tab label="Item One"  />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
 
                  <SwipeableViews>
                  <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} >
          Item Three
        </TabPanel>
                  </SwipeableViews>
            
        </div>
    );
};

export default MobileTabs;
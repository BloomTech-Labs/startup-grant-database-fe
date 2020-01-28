import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeTab } from "../../actions/index";
// import { useAuth0 } from "../../react-auth0-wrapper.js";

// Style imports
import { mobileTabStyles } from "../../styles/mobileTabStyles";
import { useTheme } from "@material-ui/core/styles";
// import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";

// components
import GrantList from "../grants/GrantList";
import GrantShowcase from "../grants/GrantShowcase";
import SubmitForm from "../SubmitForm";
import FavoriteList from "../grants/FavoritesList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  // const { isAuthenticated } = useAuth0();
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

const MobileTabs = ({
  grant,
  currentTab,
  changeTab,
  history,
  favorites,
  inFavorite,
  currentUser,
  inGrants
}) => {
  const style = mobileTabStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    handleChangeIndex(currentTab);
  }, [currentTab]);

  function handleChange(event, newValue) {
    setValue(newValue);
    changeTab(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
    changeTab(index);
  }

  return (
    <div className={style.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={style.tab} label="Grants" {...a11yProps(0)} />
          <Tab className={style.tab} label="Showcase" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
      <TabPanel value={value} index={0} dir={theme.direction}>
        {inFavorite ? (
          <FavoriteList
            infavorite={inFavorite}
            favorites={favorites}
            currentUser={currentUser}
          />
        ) : (
          <GrantList grant={grant} currentUser={currentUser} />
        )}
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        {inFavorite ? (
          <GrantShowcase
            inFavorite={inFavorite}
            currentUser={currentUser}
            grant={grant}
            history={history}
          />
        ) : (
          <GrantShowcase
            inGrants={inGrants}
            currentUser={currentUser}
            grant={grant}
          />
          // )}
        )}
        {/* <GrantShowcase
            inFavorite={inFavorite}
            inGrants={inGrants}
            favorites={grant}
            grant={grant}
            currentUser={currentUser}
          /> */}
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}>
        <SubmitForm history={history} />
      </TabPanel>
      {/* </SwipeableViews> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    grant: state.grantShowcase,
    currentTab: state.currentTab
  };
};
export default connect(mapStateToProps, { changeTab })(MobileTabs);

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterGrants, saveFilters } from "../actions/index";

const useStylesGrants = makeStyles(theme => ({
  filterCard: {
    display: "block"
  },
  title: {
    fontWeight: "bold",
    marginTop: "1em",
    color: "#464646"
  },
  label: {
    alignSelf: "flex-start",
    textAlign: "left",
    fontSize: "1.2rem",
    color: "#464646",
    fontWeight: "bold"
  },
  set: {
    width: "60%",
    alignSelf: "center",
    margin: ".8em"
  },
  landingButton: {
    display: "none"
  }
}));

const useStylesLanding = makeStyles(theme => ({
  title: {
    marginBottom: "15px",
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px",
      paddingRight: "10px"
    }
  },
  card: {
    marginRight: "2rem",
    padding: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderRadius: 0
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      paddingTop: "20px",
      flexGrow: 2
    }
  },
  set: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "20%",
      margin: "10px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      alignItems: "center",
      alignContent: "center"
    }
  },
  label: {
    marginBottom: "20px",
    fontSize: "1.4rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left"
    }
  },
  filterCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "20px",
      "& fieldset:nth-child(2)": {
        display: "none"
      },
      "& fieldset:nth-child(3)": {
        display: "none"
      }
    }
  },
  landingButton: {
    textDecoration: "none",
    "& button": {
      marginTop: "45px",
      color: "white",
      fontFamily: "Roboto",
      [theme.breakpoints.down("xs")]: {
        marginTop: "10px",
        marginBottom: "20px"
      }
    }
  }
}));

const Filters = props => {
  const [filters, setFilters] = useState({
    geographic_region: [],
    amount: [],
    domain_areas: []
  });

  //Makes sure that the current state is being sent to the action creator
  useEffect(() => {
    if (props.location === "/") {
      props.saveFilters(filters);
    } else {
      // props.filterGrants(props.savedFilters);
      props.saveFilters(filters);
    }
  }, [filters]);

  useEffect(() => {
    props.filterGrants(props.savedFilters);
    // props.saveFilters(filters)
  }, [props.savedFilters]);

  // useEffect(() => {
  //   props.filterGrants(filters);
  // }, [filters]);

  const grantFilters = {
    color: "primary",
    geographic_region: [
      "Global",
      "North America",
      "Europe",
      "South America",
      "Africa"
    ],
    amount: ["Under $1,000", "$1,000-$5,000", "$5,000-$10,000", "$10,000+"],
    domain_areas: ["Tech", "Agriculture", "Social", "Energy"]
  };

  const handleChanges = (type, value) => {
    if (filters[type].includes(value.toLowerCase())) {
      setFilters({
        ...filters,
        [type]: filters[type].filter(
          val => val.toLowerCase() !== value.toLowerCase()
        )
      });
    } else {
      setFilters({
        ...filters,
        [type]: [...filters[type], value.toLowerCase()]
      });
    }

    //Pass object of user filters to the action creator
  };

  // Logic to determine styles to use depending on current location of component -PJ
  const grantStyles = useStylesGrants();
  const landingStyles = useStylesLanding();
  let classes;
  props.location === "/grants"
    ? (classes = grantStyles)
    : (classes = landingStyles);

  return (
    <Card className={classes.card}>
      <Typography className={classes.title} variant="h5" component="h2">
        {props.location === "/"
          ? "Which grants would you like to find?"
          : "Filter grants by:"}
      </Typography>
      <FormGroup className={classes.filterCard}>
        <FormControl className={classes.set} component="fieldset">
          <FormLabel className={classes.label} component="legend">
            Grant Amount
          </FormLabel>
          {grantFilters.amount.map(name => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.amount.includes(name.toLowerCase())}
                    value={name}
                    color={grantFilters.color}
                    onClick={() => handleChanges("amount", name)}
                  />
                }
                key={name}
                label={name}
              />
            );
          })}
        </FormControl>

        <FormControl className={classes.set} component="fieldset">
          <FormLabel className={classes.label} component="legend">
            Region
          </FormLabel>
          {grantFilters.geographic_region.map(name => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.geographic_region.includes(
                      name.toLowerCase()
                    )}
                    value={name}
                    color={grantFilters.color}
                    onClick={() => handleChanges("geographic_region", name)}
                  />
                }
                key={name}
                label={name}
              />
            );
          })}
        </FormControl>

        <FormControl className={classes.set} component="fieldset">
          <FormLabel className={classes.label} component="legend">
            Focus Areas
          </FormLabel>
          {grantFilters.domain_areas.map(name => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.domain_areas.includes(name.toLowerCase())}
                    value={name}
                    color={grantFilters.color}
                    onClick={() => handleChanges("domain_areas", name)}
                  />
                }
                key={name}
                label={name}
              />
            );
          })}
        </FormControl>
      </FormGroup>
      <Link to="/grants" className={classes.landingButton}>
        <Button variant="contained" color="primary" size="large">
          Find Grants
        </Button>
      </Link>
    </Card>
  );
};
const mapStateToProps = state => {
  return {
    grants: state.filteredGrants,
    savedFilters: state.filters
  };
};
export default connect(
  mapStateToProps,
  { filterGrants, saveFilters }
)(Filters);

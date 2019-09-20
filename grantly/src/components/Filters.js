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
import { filterGrants } from "../actions/index";

const useStylesGrants = makeStyles(theme => ({
  card: {
    position: "fixed",
    marginTop: "3em"
  },
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
    marginBottom: "35px",
    fontSize: "2rem"
  },
  card: {
    marginRight: "2rem",
    padding: "30px"
  },
  label: {
    marginBottom: "20px",
    fontSize: "1.4rem"
  },
  filterCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  landingButton: {
    textDecoration: "none",
    "& button": {
      marginTop: "45px",
      color: "white",
      fontFamily: "Roboto"
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
    props.filterGrants(filters);
  }, [filters]);

  const grantFilters = {
    color: "primary",
    geographic_region: [
      "Global",
      "North America",
      "Europe",
      "South America",
      "Africa"
    ],
    amount: ["Under $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000+"],
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

export default connect(
  null,
  { filterGrants }
)(Filters);

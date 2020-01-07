import React, { useState, useEffect } from "react";
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
import { filterGrants, saveFilters, fetchApi } from "../actions/index";
import {
  useStylesGrants,
  useStylesLanding,
  useStylesMobile
} from "../styles/filterStyles";

const Filters = ({
  saveFilters,
  filterGrants,
  savedFilters,
  location,
  inAdmin,
  mobile,
  grants,
  fetchApi,
  ogGrants,
  isFetching,
  inFavorite
}) => {
  const [filters, setFilters] = useState({
    amount: [],
    geographic_region: [],
    domain_areas: [],
    admin_filters: []
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    saveFilters(filters);
  }, [filters]);

  useEffect(() => {
    if (ogGrants.length === 0) {
      fetchApi();
    }
    if (
      location == "/grants" ||
      location == "/admin" ||
      location == "/favorites"
    ) {
      filterGrants(savedFilters);
    }
  }, [savedFilters]);

  console.log("fil", savedFilters);

  const grantFilters = {
    color: "primary",
    geographic_region: [
      "Global",
      "North America",
      "Europe",
      "South America",
      "Africa",
      "Asia",
      "Australia",
      "Other"
    ],
    amount: ["Under $1,000", "$1,000-$5,000", "$5,000-$10,000", "$10,000+"],
    domain_areas: ["Tech", "Agriculture", "Social", "Energy"],
    admin_filters: ["New", "Expired", "Suggestions"]
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
  };

  const grantStyles = useStylesGrants();
  const landingStyles = useStylesLanding();
  const mobileStyles = useStylesMobile();

  let classes;
  if (mobile) {
    classes = mobileStyles;
  } else if (location == "/") {
    classes = landingStyles;
  } else {
    classes = grantStyles;
  }

  return (
    <Card className={classes.card}>
      <Typography className={classes.title} variant="h5" component="h2">
        {location === "/"
          ? "Which grants would you like to find?"
          : "Filter grants by:"}
      </Typography>
      <FormGroup className={classes.filterCard}>
        {inAdmin && (
          <FormControl className={classes.set} component="fieldset">
            <FormLabel className={classes.label} component="legend">
              View grant by
            </FormLabel>
            {grantFilters.admin_filters.map(name => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={savedFilters.admin_filters.includes(
                        name.toLowerCase()
                      )}
                      value={name}
                      color={grantFilters.color}
                      onClick={() => handleChanges("admin_filters", name)}
                    />
                  }
                  key={name}
                  label={name}
                  label={
                    name === "New" ? (
                      <span>
                        New (
                        {
                          ogGrants.filter(grant => grant.is_reviewed === false)
                            .length
                        }
                        )
                      </span>
                    ) : (
                      name
                    )
                  }
                  // label={
                  //   name === "Expired" &&
                  //   name +
                  //     ` (${grants.filter(
                  //       grant =>
                  //         moment(
                  //           grant.most_recent_application_due_date
                  //         ).format() <= moment().format()
                  //     ).length}`
                  // }
                  // label={
                  //   name === "Suggestions" &&
                  //   name +
                  //     ` (${
                  //       grants.filter(grant => grant.is_reviewed === false)
                  //         .length
                  //     })`
                  // }

                  // label={name + `34`}
                />
              );
            })}
          </FormControl>
        )}

        <FormControl className={classes.set} component="fieldset">
          <FormLabel className={classes.label} component="legend">
            Grant Amount
          </FormLabel>
          {grantFilters.amount.map(name => {
            return (
              <FormControlLabel
                className={classes.mobileSet}
                control={
                  <Checkbox
                    checked={savedFilters.amount.includes(name.toLowerCase())}
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
                className={classes.mobileSet}
                control={
                  <Checkbox
                    checked={savedFilters.geographic_region.includes(
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
                className={classes.mobileSet}
                control={
                  <Checkbox
                    checked={savedFilters.domain_areas.includes(
                      name.toLowerCase()
                    )}
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
    savedFilters: state.filters,
    ogGrants: state.data,
    isFetching: state.isFetching
  };
};
export default connect(mapStateToProps, {
  filterGrants,
  saveFilters,
  fetchApi
})(Filters);

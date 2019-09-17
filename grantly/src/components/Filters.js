import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";

import { connect } from "react-redux";
import { filterGrants } from "../actions/index";

const Filters = ({ filterGrants }) => {
  const [filters, setFilters] = useState({
    geographic_region: [],
    amount: [],
    area_focus: [],
    domain_areas: []
  });

  //Makes sure that the current state is being sent to the action creator
  useEffect(() => {
    filterGrants(filters);
  }, [filters])

  const grantFilters = {
    color: "secondary",
    geographic_region: ["Global", "North America", "Europe", "South America", "Africa"],
    amount: ["Under $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000+"],
    area_focus: ["Business", "Technology", "Science", "Creative", "Random"],
    domain_areas: ["Environment", "Conservation", "Water", "Engery"]
  };

  const handleChanges = (type, value) => {

    if(filters[type].includes(value)){
        console.log("Its there")
        setFilters({
            ...filters,
            [type]: filters[type].filter(val => val.toLowerCase() !== value.toLowerCase())
        })
    } else {
        console.log("it's not here")
        setFilters({
            ...filters,
            [type]:  [...filters[type], value.toLowerCase()]
        })
    }

    //Pass object of user filters to the action creator
  };
  console.log("render", filters);
  return (
    <div>
      <h2>Filter Grants By:</h2>

      <FormGroup >
        <FormControl component="fieldset">
          <FormLabel component="legend">Grant Amount</FormLabel>
          {grantFilters.amount.map(name => {
            return (
              <FormControlLabel
                control={<Checkbox value={name} color={grantFilters.color} onClick={() => handleChanges("amount", name)}/>}
                key={name}
                label={name}
              />
            );
          })}
        </FormControl>

        <FormControl component="fieldset" >
          <FormLabel component="legend">Area Focus</FormLabel>
          {grantFilters.area_focus.map(name => {
            return (
              <FormControlLabel
                control={<Checkbox value={name} color={grantFilters.color} onClick={() => handleChanges("area_focus", name)}/>}
                key={name}
                label={name}
              />
            );
          })}
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Region</FormLabel>
          {grantFilters.geographic_region.map(name => {
            return (
              <FormControlLabel
                control={<Checkbox value={name} color={grantFilters.color} onClick={() => handleChanges("geographic_region", name)}/>}
                key={name}
                label={name}
              />
            );
          })}
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Domain Areas</FormLabel>
          {grantFilters.domain_areas.map(name => {
            return (
              <FormControlLabel
                control={<Checkbox value={name} color={grantFilters.color} onClick={() => handleChanges("domain_areas", name)}/>}
                key={name}
                label={name}
              />
            );
          })}
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default connect(
  null,
  { filterGrants }
)(Filters);

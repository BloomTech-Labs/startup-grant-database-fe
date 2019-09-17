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
    region: [],
    amount: [],
    area_focus: []
  });

  const handleChanges = e => {
    console.log("who", e.target.name);
    if (!e.target.checked) {
      setFilters({
        ...filters
      });
    } else {
      setFilters({
        ...filters,
        [e.target.name]: e.target.value
      });
    }
    console.log("List", filters);
  };
  return (
    <div>
      <h2>Filter Grants By:</h2>

      <form>
        <FormControl component="fieldset">
          <FormLabel component="legend">Grant Amount</FormLabel>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Under $1,000"
          />{" "}
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="$1,000-$5,000"
          />
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="$5,000-$10,000"
          />
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="$10,000+"
          />
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Area Focus</FormLabel>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Technology"
          />{" "}
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Education"
          />
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Science"
          />
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Creative"
          />
        </FormControl>

        <FormControl component="fieldset">
          <FormLabel component="legend">Area Focus</FormLabel>
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Global"
          />{" "}
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="North America"
          />
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Europe"
          />
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="South America"
          />
          <FormControlLabel
            control={<Checkbox value="checkedB" color="primary" />}
            label="Africa"
          />
        </FormControl>




        <fieldset>
          <legend>Minority</legend>
          <input
            type="checkbox"
            name="women"
            id="women"
            onChange={handleChanges}
          />
          <label htmlFor="women">Women</label>
          <input
            type="checkbox"
            name="african-american"
            id="african-american"
            onChange={handleChanges}
          />
          <label htmlFor="african-american">African American</label>
          <input
            type="checkbox"
            name="hispanic"
            id="hispanic"
            onChange={handleChanges}
          />
          <label htmlFor="hispanic">Hispanic</label>
          <input
            type="checkbox"
            name="other"
            id="other"
            onChange={handleChanges}
          />
          <label htmlFor="other">Other</label>
        </fieldset>
      </form>
    </div>
  );
};

export default connect(
  null,
  { filterGrants }
)(Filters);

import React, { useState } from "react";
import { connect } from "react-redux";
import { filterGrants } from "../actions/index";

const Filters = ({ filterGrants }) => {
  const [filters, setFilters] = useState([]);

  const filterTheGrants = e => {
    e.preventDefault();
    console.log("filters", e);
  };

  const handleChanges = e => {
      if (!e.target.checked) {
          setFilters([...filters, e.target.name]);
        } else {
            setFilters(filters.filter(filterList => filterList !== e.target.name));
        }
        console.log("List", filters);
  };
  return (
    <div>
      <h2>Filter Grants By:</h2>

      <form onChange={filterTheGrants}>
        <fieldset>
          <legend>Grant Amount</legend>
          <input type="checkbox" namne="under1k" id="under1k" onChange={handleChanges} />
          <label htmlFor="under1k">Under $1,000</label>
          <input type="checkbox" namne="1kto5k" id="1kto5k" onChange={handleChanges}/>
          <label htmlFor="1kto5k">$1,000-$5,000</label>
          <input type="checkbox" namne="5kto10k" id="5kto10k" onChange={handleChanges}/>
          <label htmlFor="5kto10k">$5,000-$10,000</label>
          <input type="checkbox" namne="over10k" id="over10k" onChange={handleChanges}/>
          <label htmlFor="over10k">$10,000+</label>
        </fieldset>

        <fieldset>
          <legend>Business Type</legend>
          <input type="checkbox" name="technology" id="technology" onChange={handleChanges}/>
          <label htmlFor="technology">Technology</label>
          <input type="checkbox" name="education" id="education" onChange={handleChanges}/>
          <label htmlFor="education">Education</label>
          <input type="checkbox" name="science" id="science" onChange={handleChanges}/>
          <label htmlFor="science">Science</label>
          <input type="checkbox" name="creative" id="creative" onChange={handleChanges}/>
          <label htmlFor="creative">Creative</label>
        </fieldset>

        <fieldset>
          <legend>Region</legend>
          <input type="checkbox" name="Global" id="global" onChange={handleChanges}/>
          <label htmlFor="global">Global</label>
          <input type="checkbox" name="northamerica" id="northamerica" onChange={handleChanges}/>
          <label htmlFor="northamerica">North America</label>
          <input type="checkbox" name="europe" id="europe" onChange={handleChanges}/>
          <label htmlFor="europe">Europe</label>
          <input type="checkbox" name="southamerica" id="southamerica" onChange={handleChanges}/>
          <label htmlFor="southamerica">South America</label>
          <input type="checkbox" name="africa" id="africa" onChange={handleChanges}/>
          <label htmlFor="africa">Africa</label>
        </fieldset>
        {/* <fieldset>
            <legend>Gender</legend>
            <input type="checkbox" name="male" id="male" />
            <label htmlFor="male">Male</label>
            <input type="checkbox" name="female" id="female" />
            <label hhtmlFor="female">Female</label>
        </fieldset> */}

        <fieldset>
          <legend>Minority</legend>
          <input type="checkbox" name="women" id="women" onChange={handleChanges}/>
          <label htmlFor="women">Women</label>
          <input
            type="checkbox"
            name="african-american"
            id="african-american"
            onChange={handleChanges}
          />
          <label htmlFor="african-american">African American</label>
          <input type="checkbox" name="hispanic" id="hispanic" onChange={handleChanges}/>
          <label htmlFor="hispanic">Hispanic</label>
          <input type="checkbox" name="other" id="other" onChange={handleChanges}/>
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

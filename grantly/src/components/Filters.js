import React from "react";

const Filters = () => {
  return (
    <div>
      <h2>Filter Grants By:</h2>

      <form>
        <fieldset>
            <legend>Grant Amount</legend>
          <input type="checkbox" namne="under1k" id="under1k"/>
          <label htmlFor="under1k">Under $1,000</label>
          <input type="checkbox" namne="1kto5k" id="1kto5k"/>
          <label htmlFor="1kto5k">$1,000-$5,000</label>
          <input type="checkbox" namne="5kto10k" id="5kto10k"/>
          <label htmlFor="5kto10k">$5,000-$10,000</label>
          <input type="checkbox" namne="over10k" id="over10k"/>
          <label htmlFor="over10k">$10,000+</label>
        </fieldset>

        <fieldset>
            <legend>Business Type</legend>
            <input type="checkbox" name="technology" id="technology" />
            <label htmlFor="technology">Technology</label>
            <input type="checkbox" name="education" id="education" />
            <label htmlFor="education">Education</label>
            <input type="checkbox" name="science" id="science" />
            <label htmlFor="science">Science</label>
            <input type="checkbox" name="creative" id="creative" />
            <label htmlFor="creative">Creative</label>
        </fieldset>

        <fieldset>
            <legend>Region</legend>
            <input type="checkbox" name="global" id="global" />
            <label htmlFor="global">Global</label>
            <input type="checkbox" name="northamerica" id="northamerica" />
            <label hhtmlFor="northamerica">North America</label>
            <input type="checkbox" name="europe" id="europe" />
            <label hhtmlFor="europe">Europe</label>
            <input type="checkbox" name="southamerica" id="southamerica" />
            <label hhtmlFor="southamerica">South America</label>
            <input type="checkbox" name="africa" id="africa" />
            <label hhtmlFor="africa">Africa</label>
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
            <input type="checkbox" name="women" id="women"/>
            <label htmlFor="women">Women</label>
            <input type="checkbox" name="african-american" id="african-american"/>
            <label htmlFor="african-american">African American</label>
            <input type="checkbox" name="hispanic" id="hispanic"/>
            <label htmlFor="hispanic">Hispanic</label>
            <input type="checkbox" name="other" id="other"/>
            <label htmlFor="other">Other</label>
        </fieldset>
      </form>
    </div>
  );
};

export default Filters;

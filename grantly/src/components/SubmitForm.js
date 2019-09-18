import React, { useState } from "react";
// import { connect } from "react-redux";
// import { addGrant } from "../actions";

const AddGrant = props => {
  const [grantInfo, setGrantInfo] = useState({
    competition_name: "",
    type: "",
    area_focus: "",
    sponsoring_entity: "",
    website: "",
    most_recent_application_due_date: "",
    amount: "",
    amount_notes: "",
    geographic_region: "",
    domain_areas: "",
    target_entrepreneur_demographic: "",
    notes: "",
    early_stage_funding: "",
    details_last_updated: ""
  });

  const handleChanges = event => {
    event.preventDefault();
    setGrantInfo({
      ...grantInfo,
      [event.target.name]: event.target.value
    });
  };

  const submitGrant = event => {
    console.log("SubmitForm.js submitGrant", event);
    event.preventDefault();
    props.addGrant({ ...grantInfo });
    setGrantInfo({
      competition_name: "",
      type: "",
      area_focus: "",
      sponsoring_entity: "",
      website: "",
      most_recent_application_due_date: "",
      amount: "",
      amount_notes: "",
      geographic_region: "",
      domain_areas: "",
      target_entrepreneur_demographic: "",
      notes: "",
      early_stage_funding: "",
      details_last_updated: ""
    });
  };

  return (
    <div>
      <h1>Submit a Grantly Grant</h1>
      <form onSubmit={submitGrant}>
        <label>
          Competition Name
          <input
            type="text"
            name="competition_name"
            placeholder="Competition Name"
            value={grantInfo.competition_name}
            onChange={handleChanges}
          />
        </label>
        <label>
          Type
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={grantInfo.type}
            onChange={handleChanges}
          />
        </label>
        <label>
          Area Focus
          <input
            type="text"
            name="area_focus"
            placeholder="Area Focus"
            value={grantInfo.area_focus}
            onChange={handleChanges}
          />
        </label>
        <label>
          Sponsoring Entity
          <input
            type="text"
            name="sponsoring_entity"
            placeholder="Sponsoring Entity"
            value={grantInfo.sponsoring_entity}
            onChange={handleChanges}
          />
        </label>
        <label>
          Website
          <input
            type="url"
            name="website"
            placeholder="Website"
            value={grantInfo.website}
            onChange={handleChanges}
          />
        </label>
        <label>
          Application Due Date
          <input
            type="date"
            name="most_recent_application_due_date"
            placeholder="Application Due Date"
            value={grantInfo.most_recent_application_due_date}
            onChange={handleChanges}
          />
        </label>
        <label>
          Amount
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={grantInfo.amount}
            onChange={handleChanges}
          />
        </label>
        <label>
          Amount Notes
          <input
            type="text"
            name="amount_notes"
            placeholder="Amount Notes"
            value={grantInfo.amount_notes}
            onChange={handleChanges}
          />
        </label>
        <label>
          Geographic Region
          <input
            type="text"
            name="geographic_region"
            placeholder="Geographic Region"
            value={grantInfo.geographic_region}
            onChange={handleChanges}
          />
        </label>
        <label>
          Domain Areas
          <input
            type="text"
            name="domain_areas"
            placeholder="Domain Areas"
            value={grantInfo.domain_areas}
            onChange={handleChanges}
          />
        </label>
        <label>
          Target Entrepreneur Demographic
          <input
            type="text"
            name="target_entrepreneur_demographic"
            placeholder="Target Entrepreneur Demographic"
            value={grantInfo.target_entrepreneur_demographic}
            onChange={handleChanges}
          />
        </label>
        <label>
          Notes
          <input
            type="text"
            name="notes"
            placeholder="Notes"
            value={grantInfo.notes}
            onChange={handleChanges}
          />
        </label>
        <label>
          Early Stage Funding
          <input
            type="radio"
            name="early_stage_funding"
            placeholder="Early Stage Funding"
            value={grantInfo.early_stage_funding}
            onChange={handleChanges}
          />
        </label>
        <label>
          Details Last Updated
          <input
            type="text"
            name="details_last_updated"
            placeholder="Details Last Updated"
            value={grantInfo.details_last_updated}
            onChange={handleChanges}
          />
        </label>
      </form>
    </div>
  );
  //   const mapStateToProps = ({grantData, isFetching, error}) => ({
  //     grantData,
  //     isFetching,
  //     error
  //   })

  //   export default connect(
  //       mapStateToProps,
  //       {addGrant}
  //   )(AddGrant)
};
export default AddGrant;

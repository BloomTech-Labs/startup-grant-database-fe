//Dependencies
import React, { useState } from "react";
// import { connect } from "react-redux";
// import { addGrant } from "../actions";

//Objects
import formStyles from "./grants/styles/FormStyles";
import { TextField } from "@material-ui/core";

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

  const styles = formStyles();

  return (
    <div>
      <h1>Submit a Grantly Grant</h1>
      <form className={styles.formContainer} onSubmit={submitGrant}>
        <TextField
          // id="outlined-name"
          label="Competition Name"
          type="text"
          className={styles.inputText}
          name="competition_name"
          placeholder="Competition Name"
          value={grantInfo.competition_name}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Type"
          type="text"
          className={styles.inputText}
          name="type"
          placeholder="Type"
          value={grantInfo.type}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Area Focus"
          type="text"
          className={styles.inputText}
          name="area_focus"
          placeholder="Area Focus"
          value={grantInfo.area_focus}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Sponsoring Entity"
          type="text"
          className={styles.inputText}
          name="sponsoring_entity"
          placeholder="Sponsoring Entity"
          value={grantInfo.sponsoring_entity}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
        />

        <TextField
          // label="Application Due Date"
          type="date"
          className={styles.inputText}
          name="most_recent_application_due_date"
          // placeholder="Application Due Date"
          value={grantInfo.most_recent_application_due_date}
          onChange={handleChanges}
          helperText="Application Due Date"
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Amount"
          type="number"
          className={styles.inputText}
          name="amount"
          placeholder="Amount"
          value={grantInfo.amount}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Amount Notes"
          type="text"
          className={styles.inputText}
          name="amount_notes"
          fullWidth
          placeholder="Amount Notes"
          value={grantInfo.amount_notes}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="Geographic Region"
          type="text"
          className={styles.inputText}
          name="geographic_region"
          placeholder="Geographic Region"
          value={grantInfo.geographic_region}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Domain Areas"
          type="text"
          className={styles.inputText}
          name="domain_areas"
          placeholder="Domain Areas"
          value={grantInfo.domain_areas}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="Target Demographic"
          // type="text"
          className={styles.inputText}
          name="target_entrepreneur_demographic"
          placeholder="Target Entrepreneur Demographic"
          value={grantInfo.target_entrepreneur_demographic}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Notes"
          // type="text"
          className={styles.inputText}
          name="notes"
          placeholder="Notes"
          fullWidth
          value={grantInfo.notes}
          onChange={handleChanges}
          margin="normal"
          variant="outlined"
          // variant="filled"
        />
        {/* <TextField 
        label="Early Stage Funding"
          type="radio"
          className={styles.inputText}
          name="early_stage_funding"
          placeholder="Early Stage Funding"
          value={grantInfo.early_stage_funding}
          onChange={handleChanges}
        margin="normal" 
        variant="outlined" 
        /> */}
        <TextField
          // label="Details Last Updated"
          type="date"
          className={styles.inputText}
          name="details_last_updated"
          // placeholder="Details Last Updated"
          value={grantInfo.details_last_updated}
          onChange={handleChanges}
          helperText="Details Last Updated"
          margin="normal"
          variant="outlined"
        />
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

//Notes
{
  /* <label>
  Competition Name
          <input
    type="text"
    className={styles.inputText}
    name="competition_name"
    placeholder="Competition Name"
    value={grantInfo.competition_name}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Type
          <input
    type="text"
    className={styles.inputText}
    name="type"
    placeholder="Type"
    value={grantInfo.type}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Area Focus
          <input
    type="text"
    className={styles.inputText}
    name="area_focus"
    placeholder="Area Focus"
    value={grantInfo.area_focus}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Sponsoring Entity
          <input
    type="text"
    className={styles.inputText}
    name="sponsoring_entity"
    placeholder="Sponsoring Entity"
    value={grantInfo.sponsoring_entity}
    onChange={handleChanges}
  />
</label> */
}
{
  /* <label>
  Website
          <input
    type="url"
    name="website"
    className={styles.inputText}
    placeholder="Website"
    value={grantInfo.website}
    onChange={handleChanges}
  />
</label> */
}
{
  /* <label>
  Application Due Date
          <input
    type="date"
    className={styles.inputText}
    name="most_recent_application_due_date"
    placeholder="Application Due Date"
    value={grantInfo.most_recent_application_due_date}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Amount
          <input
    type="number"
    className={styles.inputText}
    name="amount"
    placeholder="Amount"
    value={grantInfo.amount}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Amount Notes
          <input
    type="text"
    className={styles.inputText}
    name="amount_notes"
    placeholder="Amount Notes"
    value={grantInfo.amount_notes}
    onChange={handleChanges}
  />
</label> */
}
{
  /* <label>
  Geographic Region
          <input
    type="text"
    className={styles.inputText}
    name="geographic_region"
    placeholder="Geographic Region"
    value={grantInfo.geographic_region}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Domain Areas
          <input
    type="text"
    className={styles.inputText}
    name="domain_areas"
    placeholder="Domain Areas"
    value={grantInfo.domain_areas}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Target Entrepreneur Demographic
          <input
    type="text"
    className={styles.inputText}
    name="target_entrepreneur_demographic"
    placeholder="Target Entrepreneur Demographic"
    value={grantInfo.target_entrepreneur_demographic}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Notes
          <input
    type="text"
    className={styles.inputText}
    name="notes"
    placeholder="Notes"
    value={grantInfo.notes}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Early Stage Funding
          <input
    type="radio"
    className={styles.inputText}
    name="early_stage_funding"
    placeholder="Early Stage Funding"
    value={grantInfo.early_stage_funding}
    onChange={handleChanges}
  />
</label> */
}

{
  /* <label>
  Details Last Updated
          <input
    type="text"
    className={styles.inputText}
    name="details_last_updated"
    placeholder="Details Last Updated"
    value={grantInfo.details_last_updated}
    onChange={handleChanges}
  />
</label> */
}

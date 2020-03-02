import React, { useContext, useState, useEffect } from "react";
import {
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ActionsContext } from "../../context/ActionsContext";
import { useSelector } from "react-redux";
import { TextFormField } from "../suggestion/formElements/TextFormField";
import { useForm } from "../../hooks/useForm";
import editFormValues from "./values/EditGrantFormValues";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  btn: {
    margin: "20px",
    padding: "0 50px"
  },
  formField: {
    width: "100%"
  },
  body: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  }
}));

const EditGrantModal = ({ grant, format, columns }) => {
  const actions = useContext(ActionsContext);
  const { token } = useSelector(state => state.user);
  const [open, setOpen] = useState(false);
  const [values, handleChange, handleSubmit, resetForm] = useForm(
    {
      competition_name: "",
      area_focus: "",
      sponsoring_entity: "",
      website: "",
      most_recent_application_due_date: "",
      amount: "",
      amount_notes: "",
      geographic_region: "",
      target_entrepreneur_demographic: "",
      notes: "",
      early_stage_funding: false,
      is_reviewed: false,
      has_requests: false,
      details_last_updated: moment().format("YYYY-MM-DD")
    },
    doSubmit
  );

  function refreshFunction() {
    actions.admin.fetchAdminGrants(token);
  }
  function doSubmit() {
    actions.grants.updateAdminGrant(token, grant.id, values);
    setTimeout(refreshFunction(), 288);
  }

  function deleteGrant(id) {
    actions.grants.deleteAdminGrant(token, id);
    setTimeout(refreshFunction(), 288);
  }

  const classes = useStyles();

  return (
    <Grid className={classes.body} spacing={2}>
      <form onSubmit={handleSubmit}>
        {editFormValues.map(data => {
          return (
            <TextFormField
              label={data.label}
              type={data.type}
              name={data.name}
              select={data.select}
              data={data.data}
              inputLabel={data.inputLabel}
              multiline={data.multiline}
              variant={data.variant}
              rows={data.rows}
              value={data.name}
              onChange={handleChange}
              className={classes.inputStyle}
            />
          );
        })}

        <Button
          color="primary"
          variant="outlined"
          type="submit"
          className={classes.btn}
        >
          Save
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          type="submit"
          className={classes.btn}
          onClick={() => deleteGrant(grant.id)}
        >
          {/* ADD CONFIRMATION MODAL */}
          Delete this Grant
        </Button>
      </form>
    </Grid>
  );
};

export default EditGrantModal;

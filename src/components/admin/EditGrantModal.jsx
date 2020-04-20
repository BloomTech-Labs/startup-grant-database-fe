import React, { useContext, useState } from "react";
import { Button, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ActionsContext } from "../../context/ActionsContext";
import { useSelector } from "react-redux";
import { TextFormField } from "../suggestion/formElements/TextFormField";
import { useForm } from "../../hooks/useForm";
import editFormValues from "./values/EditGrantFormValues";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: "20px",
    padding: "0 50px",
  },
  formField: {
    width: "100%",
  },
  body: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  inputBreak: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

const EditGrantModal = ({ grant, format, handleClose, isOpen, columns }) => {
  const actions = useContext(ActionsContext);
  const { token } = useSelector((state) => state.user);
  const [prime, setPrime] = useState(false);

  const [values, handleChange, handleSubmit, resetForm] = useForm(
    {
      competition_name: grant.competition_name || "",
      area_focus: grant.area_focus || "",
      sponsoring_entity: grant.sponsoring_entity || "",
      website: grant.website || "",
      most_recent_application_due_date:
        grant.most_recent_application_due_date || "",
      amount: grant.amount || "",
      amount_notes: grant.amount_notes || "",
      geographic_region: grant.geographic_region || "",
      target_entrepreneur_demographic:
        grant.target_entrepreneur_demographic || "",
      notes: grant.notes || "",
      early_stage_funding: grant.early_stage_funding || false,
      is_reviewed: grant.is_reviewed || false,
      details_last_updated: `${moment().format("YYYY-MM-DD")}`,
    },
    doSubmit
  );

  function refreshFunction() {
    actions.admin.fetchAdminGrants(token);
  }

  function doSubmit() {
    actions.grants.updateAdminGrant(token, grant.id, values);
    setTimeout(refreshFunction(), 1);
  }

  function deleteGrant(id) {
    actions.grants.deleteAdminGrant(token, id);
    setPrime(false);
    setTimeout(refreshFunction(), 1);
  }

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Grid className={classes.body} spacing={2}>
        {editFormValues.map((data) => {
          return (
            <Container className={classes.inputBreak}>
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
                value={values}
                handleChanges={handleChange}
                className={classes.inputStyle}
              />
            </Container>
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

        {!prime && (
          <Button
            color="secondary"
            variant="outlined"
            type="submit"
            className={classes.btn}
            onClick={() => setPrime(true)}
          >
            Delete this Grant
          </Button>
        )}
        {prime && (
          <Button
            color="secondary"
            variant="outlined"
            type="submit"
            className={classes.btn}
            onClick={() => deleteGrant(grant.id)}
          >
            Delete Forever
          </Button>
        )}
      </Grid>
    </form>
  );
};

export default EditGrantModal;

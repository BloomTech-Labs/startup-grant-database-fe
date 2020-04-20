import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserSettingsForm } from "./UserSettingsForm.js";
import { sizing } from "@material-ui/system";
import { UserData } from "./userData.js";
import { Button, Container, Avatar, Grid, Typography } from "@material-ui/core";
import { ActionsContext } from "../../context/ActionsContext";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

import green from "@material-ui/core/colors/green";

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: "2em",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
  topContent: {
    marginBottom: "1.5em",
    marginTop: "1.5em",
  },
  title: {
    fontWeight: "600",
  },
  middleContent: {
    marginTop: "1em",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
}));

const initialData = {
  first_name: "",
  last_name: "",
  role: "",
  phone: "",
  company: "",
  company_url: "",
  about: "",
};

const UserSettings = () => {
  const actions = useContext(ActionsContext);
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({});
  const { token, currentUser } = useSelector((state) => state.user);
  const styles = useStyles();
  const [values, handleChange, handleSubmit] = useForm(
    currentUser.user_metadata,
    doSubmit
  );

  useEffect(() => {
    const checkCurrentUser = async () => {
      if (!currentUser.user_metadata) {
        await actions.user.updateUser(token, initialData);
        setData(initialData);
      } else {
        setData(currentUser.user_metadata);
      }
    };
    checkCurrentUser();
  }, []);

  useEffect(() => {
    setData(currentUser.user_metadata);
  }, [currentUser.user_metadata]);

  function doSubmit() {
    setData(values);
    actions.user.updateUser(token, values);
    setIsEditing(false);
    actions.user.getUserFromAuth0(token);
  }

  console.log(currentUser);

  const btnclr = green[100];
  return (
    <React.Fragment>
      <Container xs={12} height="90%" className={styles.contain}>
        <Container className={styles.topContent}>
          <Grid xs={12}>
            <Avatar
              src={currentUser.picture}
              className={styles.avatar}
            ></Avatar>
          </Grid>

          <Grid xs={12}>
            <Container className={styles.middleContent}>
              <Grid xs={12} md={4}>
                <Typography variant="h6" className={styles.title}>
                  {currentUser.nickname}'s Profile
                </Typography>
              </Grid>

              <Grid xs={12} md={4}>
                <Button>
                  <a href="https://www.1517fund.com/take-action">Contact Us</a>
                </Button>
              </Grid>

              <Grid xs={12} md={4}>
                {!isEditing && (
                  <Button
                    variant="contained"
                    color={btnclr}
                    className={styles.editbutton}
                    onClick={() => setIsEditing(true)}
                  >
                    Make Changes
                  </Button>
                )}
              </Grid>
            </Container>
          </Grid>
        </Container>
        {!isEditing && (
          <UserData
            data={data}
            initialData={initialData}
            currentUser={currentUser}
          />
        )}

        {isEditing && (
          <>
            <UserSettingsForm
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <Button
              variant="contained"
              color={btnclr}
              className={styles.button}
              onClick={() => doSubmit()}
            >
              Save Changes
            </Button>
          </>
        )}
      </Container>
    </React.Fragment>
  );
};

export default UserSettings;

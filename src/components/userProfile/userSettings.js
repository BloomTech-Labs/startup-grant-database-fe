import React, {useContext, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {UserSettingsForm} from "./UserSettingsForm.js";
import {UserData} from "./userData.js";
import {Button, Container} from "@material-ui/core";
import {ActionsContext} from "../../context/ActionsContext";
import {makeStyles} from "@material-ui/core/styles";
import {useForm} from "../../hooks/useForm";

const useStyles = makeStyles(theme => ({
    button: {
        margin: "2em"
    },
    dataContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: theme.spacing(12)
    },

    editBtn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    contain: {
        marginTop: "2em",
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("sm")]: {
            padding: "2em",
            flexDirection: "column"
        }
        // bottom: {
        //   marginTop: theme.spacing(2),
        //   marginBottom: theme.spacing(2)
        // }
    }
}));

const initialData = {
    first_name: "",
    last_name: "",
    role: "",
    phone: "",
    company: "",
    company_url: "",
    about: ""
};

const UserSettings = () => {
    const actions = useContext(ActionsContext);
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState({});
    const {token, currentUser} = useSelector(state => state.user);
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

    return (
        <React.Fragment>
            <Container xs={12} className={styles.contain}>
                <Container maxWidth="sm" className={styles.dataContainer}>
                    <UserData
                        data={data}
                        initialData={initialData}
                        currentUser={currentUser}
                    />
                </Container>
                <Container maxWidth="sm" className={styles.btnDiv}>
                    <UserSettingsForm
                        values={values}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.button}
                        onClick={() => doSubmit()}
                    >
                        Save Changes
                    </Button>
                </Container>
            </Container>
        </React.Fragment>
    );
};

export default UserSettings;

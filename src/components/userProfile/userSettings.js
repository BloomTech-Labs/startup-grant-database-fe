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
        setData(currentUser.user_metadata)
    }, [currentUser.user_metadata]);

    function doSubmit() {
        setData(values);
        actions.user.updateUser(token, values);
        setIsEditing(false)
    }

    console.log("current user", currentUser);
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                {/* <AuthForm /> */}
                {/* <UserSettingsForm /> */}
                {!isEditing ? (
                    <UserData data={data} initialData={initialData}/>
                ) : (
                    <UserSettingsForm
                        values={values}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                )}
                {!isEditing && (
                    <Button
                        variant="contained"
                        color="primary"
                        className={styles.button}
                        onClick={() => !isEditing && setIsEditing(true)}
                    >
                        Edit Details
                    </Button>
                )}
                {isEditing && (
                    <>
                        <Button
                            variant="contained"
                            color="primary"
                            className={styles.button}
                            onClick={handleSubmit}
                        >
                            Save Changes
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={styles.button}
                            onClick={() => isEditing && setIsEditing(false)}
                        >
                            Cancel Edit
                        </Button>
                    </>
                )}
            </Container>
        </React.Fragment>
    );
};

export default UserSettings;

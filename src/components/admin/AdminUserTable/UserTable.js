import React, {useContext, useState} from "react";
import {ActionsContext} from "../../../context/ActionsContext";
import {useSelector} from "react-redux";
import MaterialTable from "material-table";
import {makeStyles} from "@material-ui/core/styles";
import {useAuth0} from "../../auth0/Auth0Wrapper";
import {Button, Paper} from "@material-ui/core";
import {tableValues} from "./values/UserTableValues";
import {EmailFormSingle} from "../EmailFormSingle";
import Loader from 'react-loader-spinner'

const userTableStyles = makeStyles(theme => ({
    displayNone: {
        color: "#EF7B5C",
        fontSize: 40
    },
    paper: {
        margin: ".5em"
    },
    headerStyle: {
        fontFamily: "Nunito Sans",
        fontSize: "1em"
    }
}));

const tableStyles = {
    headerStyle: {
        fontFamily: "Nunito Sans",
        fontSize: "1em",
        color: "#3A3A3A",
        padding: "1em",
        fontWeight: 700,
        backgroundColor: "#83D7D1"
    }
};

const UserTable = props => {
    const actions = useContext(ActionsContext);
    const {token} = useSelector(state => state.user);
    const {users, isUserLoading} = useSelector(state => state.admin);
    const roleId = useSelector(
        state => state.admin.roles.filter(role => role.name === "Moderator")[0].id
    );
    const [emailType, setEmailType] = useState("");
    const style = userTableStyles();

    const manipulateUserData = data => {
        let newData = [];
        data.map(data => {
            newData.push({
                email: data.email,
                user_id: data.user_id,
                moderator:
                    data.roles.filter(role => role.name === "Moderator").length > 0,
                first_name: data.user_metadata ? data.user_metadata.first_name : null,
                last_name: data.user_metadata ? data.user_metadata.last_name : null,
                role: data.user_metadata ? data.user_metadata.role : null,
                company: data.user_metadata ? data.user_metadata.company : null,
                company_url: data.user_metadata ? data.user_metadata.company_url : null,
                about: data.user_metadata ? data.user_metadata.about : null
            });
        });
        return newData;
    };
    if (isUserLoading) {
        return <Loader type="Circles" color="#3DB8B3" height={100} width={100}/>
    }

    return (
        <React.Fragment>
            <Paper className={style.paper}>
                <MaterialTable
                    title={tableValues.title}
                    columns={tableValues.columns}
                    options={tableStyles}
                    data={manipulateUserData(users)}
                    editable={{
                        onRowAdd: newData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    let filteredData = Object.assign({}, newData);
                                    delete filteredData.requests;
                                    actions.postAdminGrant(filteredData, token);
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        if (newData.moderator !== "false") {
                                            actions.admin.updateModerator(
                                                token,
                                                newData.user_id,
                                                roleId
                                            );
                                        } else {
                                            actions.admin.removeModerator(
                                                token,
                                                newData.user_id,
                                                roleId
                                            );
                                        }
                                    }
                                }, 600);
                            })
                    }}
                    zeroMinWidth
                />
            </Paper>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setEmailType("one")}
            >
                Email Individual
            </Button>
            {emailType === "one" && <EmailFormSingle/>}
        </React.Fragment>
    );
};

export default UserTable;

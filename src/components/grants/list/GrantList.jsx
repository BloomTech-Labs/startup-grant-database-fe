import React from "react";
import Grant from "./Grant";
import {Typography} from "@material-ui/core";

function GrantList(props) {
    return (
        <>
            {props.grants.length && (
                <Typography>{`${props.grants.length} Grants`}</Typography>
            )}
            {props.grants.length > 0 ? (
                props.grants.map(grant => (
                    <Grant grant={grant} key={grant.id} showcase={props.showcase}/>
                ))
            ) : (
                <Typography>Grants Incoming</Typography>
            )}
        </>
    );
}

export default GrantList;

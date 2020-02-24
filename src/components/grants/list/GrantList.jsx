import React from 'react';
import Grant from './Grant';
import NewGrant from './NewGrant';
import {Typography} from "@material-ui/core";
import {logger} from "../../../store/utils/logger";

function GrantList(props) {
    logger("Grant List Props", props)
    return (
        <>
            {props.grants.length && (
                <Typography>{`${props.grants.length} Grants`}</Typography>
            )}
            {props.grants.length > 0 ? (
                props.grants.map(grant => (
                    <NewGrant grant={grant} key={grant.id} showcase={props.showcase}/>
                ))
            ) : (
                <Typography>Grants Incoming</Typography>
            )}
        </>
    );
}

export default GrantList;

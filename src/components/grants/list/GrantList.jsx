import React from 'react';
import Grant from "./Grant";
import {Typography} from "@material-ui/core";

function GrantList({grants, showcase}) {

    return (
        <>
            {grants.length && (
                <Typography>
                    {`${grants.length} Grants`}
                </Typography>
            )}
            {grants.length > 0 ? (
                grants.map(grant => (
                    <Grant grant={grant} key={grant.id} showcase={showcase} />
                ))
            ) : (
                <Typography>
                    Grants Incoming
                </Typography>
            )}
        </>
    )
}

export default GrantList;

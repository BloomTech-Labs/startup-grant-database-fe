import React from 'react';
import Grant from "./Grant";
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

function GrantList() {
    const {grants} = useSelector(state => state.filters);

    return (
        <>
            {grants.length && (
                <Typography>
                    {`${grants.length} Grants`}
                </Typography>
            )}
            {grants.length > 0 ? (
                grants.map(grant => (
                    <Grant grant={grant} key={grant.id}/>
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

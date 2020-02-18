import React from "react";
import Grant from "./Grant";
import {Typography} from "@material-ui/core";
import {Helmet} from "react-helmet";

function GrantList({grants, showcase}) {

    return (
        <>
            <Helmet>
                <title>Founder Grants</title>
                <meta name="description" content="List of available grants" />
                <meta name="keywords" content="grant,startup,funding,invest,financing,founder" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Startup Grant Database" />
            </Helmet>
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

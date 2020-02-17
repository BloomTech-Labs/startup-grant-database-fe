import React from "react";
import Grant from "./Grant";
<<<<<<< HEAD
import {Typography} from "@material-ui/core";
import {Helmet} from "react-helmet";

function GrantList({grants, showcase}) {

    return (
        <>
            <Helmet>
                <title>Founder Grants</title>
                <meta name="description" content="List of available grants" />
                <meta name="keywords" content="grant,startup,funding,invest,financing" />

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
=======
import { Typography } from "@material-ui/core";

function GrantList(props) {
  console.log("THE GRANTS =>", props.grants);
  return (
    <>
      {props.grants.length && (
        <Typography>{`${props.grants.length} Grants`}</Typography>
      )}
      {props.grants.length > 0 ? (
        props.grants.map(grant => (
          <Grant grant={grant} key={grant.id} showcase={props.showcase} />
        ))
      ) : (
        <Typography>Grants Incoming</Typography>
      )}
    </>
  );
>>>>>>> de51aa1a4ff776125a5c7ee7f8cd4b8238c17757
}

export default GrantList;

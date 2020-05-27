import React from "react";
import NewGrant from "./NewGrant";
import { Typography } from "@material-ui/core";

function GrantList(props) {
  return (
    <>
      {props.grants.length && (
        <Typography>{`${props.grants.length} Results`}</Typography>
      )}
      {props.grants.length > 0 ? (
        props.grants.map((grant) => (
          <NewGrant grant={grant} key={grant.id} showcase={props.showcase} />
        ))
      ) : (
        <Typography>No Grants Found</Typography>
      )}
    </>
  );
}

export default GrantList;

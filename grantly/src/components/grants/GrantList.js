// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useAuth0 } from "../../react-auth0-wrapper";
import { fetchApi, adminFetchApi } from "../../actions";

// Components
import Grant from "./Grant";

// Styles
import { homeStyles } from "../../styles/homeStyles";

// Material UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Container, Box } from "@material-ui/core";

// test funcs
// exports.sum = function(a, b) {
//   return a + b;
// };

export const GrantList = props => {

  const style = homeStyles();

  useEffect(() => {
    if (props.inAdmin) {
      console.log("what?", props.inAdmin);
      console.log("yes");
      props.adminFetchApi(props.currentUser);
    } else if (props.data.length === 0) {
      props.fetchApi();
    } else {
      // props.fetchApi();
    }
  }, []);

  const needToBeReviewed = props.data.filter(
    grant => grant.is_reviewed === false
  ).length;
  // const numberOfSuggestions = props.data.filter(grant => grant.requests.length > 0).length;

  // console.log(user);
  // console.log("CurrentUser Data from Store", props.currentUser);

  return (
    <>
      {props.data.length ? (
        <Typography className={style.grantListTitle}>
          {props.data.length} Grants
        </Typography>
      ) : null }
      {/* {props.inAdmin && <p>{needToBeReviewed} grant(s) need to be reviewed</p>} */}
      <Container className={style.grantListResults}>
        {props.data.map(grant => {
          return (
            <Grant
            grant={grant}
            key={grant.id}
            inAdmin={props.inAdmin}
            history={props.history}
            />
            );
        })}
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants,
    grantStore: state.data,
    currentUser: state.currentUser,
    savedFilters: state.filters
  };
};
export default connect(mapStateToProps, { fetchApi, adminFetchApi })(GrantList);

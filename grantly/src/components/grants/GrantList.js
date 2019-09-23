// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Objects
import Grant from "./Grant";
import Loader from "react-loader-spinner";
import { fetchApi } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";

// Styles

// test funcs
// exports.sum = function(a, b) {
//   return a + b;
// };

const useStyles = makeStyles(theme => ({
  scrollBox: {
    border: "none",
    padding: "0 8px",
    font: "24px/ 36px sans - serif",
    height: "1000px",
    overflow: "scroll"
  }
}));

const GrantList = props => {
  const classes = useStyles();

  console.log("GrantList props", props);

  useEffect(() => {
    if (props.data.length === 0) {
      props.fetchApi();
    }
    console.log("Grants");
  }, [props.data]);

  if (props.isFetching) {
    return <Loader type="Triangle" color="#00BFFF" height="100" width="100" />;
  }
  // console.log(user);
  return (
    <div className={classes.scrollBox}>
      {props.data.length > 0 ? (
        props.data.map(grant => {
          return <Grant grant={grant} key={grant.id} />;
        })
      ) : (
        <div> Grants incoming! </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log("GrantList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants
  };
};
export default connect(
  mapStateToProps,
  { fetchApi }
)(GrantList);

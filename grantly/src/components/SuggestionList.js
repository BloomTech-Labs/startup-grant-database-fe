import React, { useEffect } from "react";	
import { connect } from "react-redux";	

import Suggestion from "./Suggestion";	
import Loader from "react-loader-spinner";	
import { adminFetchApi } from "../actions";	

import { homeStyles } from "../styles/homeStyles";	

export const SuggestionList = props => {	
  const styles = homeStyles();	

  useEffect(() => {	
    props.adminFetchApi();	
    console.log("============SUGGESTION GRANTS", props.data);	
  }, []);	

  if (props.isFetching) {	
    return <Loader type="Triangle" color="#3DB8B3" height="100" width="100" />;	
  }	

  return (	
    <div>	
      {props.data.length > 0 ? (	
        props.data.map(grant => {	
          return <Suggestion grant={grant} key={grant.id} />;	
        })	
      ) : (	
        <div>Incoming</div>	
      )}	
    </div>	
  );	
};	

const mapStateToProps = state => {	
  return {	
    error: state.error,	
    isFetching: state.isFetching,	
    data: state.grantShowcase	
  };	
};	
export default connect(	
  mapStateToProps,	
  { adminFetchApi }	
)(SuggestionList);
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteSuggestion, getSuggetions } from "../../actions";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import axios from 'axios';

// Styling
import { suggestionStyles } from "../../styles/suggestionStyles";

const GrantSuggestionList = props => {

  // Force Update for our onClick action
  // const forceUpdate = useForceUpdate();

  // console.log('grantSuggestionList props: ', props)
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const grant_id = props.rowData.id;
    axios.get(`https://grantly-staging.herokuapp.com/api/admin/suggestions/${grant_id}`, 
      {
        headers: {
          auth0id: props.currentUser.auth_id,
          authorization: `Bearer ${props.currentUser.token}`
        }
      }
    )
    .then(res => {
      setSuggestions(res.data)
      console.log('AXIOS WORKED', res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [props.rowData])

  const onClickDelete = (suggestion_id, currentUser) => {
    props.deleteSuggestion(suggestion_id, currentUser);
    const updatedSuggs = suggestions.filter(sugg => sugg.id !== suggestion_id);
    setSuggestions(updatedSuggs);

  };

  const classes = suggestionStyles();

  return (
    <>
      {suggestions.length ? (
        <div className={classes.suggestionWrapper}>
          <h1 className={classes.userSuggestion}>User Suggestions </h1>
          <ul className={classes.suggestionUl}>
            {suggestions.map(suggestion => (
              <li
                alignItems="center"
                className={classes.suggestionLi}
                key={suggestion.id}
              >
                <button
                  className={classes.delSuggestBtn}
                  onClick={() =>
                    onClickDelete(suggestion.id, props.currentUser)
                  }
                >
                  <DeleteOutlineRoundedIcon />
                </button>
                <p className={classes.suggestionHeader}>
                  {" "}
                  {suggestion.subject}
                </p>
                <p className={classes.suggestionParagraph}>
                  {suggestion.suggestion}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1 className={classes.suggestionNone}>
          {" "}
          There are no user suggestions at this time
        </h1>
      )}
    </>
  );
};
const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { deleteSuggestion })(
  GrantSuggestionList
);

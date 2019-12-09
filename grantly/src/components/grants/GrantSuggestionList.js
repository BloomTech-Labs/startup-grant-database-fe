import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteSuggestion } from "../../actions";
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';


// Styling
import { grantTableStyles } from '../../styles/grantTableStyles';

const GrantSuggestionList = (props) => {
  // console.log('grantSuggestionList props: ', props)
  const [suggestions, setSuggestions] = useState(props.rowData.requests)

  const onClickDelete = (suggestion_id, currentUser) => {
    props.deleteSuggestion(suggestion_id, currentUser)
    const updatedSuggs = suggestions.filter(sugg => sugg.id !== suggestion_id)
    setSuggestions(updatedSuggs)
  };

  const classes = grantTableStyles();

  return (
    <>
      {suggestions.length ? (
        <div className={classes.suggestionWrapper}>
          <h1 className={classes.userSuggestion}>User Suggestions</h1>
          <ul className={classes.suggestionUl}>
            {suggestions.map(suggestion => (
              <li
                alignItems="flex-start"
                className={classes.suggestionLi}
                key={suggestion.id}
              >
              <button
                className={classes.delSuggestBtn}
                onClick={() => onClickDelete(suggestion.id, props.currentUser)}
              >
                <DeleteOutlineRoundedIcon />
              </button>
              <p className={classes.suggestionParagraph}>
                {suggestion.subject}:{suggestion.suggestion}
              </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (<h1
        className={classes.suggestionNone}
      >There are no user suggestions at this time</h1>)
      }
    </>
  )
}
const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { deleteSuggestion }
)(GrantSuggestionList);

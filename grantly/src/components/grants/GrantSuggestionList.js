import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteSuggestion } from "../../actions";
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

// Styling
import { GrantSuggestionStyle } from './GrantSuggestionListStyle';


const GrantSuggestionList = (props) => {

  // console.log('grantSuggestionList props: ', props)
  const [suggestions, setSuggestions] = useState(props.rowData.requests)
  console.log('before filter', suggestions)

  const onClickDelete = (suggestion_id, currentUser) => {
    props.deleteSuggestion(suggestion_id, currentUser)
    const updatedSuggs = suggestions.filter(sugg =>sugg.id !== suggestion_id)
    setSuggestions(updatedSuggs)
  };

 
  const suggestionStyle = GrantSuggestionStyle();

  return (
    <>
      {suggestions.length ?  (
      <div>
        <h1>User Suggestions</h1>
        <ul>{suggestions.map(suggestion => (
          <li key={suggestion.id}> 
          <button
            className={suggestionStyle}
            onClick={() => onClickDelete(suggestion.id, props.currentUser)}
            ><DeleteOutlineRoundedIcon/></button>
            <span>{suggestion.subject}: {suggestion.suggestion}</span>
          </li>))}
        </ul>
      </div>
      ) : (<h1>There are no user suggestions at this time</h1>)
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

import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
// import { deleteSuggestion } from "../../actions";
import axios from "axios";
import { useAuth0 } from "../auth0/Auth0Wrapper.jsx";

// Styling
import { makeStyles } from "@material-ui/core/styles";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DeleteIcon from "@material-ui/icons/Delete";

const suggestionModalStyles = makeStyles(theme => ({
  suggestionUl: {
    padding: "0",
    minWidth: "200px"
  },
  suggestionLi: {
    display: "flex",
    padding: "13px",
    borderTop: "3px solid #77D4D0"
  },
  suggestionLabel: {
    fontFamily: "Nunito Sans"
  },
  suggestionNone: {
    width: "20%",
    borderBottom: "3px solid #77D4D0",
    padding: "10px",
    marginTop: "5px",
    fontSize: "1.25rem"
  },
  // delSuggestBtn: {
  //   borderRadius: '50px',
  //   alignSelf: 'center',
  //   backgroundColor: '#EF7B5C',
  //   boxShadow: 'none',
  //   borderWidth: '0px',
  //   margin: '2px 5px 2px 0',
  //   padding: '6px',
  //   height: '40px',
  //   width: '40px',
  //   "&:hover": {
  //     backgroundColor: '#f0a692'
  //   }
  // },
  iconBtnWithSuggestions: {
    backgroundColor: "#3DB8B3",
    paddingRight: "5px",
    border: "none"
  },
  iconBtnWithOutSuggestions: {
    backgroundColor: "none",
    color: "000",
    cursor: "unset",
    "&:hover": {
      backgroundColor: "white"
    }
  }
}));

const EditGrantModal = props => {
  const { isAuthenticated, user, loading } = useAuth0();
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const { token, isModerator, currentUser } = useSelector(state => state.user);
  const style = suggestionModalStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const grant_id = props.rowData.id;
    axios
      .get(
        `${process.env.REACT_APP_CLIENT_BASEURL}/admin/suggestions/${grant_id}`,
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        setSuggestions(res.data);
        // console.log("AXIOS WORKED", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [token, props.rowData]);

  // const onClickDelete = (suggestion_id, token) => {
  //   props.deleteSuggestion(suggestion_id, token);
  //   const updatedSuggs = suggestions.filter(sugg => sugg.id !== suggestion_id);
  //   setSuggestions(updatedSuggs);
  // };

  return (
    <>
      {!suggestions.length ? (
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          className={
            suggestions.length
              ? style.iconBtnWithSuggestions
              : style.iconBtnWithOutSuggestions
          }
        >
          {suggestions.length}
          <ArrowDropDownIcon />
        </Button>
      ) : (
        <Button className={style.iconBtnWithOutSuggestions}>
          {suggestions.length}
        </Button>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle variant="h5">User Suggestions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {!suggestions.length ? (
              <List className={style.suggestionUl}>
                {suggestions.map(suggestion => (
                  <ListItem
                    alignItems="flex-start"
                    className={style.suggestionLi}
                  >
                    <IconButton
                    // onClick={() => onClickDelete(suggestion.id, token)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography varient="body1" color="textPrimary">
                            {suggestion.subject}
                          </Typography>
                        </React.Fragment>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography variant="body3" color="textPrimary">
                            {suggestion.suggestion}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="h1" className={style.suggestionNone}>
                {" "}
                There are no user suggestions at this time
              </Typography>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditGrantModal;

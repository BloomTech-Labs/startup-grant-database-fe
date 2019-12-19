import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteSuggestion } from "../../actions";
import axios from "axios";
import { useAuth0 } from "../../react-auth0-wrapper.js";
import useGetToken from "../../auth/useGetToken.js";
// Styling
import { tableSuggStyles } from "../../styles/tableSuggStyles";
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


const TableSuggestions = props => {
  const { isAuthenticated, user, loading } = useAuth0();

  const [token] = useGetToken();

  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  console.log("made it to suggestion Table", token);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const grant_id = props.rowData.id;
    console.log("madetoEffect", token);
    const fetchSuggestions = async () => {
      if (token) {
        const awaitSuggestions = await axios
          .get(
            `${process.env.REACT_APP_CLIENT_LOCALURL}/admin/suggestions/${grant_id}`,
            {
              headers: {
                authorization: `Bearer ${token}`
              }
            }
          )
          .then(res => {
            setSuggestions(res.data);
            console.log("AXIOS WORKED", res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    };
  }, [user]);

  const onClickDelete = (suggestion_id, token) => {
    props.deleteSuggestion(suggestion_id, token);
    const updatedSuggs = suggestions.filter(sugg => sugg.id !== suggestion_id);
    setSuggestions(updatedSuggs);
  };

  const style = tableSuggStyles();

  return (
    <>
      {suggestions.length ? (
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
            {suggestions.length ? (
              <List className={style.suggestionUl}>
                {suggestions.map(suggestion => (
                  <ListItem
                    alignItems="flex-start"
                    className={style.suggestionLi}
                  >
                    <IconButton
                      onClick={() => onClickDelete(suggestion.id, token)}
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
const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, { deleteSuggestion })(TableSuggestions);

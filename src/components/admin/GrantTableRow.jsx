import React, { useContext, useState, useEffect } from "react";
import {
  IconButton,
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
  Icon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { ActionsContext } from "../../context/ActionsContext";
import { useSelector } from "react-redux";
import EditGrantModal from "./EditGrantModal";
import clsx from "clsx";
import editFormValues from "./values/EditGrantFormValues";

const useStyles = makeStyles(theme => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

const GrantTableRow = ({ grant, format, columns }) => {
  const actions = useContext(ActionsContext);
  const [expand, setExpand] = useState(false);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState([]);

  const { token } = useSelector(state => state.user);
  function handleDelete(id) {
    actions.admin.removeSuggestion(token, id);
  }
  function deleteGrant(id) {
    actions.grants.deleteAdminGrant(token, id);
  }
  function submitChange(id, data) {
    actions.grants.updateAdminGrant(token, id, data);
  }
  const classes = useStyles();

  useEffect(() => {
    if (grant.requests.length === 0) {
      setExpand(false);
    }
    setItem(grant);
  }, [grant]);

  console.log("=++++++++++++++++++++++", editFormValues);
  return (
    <>
      <TableRow hover role="checkbox" tabIndex={-1} key={grant.id}>
        {columns.map(column => {
          return (
            <TableCell key={column.id} align={column.align}>
              {format(grant, column)}
            </TableCell>
          );
        })}

        <TableCell align="left">
          <IconButton onClick={() => setEdit(!edit)}>
            <EditIcon
              className={clsx(classes.expand, expand && classes.expandOpen)}
            />
          </IconButton>
        </TableCell>
        {edit && <EditGrantModal grant={grant} />}
        <TableCell align="right">
          {grant.requests.length > 0 && (
            <IconButton onClick={() => setExpand(!expand)}>
              <ExpandMoreIcon
                className={clsx(classes.expand, expand && classes.expandOpen)}
              />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      {expand && (
        <TableRow>
          <TableCell colSpan="3">
            <Table>
              <TableHead>Suggestions from Users</TableHead>
              <TableBody>
                {grant.requests.map(request => (
                  <TableRow key={request.id}>
                    <TableCell>{request.subject}</TableCell>
                    <TableCell>{request.suggestion}</TableCell>
                    <IconButton onClick={() => deleteGrant(request.id)}>
                      <DeleteForeverIcon />
                    </IconButton>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default GrantTableRow;

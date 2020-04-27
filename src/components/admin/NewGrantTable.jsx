import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Grid,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import moment from "moment";
import GrantTableRow from "./GrantTableRow";
import { useForm } from "../../hooks/useForm";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { green } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import { stat } from "fs";

const columns = [
  { id: "competition_name", label: "Name" },
  { id: "edit", label: "Edit" },
  { id: "is_reviewed", label: "Grant Status", align: "right" },
  { id: "details_last_updated", label: "Last Updated", align: "right" },
  { id: "most_recent_application_due_date", label: "Deadline", align: "right" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2em",
    marginLeft: "2em",
    marginRight: "2em",
    marginBottom: "2em",
    height: "75%",
  },
  container: {
    maxHeight: "81vh",
  },

  filterContainer: {
    marginTop: "1em",
    marginLeft: "2em",
    marginRight: "2em",
    marginBottom: "1em",
    padding: "2em",
    display: "flex",
    textAlign: "left",
    alignContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "6em",
      padding: theme.spacing(1),
      textAlign: "center",
      flexDirection: "column",
    },
    filterDiv: {
      [theme.breakpoints.down("sm")]: {
        marginTop: "1em",
      },
    },
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
})((props) => <Checkbox color="default" {...props} />);

function NewGrantTable() {
  const { grants } = useSelector((state) => state.admin);
  const [grantList, setGrantList] = useState([]);
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [state, setState] = useState({
    checked: false,
  });
  const handleChangePage = (event, newPage) => setPage(newPage);

  useEffect(() => {
    setGrantList(grants);
  }, [grants]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function format(grant, column) {
    switch (column.id) {
      case "is_reviewed":
        return grant.is_reviewed ? "Approved" : "Pending";
      case "competition_name":
        return grant.competition_name;
      default:
        return grant[column.id]
          ? moment(grant[column.id]).format("MMM Do YYYY")
          : null;
    }
  }

  function alphaSort(property) {
    var sortOrder = 1;

    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }

  return (
    <>
      <Paper className={classes.filterContainer}>
        <Grid xs={12} md={3}>
          <Typography variant="h6" fontWeight="600">
            Filter by:
          </Typography>
        </Grid>
        <Grid xs={12} md={3} className={classes.filterDiv}>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checked}
                // onChange={handleChange}
                // name={null}
              />
            }
            label="Alphabetical"
          />
        </Grid>
        <Grid xs={12} md={3} className={classes.filterDiv}>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checked}
                // onChange={handleChange}
                // name={state.filterStatus}
              />
            }
            label="Status"
          />
        </Grid>
        <Grid xs={12} md={3} className={classes.filterDiv}>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checked}
                // onChange={handleChange}
                // name={state.filterRequests}
              />
            }
            label="Suggestions"
          />
        </Grid>
      </Paper>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="Suggestions Table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.label}
                  </TableCell>
                ))}
                <TableCell key={"suggestion"} align="right">
                  Suggestions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {grantList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((grant) => (
                  <GrantTableRow
                    key={grant.id}
                    grant={grant}
                    format={format}
                    columns={columns}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          componet="div"
          count={grants.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default NewGrantTable;

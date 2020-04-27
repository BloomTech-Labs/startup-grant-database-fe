import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@material-ui/core";
import {useSelector} from "react-redux";
import moment from "moment";
import GrantTableRow from "./GrantTableRow";


const columns = [
    {id: "competition_name", label: "Name"},
    {id: "edit", label: "Edit"},
    {id: "is_reviewed", label: "Grant Status", align: "right"},
    {id: "details_last_updated", label: "Last Updated", align: "right"},
    {id: "most_recent_application_due_date", label: "Deadline", align: "right"}
];

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%"
    },
    container: {
        maxHeight: "81vh"
    }
}));

function NewGrantTable() {
    const {grants} = useSelector(state => state.admin);
    const [grantList, setGrantList] = useState([]);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => setPage(newPage);

    useEffect(()=> {
        setGrantList(grants);
    }, [grants])

    const handleChangeRowsPerPage = event => {
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

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="Suggestions Table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
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
                            .map(grant => (
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
    );
}

export default NewGrantTable;

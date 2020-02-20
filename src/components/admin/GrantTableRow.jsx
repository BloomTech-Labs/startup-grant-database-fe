import React, {useContext, useState, useEffect} from 'react';
import {IconButton, TableCell, TableRow, Table, TableHead, TableBody} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {ActionsContext} from "../../context/ActionsContext";
import {useSelector} from "react-redux";
import clsx from "clsx";

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
}))

const GrantTableRow = ({grant, format, columns}) => {
    const actions = useContext(ActionsContext);
    const [expand, setExpand] = useState(false);
    const {token} = useSelector(state => state.user);
    function handleDelete(id) {
        actions.admin.removeSuggestion(token, id);
    }
    const classes = useStyles();

    useEffect(()=> {
        if (grant.requests.length === 0) {
            setExpand(false);
        }
    }, [grant]);

    return (
        <>
            <TableRow hover role="checkbox" tabIndex={-1} key={grant.id}>
                {columns.map(column => {
                    return (
                        <TableCell key={column.id} align={column.align}>
                            {format(grant, column)}
                        </TableCell>
                    )
                })}
                <TableCell align='right'>
                    {grant.requests.length > 0 && (
                    <IconButton onClick={() => setExpand(!expand)}>
                        <ExpandMoreIcon className={clsx(classes.expand, expand && classes.expandOpen)}/>
                    </IconButton>
                    )}
                </TableCell>
            </TableRow>
            {expand && (
                <TableRow>
                    <TableCell colSpan="3">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Subject</TableCell>
                                    <TableCell>Suggestion</TableCell>
                                    <TableCell>Delete?</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {grant.requests.map(request => (
                                    <TableRow key={request.id}>
                                        <TableCell>{request.subject}</TableCell>
                                        <TableCell>{request.suggestion}</TableCell>
                                        <IconButton onClick={()=> handleDelete(request.id)}>
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
    )
};

export default GrantTableRow

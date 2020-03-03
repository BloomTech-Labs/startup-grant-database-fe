import {makeStyles} from "@material-ui/core/styles";

const formStyles = makeStyles(theme => ({
    layout: {
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 700,
            marginLeft: "auto",
            marginRight: "auto",
            // height: "auto"
            height: 1000
        }
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),

        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(6),
            paddingBottom: theme.spacing(6)

            // height: 1000,
            // position: "relative"
        }
    },
    bottomBox: {
        padding: theme.spacing(2, 6, 1, 6)
    },
    button: {
        display: "flex",
        // alignItems: "flex-end",
        // justifyContent: "flex-end"
        // justifyContent: "flex-end",
        // alignSelf: "flex-end",
        // position: "absolute",
        // width: 800,
        bottom: theme.spacing(5),
        paddingLeft: theme.spacing(6),
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    submit: {
        width: "30%",
        height: "4em"
    },
    submitContainer: {
        marginLeft: theme.spacing(3)
    },
    back: {
        width: "30%",
        height: "4em",
        border: "1px solid black",
        color: "white",
        marginRight: "50px"
    },
    dropDown: {
        width: 200,
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            width: "90%"
        }
    },
    subjectHeader: {
        textAlign: "left",
        paddingLeft: theme.spacing(6)
    },
    hr: {
        width: 600,
        color: "#808080"
    },
    label: {
        color: "#fff"
    },
    adminButtons: {
        margin: "30px"
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));

export default formStyles;

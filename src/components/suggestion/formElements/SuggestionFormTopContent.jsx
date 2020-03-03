import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    topBox: {
        padding: theme.spacing(3),

        "& h1": {
            fontSize: "2.8rem",
            fontFamily: "adobe-garamond-pro",
            fontWeight: 400,

            color: "white"
        },
        "& p": {
            fontFamily: "Roboto",
            fontSize: "1.3rem",
            fontWeight: 200,
            lineHeight: 1.5,
            color: "white"
        },

        background: "#3DB8B3"
    }
}));

export const SuggestionFormTopContent = () => {
    const styles = useStyles();
    return (
        <Grid className={styles.topBox}>
            <div>
                <h1>Submit a New Grant to Founder Grants</h1>
                <p>
                    Please fill out all of the form fields on this page regarding the
                    grant you are submitting. If you are unsure of anything please write
                    “N/A” Thank you!
                </p>
            </div>
        </Grid>
    );
};

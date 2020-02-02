import React, {useContext} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Card, Grid, Link, Typography} from "@material-ui/core";
import {ActionsContext} from "../../../context/ActionsContext";
import moment from 'moment';
import {formatNumber} from "../../../utils/helpers";

const useStyles = makeStyles(theme => ({}));

function Grant(props) {
    const actions = useContext(ActionsContext);

    function selectGrant() {
        actions.grants.selectGrant(props.grant);
    }

    return (
        <Card
            onClick={selectGrant}
        >
            <Grid
                justify='space-between'
                alignItems='flex-start'
                style={{minHeight: '125px'}}
            >
                <Grid
                    container
                    direction='column'
                    alignItems='flex-start'
                    justify='space-between'
                >
                    <Typography
                        variant='subtitle1'
                        style={{textAlign: 'left'}}
                    >
                        {props.grant.competition_name}
                    </Typography>
                    <Grid item>
                        <Typography>
                            <Link href={props.grant.website}>
                                {props.grant.website.substring(0, 30)}
                            </Link>
                        </Typography>
                    </Grid>
                    <Typography
                        variant='subtitle1'
                    >
                        {`Deadline - `}
                        <span>
                            {props.grant.most_recent_application_due_date
                                ? `${moment(props.grant.most_recent_application_due_date).format('MMMM Do YYYY')}`
                                : 'See website for details'}
                        </span>
                    </Typography>
                    <Grid item>
                        <Typography>
                            {`Amount - `}
                            <span>
                                {props.grant.amount ? `\$${formatNumber(props.grant.amount)}` : "See website for details."}
                            </span>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Grant;

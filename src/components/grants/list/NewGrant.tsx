import React, { useContext, useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Typography,
  IconButton,
  Collapse,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ActionsContext } from "../../../context/ActionsContext";
import { Grant } from "../../../store/grants/grantTypes";
import { Logo } from "../Logo/Logo.jsx";
import moment from "moment";
import IconDisplay from "../showcase/IconDisplay";
import { useSelector } from "react-redux";
import { AppState } from "../../../store/rooterReducer";
import { logger } from "../../../store/utils/logger";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GrantShowcase from "../GrantShowcase";
import clsx from "clsx";
import { formatNumber } from "../../../utils/helpers";

interface IProps {
  grant: Grant;
  showcase: Grant;
}

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: theme.spacing(2)
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  firstActions: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  secondActions: {
    justifyContent: "center"
  }
}));

function NewGrant({ grant, showcase }: IProps) {
  const actions = useContext(ActionsContext);
  const [expanded, setExpanded] = useState<boolean>(false);
  const { favoriteGrants } = useSelector((state: AppState) => state.user);
  const existingFavorite = favoriteGrants.filter(
    (fav: Grant) => fav.id === showcase.id
  );

  function selectGrant() {
    actions && actions.grants.selectGrant(grant);
  }

  const handleExpandClick = () => setExpanded(!expanded);
  const classes = useStyles();
  return (
    <Card className={classes.root} raised>
      <CardHeader
        avatar={<Logo url={grant.website} />}
        title={<Typography variant="h5">{grant.competition_name}</Typography>}
        subheader={<Link href={grant.website}>{grant.sponsoring_entity}</Link>}
      />
      <CardContent>
        <Typography variant="subtitle1">
          {`Deadline - `}
          <span>
            {grant.most_recent_application_due_date
              ? `${moment(grant.most_recent_application_due_date).format(
                  "MMMM Do YYYY"
                )}`
              : "See website for details"}
          </span>
        </Typography>
        <Typography>
          {`Amount - `}
          <span>
            {grant.amount
              ? `\$${formatNumber(grant.amount)}`
              : "See website for details."}
          </span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.firstActions}>
        <IconDisplay
          favoriteGrants={favoriteGrants}
          existingFavorite={favoriteGrants.filter(
            (favGrant: Grant) => favGrant.id === grant.id
          )}
          id={grant.id}
        />
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            paragraph
          >{`Region: ${grant.geographic_region}`}</Typography>
          <Typography
            paragraph
          >{`Early Stage Funding: ${grant.early_stage_funding}`}</Typography>
          <Typography
            paragraph
          >{`Target Demography: ${grant.target_entrepreneur_demographic}`}</Typography>
          <Typography
            paragraph
          >{`Focus Areas: ${grant.area_focus}`}</Typography>
          <Typography
            paragraph
          >{`Sponsor: ${grant.sponsoring_entity}`}</Typography>
          <Typography paragraph>{`Notes: ${grant.notes}`}</Typography>
        </CardContent>
        <CardActions className={classes.secondActions}>
          <Link href={grant.website} target="_blank">
            <Button color="primary">Apply to Grant</Button>
          </Link>
          <Button color="primary">Suggestions</Button>
        </CardActions>
      </Collapse>
    </Card>
  );
}

export default NewGrant;

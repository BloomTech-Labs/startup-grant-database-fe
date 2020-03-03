import React, {useContext, useState} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    Divider,
    Grid,
    IconButton,
    Link,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ActionsContext} from "../../../context/ActionsContext";
import {Grant} from "../../../store/grants/grantTypes";
import IconDisplay from "../showcase/IconDisplay";
import {useSelector} from "react-redux";
import {AppState} from "../../../store/rooterReducer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import {ReactComponent as DefaultLogo} from "../Logo/defaultGrantLogo.svg";
import {fieldData, fieldHeaderData} from "./mobileGrantFields";
import ShowcaseFields from "../showcase/ShowcaseFields";

interface IProps {
    grant: Grant;
    showcase: Grant;
}

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
            "&:last-child": {
                paddingBottom: theme.spacing(15)
            }
        }
    },
    grantCardSelected: {
        padding: theme.spacing(2, 1),
        borderLeft: "5px solid #3DB8B3"
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
    },
    standout: {
        fontWeight: 700
    }
}));

function NewGrant({grant, showcase}: IProps) {
    const actions = useContext(ActionsContext);
    const [expanded, setExpanded] = useState<boolean>(false);
    const {favoriteGrants} = useSelector((state: AppState) => state.user);

    function selectGrant() {
        actions && actions.grants.selectGrant(grant);
    }

    const isSelected = () => grant.id === showcase.id;
    const handleExpandClick = () => setExpanded(!expanded);
    const classes = useStyles();
    return (
        <Card
            className={clsx(classes.root, isSelected() && classes.grantCardSelected)}
            raised
            onClick={selectGrant}
        >
            <CardHeader
                avatar={
                    !grant.use_logo ? (
                        <DefaultLogo/>
                    ) : (
                        <img src={grant.logo} alt="logo"/>
                    )
                }
                title={<Typography variant="h5">{grant.competition_name}</Typography>}
                subheader={<Link href={grant.website}>{grant.sponsoring_entity}</Link>}
            />
            <CardContent>
                <Grid container>
                    {fieldHeaderData.map(fields => (
                        <ShowcaseFields {...fields} showcase={grant} key={fields.title}/>
                    ))}
                </Grid>
            </CardContent>
            <CardActions disableSpacing className={classes.firstActions}>
                <Divider color="primary"/>
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
                    className={clsx(classes.expand, {[classes.expandOpen]: expanded})}
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider color="primary"/>
                <CardContent>
                    <Grid container spacing={1}>
                        {fieldData.map(fields => {
                            return (
                                <ShowcaseFields
                                    {...fields}
                                    showcase={grant}
                                    key={fields.title}
                                />
                            );
                        })}
                    </Grid>
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

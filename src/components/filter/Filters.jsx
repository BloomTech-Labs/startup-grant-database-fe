import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import NewFilters from "./NewFilters";
import {filterFormState} from "./formState";
import {ActionsContext} from "../../context/ActionsContext";
import {useSelector} from "react-redux";

const filterStyles = {
    grants: makeStyles(theme => ({
        card: {
            margin: theme.spacing(2, 1, 0, 0),
            borderRadius: '2px',
            [theme.breakpoints.down('sm')]: {
                position: 'initial',
                width: '100%',
                height: 'initial'
            }
        },
        filterIcon: {
            position: "fixed",
            right: "16.5%",
            zIndex: "2000",
            boxShadow:
                "0px 1px 0px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 0px -1px rgba(0,0,0,0.12)",
            top: "11%",
            padding: "10px"
        },
        filterCard: {
            display: "block",
            alignSelf: "flex-end",
            margin: "0",
            textAlign: "left",
            padding: "0"
        },
        title: {
            fontFamily: "Nunito Sans",
            fontWeight: 700,
            fontSize: "1.15rem",
            marginTop: ".25em",
            color: "#464646"
        },
        label: {
            alignSelf: "flex-start",
            textAlign: "left",
            fontSize: ".8rem",
            fontFamily: "Nunito Sans",
            fontWeight: 700,
            color: "#222222",
            margin: "0 0 .2em 0"
        },
        mobileSet: {
            margin: 0,
            padding: 0
        },
        landingButton: {
            display: "none"
        },
        arrow: {
            position: "fixed",
            right: "16.5%",
            zIndex: "2000",
            boxShadow:
                "0px 1px 0px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 0px -1px rgba(0,0,0,0.12)",
            top: "11%",
            padding: "10px"
        },
        set: {
            width: "100%",
            alignSelf: "center",
            margin: ".25em 0",
            padding: "0 0 0 1em"
        }
    })),
    landing: makeStyles(theme => ({
        title: {
            marginBottom: "20px",
            fontSize: "2rem",
            [theme.breakpoints.down("xs")]: {
                paddingLeft: "10px",
                paddingRight: "10px"
            }
        },
        card: {
            marginTop: theme.spacing(2),
            padding: theme.spacing(6),
            [theme.breakpoints.down("xs")]: {
                display: 'none'
            }
        },
        set: {
            [theme.breakpoints.down("sm")]: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "20%",
                margin: "10px"
            },
            [theme.breakpoints.down("xs")]: {
                width: "50%",
                alignItems: "center",
                alignContent: "center"
            }
        },
        label: {
            marginBottom: "10px",
            fontSize: "1.4rem",
            fontFamily: "Nunito Sans",
            color: "#222222",
            [theme.breakpoints.down("sm")]: {
                textAlign: "left"
            }
        },
        filterCard: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            [theme.breakpoints.down("xs")]: {
                marginLeft: "20px",
                "& fieldset:nth-child(2)": {
                    display: "none"
                },
                "& fieldset:nth-child(3)": {
                    display: "none"
                }
            }
        },
        landingButton: {
            textDecoration: "none",
            marginTop: "45px",
            color: "white",
            fontFamily: "Roboto",
            borderRadius: "2px",
            height: "58px",
            width: "266px",
            [theme.breakpoints.down("xs")]: {
                marginTop: "10px",
                marginBottom: "20px"
            }
        }
    })),
    mobile: makeStyles(theme => ({
        filterCard: {
            display: "flex",
            padding: "10px",
            flexWrap: "nowrap",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        mobileSet: {
            display: "inline-block",
            margin: "0",
            justifyContent: "space-between",
            flexWrap: "no-wrap"
        },
        set: {
            display: "flex",
            flexDirection: "row"
        },
        label: {
            display: "inline-block"
        },
        landingButton: {
            display: "none"
        }
    }))
};

function Filters({landing, mobile, grants}) {
    const {pristine, criteria} = useSelector(state => state.filters);
    const actions = useContext(ActionsContext);
    const [filters, setFilters] = useState(() => {
        if (pristine) {
            return filterFormState;
        } else {
            return criteria;
        }
    });
    const [grantList, setGrantList] = useState([]);
    const allGrants = useSelector(state => state.grants.grants);

    useEffect(() => {
        if (actions) {
            actions.filters.changeFilter(filters);
            actions.filters.grantFilter(grantList);
        }
    }, [filters]);

    useEffect(() => {
        if (grants) {
            setGrantList(grants);
            // actions.filters.grantFilter(grants);
        } else {
            setGrantList(allGrants);
        }
    }, [allGrants]);

    const landingStyles = filterStyles.landing();
    const mobileStyles = filterStyles.mobile();
    const grantsStyles = filterStyles.grants();

    const rest = {
        filters,
        setFilters
    };

    if (landing) {
        return <NewFilters classes={landingStyles} landing grants={grantList} {...rest} />
    }

    if (mobile) {
        return <NewFilters classes={mobileStyles} grants={grantList} mobile {...rest} />
    }

    return <NewFilters classes={grantsStyles} grants={grantList} {...rest}/>
}

export default Filters;

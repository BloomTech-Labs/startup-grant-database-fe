import React, {useContext, useEffect, useState} from 'react';
import {Filters, KeyValuePair} from "../../store/filters/filterTypes";
import {ActionsContext} from "../../context/ActionsContext";
import {Actions} from "../../store/useActions";
import {useSelector} from "react-redux";
import {AppState} from "../../store/rooterReducer";
import {Button, Card, FormGroup, Typography} from "@material-ui/core";
import {Link as RouterLink} from 'react-router-dom';
import {filterFormState} from "./formState";
import FilterGroup from "./FilterGroup";
import {useStylesGrants, useStylesLanding, useStylesMobile} from "../../styles/filterStyles";

interface IProps {
    location?: string;
    mobile?: any;
}

const NewFilters = (props: IProps) => {
    const actions: Actions = useContext(ActionsContext);
    const {grants} = useSelector((state: AppState) => state.grants);
    const filteredGrants = useSelector((state:AppState)=> state.filters.grants);
    const [filters, setFilters] = useState<Filters>(filterFormState);

    useEffect(() => {
        // TODO - Move to App to be called Once
        if (grants.length === 0) {
            actions && actions.grants.fetchGrants();
        }
    }, []);

    useEffect(() => {
        if (actions) {
            actions.filters.changeFilter(filters);
            actions.filters.grantFilter(grants);
        }
    }, [filters]);

    function handleChange(data: KeyValuePair, key: string) {
        console.log("Data", data, "Key", key);
        const tempArray = returnKeyValuePair(key);
        const updatedArray = tempArray.map((item: KeyValuePair) => {
            if (item.key === data.key) {
                return {...item, checked: !item.checked}
            } else {
                return item;
            }
        });
        setFilters({...filters, [key]: updatedArray})
    }

    function returnKeyValuePair(key: string): any {
        // Todo: KeyValuePairArray is not a Array as expected, need to research more into this.
        // Todo: Figure out how to return the object in TypeScript without a If/Then/Else or a Switch Case
        // Todo: return filters[key]; <- Key is not indexable on Type KeyValuePairArray
        switch (key) {
            case 'amount':
                return filters.amount;
            case 'geographic_region':
                return filters.geographic_region;
            case 'domain_areas':
                return filters.domain_areas;
            default:
                return filters.admin_filters
        }
    }

    const mobileStyle = useStylesMobile();
    const landingStyle = useStylesLanding();
    const grantStyle = useStylesGrants();

    const classes = props.mobile ? mobileStyle : props.location === "/" ? landingStyle : grantStyle;
    const title = ['Grant Amount', 'Region', 'Focus Areas', 'View Grant By'];
    // Todo Add Admin Check for Rending Admin Views
    return (
        <Card className={classes.card}>
            <Typography className={classes.title} variant="h5" component="h2">
                {props.location === '/' ? "Which grants would you like to find?" : "Filter grants by:"}
            </Typography>
            <FormGroup className={classes.filterCard}>
                {Object.keys(filters).map((group: string, id:number) => <FilterGroup classes={classes} handleChange={handleChange}
                                                                          data={returnKeyValuePair(group)} title={title[id]}
                                                                          labelText={group}/>)}
            </FormGroup>
            <Typography variant="h6">
                {`There are ${filteredGrants.length} results`}
            </Typography>
            <Button variant="contained" color="primary" size="large" component={RouterLink} to="/grants"
                    className={classes.landingButton}>
                Find Grants
            </Button>
        </Card>
    )
};

export default NewFilters;

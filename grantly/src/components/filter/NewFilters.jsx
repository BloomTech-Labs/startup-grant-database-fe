import React from 'react';
import {Button, Card, FormGroup, Typography} from "@material-ui/core";
import {Link as RouterLink} from 'react-router-dom';
import FilterGroup from "./FilterGroup";

const NewFilters = ({landing, mobile, grants, classes, setFilters, filters}) => {

    function handleChange(data, key) {
        const tempArray = returnKeyValuePair(key);
        const updatedArray = tempArray.map(item => {
            if (item.key === data.key) {
                return {...item, checked: !item.checked}
            } else {
                return item;
            }
        });
        setFilters({...filters, [key]: updatedArray})
    }

    function returnKeyValuePair(key) {
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

    const title = ['Grant Amount', 'Region', 'Focus Areas', 'View Grant By'];
    // Todo Add Admin Check for Rending Admin Views
    return (
        <Card className={classes.card}>
            <Typography className={classes.title} variant="h5" component="h2">
                {landing ? "Which grants would you like to find?" : "Filter grants by:"}
            </Typography>
            <FormGroup className={classes.filterCard}>
                {Object.keys(filters).map((group, id) => <FilterGroup classes={classes} key={id}
                                                                      handleChange={handleChange}
                                                                      data={returnKeyValuePair(group)} title={title[id]}
                                                                      labelText={group}/>)}
            </FormGroup>
            <Button variant="contained" color="primary" size="large" component={RouterLink} to="/grants"
                    className={classes.landingButton}>
                Find Grants
            </Button>
        </Card>
    )
};

export default NewFilters;

import React from "react";
import {Button, Card, FormGroup, Typography} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import FilterGroup from "./FilterGroup";
import {useSelector} from "react-redux";
import {FilterFormState, FormState} from "../../store/filters/filterTypes";
import {AppState} from "../../store/rooterReducer";

interface IProps {
    landing: boolean;
    classes: any;
    setFilters: (filter: FilterFormState) => void;
    filters: FilterFormState;
}

const NewFilters = ({landing, classes, setFilters, filters}: IProps) => {
    const {isModerator} = useSelector((state: AppState) => state.user);

    function handleChange(data: FormState, key: string): void {
        Object.keys(filters).forEach(eachKey => {
            if (eachKey === key) {
                // @ts-ignore
                const updatedFilters = filters[key].map((filter: FormState) => {
                    if (filter.key === data.key) {
                        return {...filter, checked: !filter.checked};
                    } else {
                        return filter;
                    }
                });
                setFilters({...filters, [key]: updatedFilters});
            }
        });
    }

    const title = ["Grant Amount", "Region", "Focus Areas"];
    return (
        <Card className={classes.card} raised>
            <Typography className={classes.title} variant="h5" component="h2">
                {landing ? "Find Funding Now." : "Filter grants by:"}
            </Typography>
            <FormGroup className={classes.filterCard}>
                {Object.keys(filters).map((group, id) => (
                    <FilterGroup
                        classes={classes}
                        key={id}
                        handleChange={handleChange}
                        data={filters[group]}
                        title={title[id]}
                        labelText={group}
                    />
                ))}
            </FormGroup>
            <Button
                variant="contained"
                color="primary"
                size="large"
                component={RouterLink}
                to="/grants"
                className={classes.landingButton}
            >
                Search Grants
            </Button>
        </Card>
    );
};

export default NewFilters;

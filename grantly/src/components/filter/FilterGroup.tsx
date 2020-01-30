import React from 'react';
import {FormControl, FormLabel} from "@material-ui/core";
import {KeyValuePair} from "../../store/filters/filterTypes";
import FilterItem from "./FilterItem";

interface IProps {
    handleChange: (data: KeyValuePair, key: string) => void;
    data: any; // Todo Figure out how to type this Prop
    labelText: string;
    title: string;
    classes: any;
}

function FilterGroup(props: IProps) {
    const {labelText, data, handleChange, classes, title} = props;
    return (
        <FormControl className={classes.set} component="fieldset">
            <FormLabel className={classes.label} component="legend">
                {title}
            </FormLabel>
            {data.map((item: KeyValuePair) => <FilterItem key={item.key} classes={classes} data={item} labelText={labelText}
                                                          handleChange={handleChange} />)}
        </FormControl>
    )
}

export default FilterGroup;

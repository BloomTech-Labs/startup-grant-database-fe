import React from 'react';
import {KeyValuePair} from "../../store/filters/filterTypes";
import {Checkbox, FormControlLabel} from "@material-ui/core";

interface IProps {
    handleChange: (data: KeyValuePair, key: string) => void;
    data: KeyValuePair;
    classes: any;
    labelText: string;
}

function FilterItem(props: IProps) {
    const {data, handleChange, classes, labelText} = props;
    return (
        <FormControlLabel
            className={classes.mobileSet}
            control={<Checkbox checked={data.checked} value={data.checked} onChange={() => handleChange(data, labelText)}/>}
            label={data.key}
        />
    )
}

export default FilterItem;

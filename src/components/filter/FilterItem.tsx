import React from 'react';
import {AmountState, FormState} from "../../store/filters/filterTypes";
import {Checkbox, FormControlLabel} from "@material-ui/core";

interface IProps {
    handleChange: (data: FormState | AmountState, key: string) => void;
    data: FormState | AmountState;
    classes: any;
    labelText: string;
}

function FilterItem(props: IProps) {
    const {data, handleChange, classes, labelText} = props;
    return (
        <FormControlLabel
            className={classes.mobileSet}
            control={<Checkbox checked={data.checked} value={data.checked}
                               onChange={() => handleChange(data, labelText)}/>}
            label={data.key}
        />
    )
}

export default FilterItem;

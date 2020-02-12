import {useState} from 'react';
import {logger} from "../store/utils/logger";

export const useForm = (initialState, cbFunc) => {
    const [values, setValues] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault();
        cbFunc();
    }

    function handleChange({target: {name, value}}) {
        logger('Name', name);
        logger('Value', value);
        setValues({...values, [name]: value})
    }

    function resetForm() {
        setValues(initialState);
    }

    return [values, handleChange, handleSubmit, resetForm];
};

import {useState} from 'react';

export const useForm = (initialState, cbFunc) => {
    const [values, setValues] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault();
        cbFunc();
    }

    function handleChange({target: {name, value}}) {
        setValues({...values, [name]: value})
    }

    function resetForm() {
        setValues(initialState);
    }

    return [values, handleChange, handleSubmit, resetForm, setValues];
};

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const SuggestionCol = props => {
    console.log("sugCol", props)
    const [suggestions, setSuggestions] = useState(0)

    useEffect(() => {
        setSuggestions(props.rowData.requests.length)
    }, [props.rowData.requests.length]);

    return (
        <>
        {suggestions}
        </>
    )
}
export default SuggestionCol;
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from 'axios';

const SuggestionCol = props => {
    console.log("sugCol", props)
    console.log("IS DELETED", props.isDeleted)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const grant_id = props.rowData.id;
        axios.get(`https://grantly-staging.herokuapp.com/api/admin/suggestions/${grant_id}`, 
          {
            headers: {
              auth0id: props.currentUser.auth_id,
              authorization: `Bearer ${props.currentUser.token}`
            }
          }
        )
        .then(res => {
          setCount(res.data.length)
          console.log('AXIOS WORKED', res.data)
        })
        .catch(err => {
          console.log(err);
        })
      }, [count])

    return (
        <>
        {count}
        </>
    )
}

const mapStateToProps = state => {
    return {
        isDeleted: state.isDeleted,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {})(SuggestionCol);
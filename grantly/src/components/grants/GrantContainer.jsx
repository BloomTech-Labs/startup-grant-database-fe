import React, {useContext, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import {ActionsContext} from "../../context/ActionsContext";
import GrantShowcase from "./GrantShowcase";
import GrantList from "./list/GrantList";


function GrantContainer(props) {
    const allGrants = useSelector(state => state.grants.grants);
    const {favoriteGrants} = useSelector(state => state.user);
    const {showcase} = useSelector(state => state.grants);
    const actions = useContext(ActionsContext);
    const [allGrantMode] = useState(() => {
        return props.match.path === '/grants';
    });
    const [grants, setGrants] = useState(() => {
        if (allGrantMode) {
            return allGrants;
        } else {
            return favoriteGrants;
        }
    });

    useEffect(() => {
        if (allGrants.length === 0) {
            actions.grants.fetchGrants();
        }
    }, []);

    useEffect(() => {
        if (allGrantMode) {
            if (allGrants.length !== grants.length) {
                setGrants(allGrants);
            }
        } else {
            if (favoriteGrants.length !== grants.length) {
                setGrants(favoriteGrants);
            }
        }
    }, [allGrants, favoriteGrants]);

    if (!showcase) {
        return <Redirect to='/'/>
    }
    
    return (
        <>
            <GrantList grants={grants}/>
            <GrantShowcase showcase={showcase} />
        </>
    )
}

export default GrantContainer;

import React, {useContext, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ActionsContext} from "../../context/ActionsContext";
import GrantShowcase from "./GrantShowcase";


function GrantContainer(props) {
    const allGrants = useSelector(state => state.grants.grants);
    const {favoriteGrants} = useSelector(state => state.user);
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


    return (
        <>
            <GrantShowcase />
        </>
    )
}

export default GrantContainer;

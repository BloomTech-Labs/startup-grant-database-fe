import React, {useState, useEffect, useContext} from 'react';
import {Filters} from "../store/filters/filterTypes";
import {ActionsContext} from "../context/ActionsContext";
import {Actions} from "../store/useActions";

const NewFilters = () => {
    const actions: Actions = useContext(ActionsContext);
    const [filters, setFilters] = useState<Filters>({
        amount: [],
        geographic_region: [],
        domain_areas: [],
        admin_filters: []
    });

    useEffect(() => {
        if (actions) {
            actions.filters.changeFilter(filters);
        }
    }, [filters]);

    const grantFilters: Filters = {
        amount: [
            {min: 0, max: 1000, name: "Under $1,000"},
            {min: 1000, max: 5000, name: "$1,000-$5,000"},
            {min: 5000, max: 10000, name: "$5,000-$10,000"},
            {min: 10000, max: 100000000000, name: "$10,000+"},
        ],
        geographic_region: [
            "Global",
            "North America",
            "Europe",
            "South America",
            "Africa",
            "Asia",
            "Australia",
            "Other"
        ],
        domain_areas: ["Tech", "Agriculture", "Social", "Energy"],
        admin_filters: ["New", "Expired", "Suggestions"]
    }
};

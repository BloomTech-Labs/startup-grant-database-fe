import {Filters} from "../../store/filters/filterTypes";

export const filterFormState:Filters = {
    amount: [
        {
            key: 'Under $1,000',
            checked: false,
            values: {
                min: null,
                max: 1000
            }
        },
        {
            key: '$1,000-$5,000',
            checked: false,
            values: {
                min: 1000,
                max: 5000
            }
        },
        {
            key: '$5,000-$10,000',
            checked: false,
            values: {
                min: 5000,
                max: 10000
            }
        },
        {
            key: '$10,000+',
            checked: false,
            values: {
                min: 10000,
                max: null
            }
        },
    ],
    geographic_region: [
        {
            key: 'Global',
            checked: false
        },
        {
            key: 'North America',
            checked: false
        },
        {
            key: 'Europe',
            checked: false
        },
        {
            key: 'South America',
            checked: false
        },
        {
            key: 'Africa',
            checked: false
        },
        {
            key: 'Asia',
            checked: false
        },
        {
            key: 'Australia',
            checked: false
        },
        {
            key: 'Other',
            checked: false
        },
    ],
    domain_areas: [
        {
            key: 'Tech',
            checked: false
        },
        {
            key: 'Agriculture',
            checked: false
        },
        {
            key: 'Social',
            checked: false
        },
        {
            key: 'Energy',
            checked: false
        },
    ],
    admin_filters: [
        {
            key: 'New',
            checked: false
        },
        {
            key: 'Expired',
            checked: false
        },
        {
            key: 'Suggestions',
            checked: false
        },
    ]
};

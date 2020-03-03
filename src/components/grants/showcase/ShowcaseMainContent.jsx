import React from 'react';
import {Grid} from "@material-ui/core";
import ShowcaseFields from "./ShowcaseFields";

const mainDataContent = [
    {
        xs: 4,
        sm: 5,
        md: 2,
        title: 'Amount',
        subtitle: 'amount'
    },
    {
        xs: 4,
        sm: 5,
        md: 5,
        title: 'Amount Details',
        subtitle: 'amount_notes'
    },
    {
        xs: 4,
        sm: 5,
        md: 4,
        title: 'Deadline',
        subtitle: 'most_recent_application_due_date'
    },
    {
        xs: 4,
        sm: 5,
        md: 2,
        title: 'Region',
        subtitle: 'geographic_region'
    },
    {
        xs: 9,
        sm: 10,
        md: 5,
        title: 'Early Stage Funding Eligible?',
        subtitle: 'early_stage_funding'
    },
    {
        xs: 4,
        sm: 5,
        md: 4,
        title: 'Target Demographic',
        subtitle: 'target_entrepreneur_demographic'
    },
    {
        xs: 4,
        sm: 5,
        md: 4,
        title: 'Focus Area',
        subtitle: 'area_focus'
    },
    {
        xs: 9,
        sm: 10,
        md: 8,
        title: 'Sponsor',
        subtitle: 'sponsoring_entity'
    },
    {
        xs: 9,
        sm: 10,
        md: 12,
        title: 'Notes',
        subtitle: 'notes'
    },
];

function ShowcaseMainContent(props) {
    return (
        <Grid
            container
            justify='space-between'
            direction='row'
            spacing={1}
        >
            {mainDataContent.map(field => (<ShowcaseFields {...field} key={field.title} {...props} />))}
        </Grid>
    )
}

export default ShowcaseMainContent;

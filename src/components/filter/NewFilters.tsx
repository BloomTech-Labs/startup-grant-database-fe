import React from "react";
import { Button, Card, FormGroup, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import FilterGroup from "./FilterGroup";
import { useSelector } from "react-redux";
import { FilterFormState, FormState } from "../../store/filters/filterTypes";
import { AppState } from "../../store/rooterReducer";

interface IProps {
  landing: boolean;
  classes: any;
  setFilters: (filter: FilterFormState) => void;
  filters: FilterFormState;
}

const NewFilters = ({ landing, classes, setFilters, filters }: IProps) => {
  const { isModerator } = useSelector((state: AppState) => state.user);

  function handleChange(data: FormState, key: string): void {
    Object.keys(filters).forEach((eachKey) => {
      if (eachKey === key) {
        // @ts-ignore
        const updatedFilters = filters[key].map((filter: FormState) => {
          if (filter.key === data.key) {
            return { ...filter, checked: !filter.checked };
          } else {
            return filter;
          }
        });
        setFilters({ ...filters, [key]: updatedFilters });
      }
    });
  }

  const title = ["Grant Value", "Region", "Focus Area"];
  return (
    <Card className={classes.card} raised>
      <Typography className={classes.title} variant="h5" component="h2">
        {landing ? "Find Funding Now." : "Filter grants by:"}
      </Typography>
      <FormGroup className={classes.filterCard}>
        {console.log(filters)}
        {/* {Object.keys(filters).map((group, id) => ( */}
        <FilterGroup
          classes={classes}
          key={0}
          handleChange={handleChange}
          data={filters.amount}
          title={title[0]}
          labelText="amount"
        />
        <FilterGroup
          classes={classes}
          key={1}
          handleChange={handleChange}
          data={filters.geographic_region}
          title={title[1]}
          labelText="geographic_region"
        />
        <FilterGroup
          classes={classes}
          key={2}
          handleChange={handleChange}
          data={filters.area_focus}
          title={title[2]}
          labelText="area_focus"
        />
        {/* ))} */}
      </FormGroup>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={RouterLink}
        to="/grants"
        className={classes.landingButton}
      >
        Search Grants
      </Button>
    </Card>
  );
};

export default NewFilters;

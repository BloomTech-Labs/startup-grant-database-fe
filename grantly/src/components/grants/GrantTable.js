import React, { useEffect } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import Typography from "@material-ui/core/Typography";
import { fetchApi, adminFetchApi } from "../../actions";
import moment from 'moment';


export const GrantTable = (props) => {
  console.log('GrantTable props',props)

  props.data.forEach(grant => {
    grant.most_recent_application_due_date = 
      moment(grant.most_recent_application_due_date).format(
        "YYYY-MM-DD"
      ) === "Invalid date"
        ? undefined
        : moment(grant.most_recent_application_due_date).format(
            "YYYY-MM-DD"
      )
  })

  const [state, setState] = React.useState({
    // left: false,
    columns: [
      { title: "Name", field: "competition_name" },
      { title: "Amount", field: "amount", type: "numeric" },
      { title: "Deadline", field: "most_recent_application_due_date", type: "date" },
      // {
      //   title: "Grant Categories",
      //   field: "domain_areas",
      //   lookup: { "Environment": "Environment", 63: "Economic Opportunity" }
      // },
      {
        title: "Focus Area",
        field: "area_focus",
        lookup: { "Social Entreprenuership": "Social Entreprenuership" }
      },
      { title: "Sponsor", field: "sponsoring_entity" },
      { title: "Notes", field: "notes" }
    ],
    data: [
      {
        name: "Emergent Ventures",
        amount: "$1000",
        deadline: "Nov 18, 2020",
        category: "Environment",
        focus: 2,
        sponsor: "EcoRise Youth & City of Austin Office of Sustainability",
        notes:
          "The competition is a stage for undergraduate and MBA students to present business ideas and financial valuations to an audience of entrepreneurial leaders, senior venture capitalists, and top industry professionals from across North America."
      },
      {
        name: "Decapital",
        amount: "$2000",
        deadline: "Dec 20, 2019",
        category: 34,
        focus: 2,
        sponsor: "The Pacific Venture Capital"
      }
    ]
  });

  useEffect(() => {
    if (props.inAdmin) {
      console.log("yes");
      props.adminFetchApi(props.currentUser);
    } else if (props.data.length === 0) {
      props.fetchApi();
    } else  {
      // props.fetchApi();
    }
  }, []);

  // TODO: display a count of items needing to be reviewed
  // const needToBeReviewed = props.data.filter(
  //   grant => grant.is_reviewed === false
  // ).length;

  return (
    <div>
      <MaterialTable
        title="Editable Example"
        columns={state.columns}
        data={props.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
        zeroMinWidth
      />
    </div>
  );
}

const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants,
    grantStore: state.data,
    currentUser: state.currentUser,
    savedFilters: state.filters
  };
};

export default connect(
  mapStateToProps,
  { fetchApi, adminFetchApi }
)(GrantTable);

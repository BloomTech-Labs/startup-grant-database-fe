import React from "react";
import MaterialTable from "material-table";
import { homeStyles } from "../../styles/homeStyles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import ListIcon from "@material-ui/icons/List";
import Typography from "@material-ui/core/Typography";

export default function MaterialTableDemo() {
  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={homeStyles.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {["Detail View", "Table View"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <VerticalSplitIcon /> : <ListIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const [state, setState] = React.useState({
    left: false,
    columns: [
      { title: "Name", field: "name" },
      { title: "Amount", field: "amount", type: "numeric" },
      { title: "Deadline", field: "deadline", type: "date" },
      {
        title: "Category",
        field: "category",
        lookup: { 34: "Environment", 63: "Economic Opportunity" }
      },
      {
        title: "Focus",
        field: "focus",
        lookup: { 2: "Social Entreprenuership" }
      },
      { title: "Sponsor", field: "sponsor" },
      { title: "Notes", field: "notes" }
    ],
    data: [
      {
        name: "Emergent Ventures",
        amount: "$1000",
        deadline: "Nov 18, 2020",
        category: 63,
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

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
      <MaterialTable
        title="Editable Example"
        columns={state.columns}
        data={state.data}
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

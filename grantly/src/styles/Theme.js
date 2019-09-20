import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiCheckbox: {
      root: {
        padding: "4px"
      }
    }
  },

  palette: {
    primary: {
      main: "#3DB8B3"
    }
  },
  typography: {
    fontFamily: ["adobe-garamond-pro", "serif"].join(",")
  }
});

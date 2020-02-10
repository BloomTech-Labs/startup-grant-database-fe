import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
    overrides: {
        MuiCheckbox: {
            root: {
                padding: '4px'
            }
        },
        MuiCard: {
            root: {
                transition: "all .2s ease-in-out"
            }
        },
        MuiBox: {
            root: {
                padding: '0'
            }
        }
    },
    palette: {
        primary: {
            main: "#3DB8B3"
        },
        secondary: {
            main: "#F1603A"
        }
    },
    typography: {
        fontFamily: ["adobe-garamond-pro", "Nunito Sans", "serif"].join(",")
    }
});

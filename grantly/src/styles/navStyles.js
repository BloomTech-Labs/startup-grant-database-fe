import { makeStyles } from "@material-ui/core/styles";

export const navStyles = makeStyles(theme => ({
  logo: {
    display: "flex",
    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "1.6rem"
    // }
  },
  siteMap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginRight: theme.spacing(3),
    border: "1px solid #3CBBB1",
    borderRadius: "2px",
    backgroundColor: "#3CBBB1",
    color: "white",
    textTransform: "uppercase",
    padding: ".5em 2.5em",
    fontSize: "0.875rem",
    fontFamily: "Roboto",
    transition: "all .3s ease-in-out",
    width: '15em',
    height: '3.5em',
    marginLeft: '2.5em',
    '&:hover': {
      backgroundColor: "#83D7D1",
      color: 'white'
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: '0',
      padding: ".5em 1em",
      width: '5em',
    },
  },
  navLink: {
    marginRight: theme.spacing(3),
    color: "#3CBBB1",
    textTransform: "uppercase",
    padding: ".5em 2.5em",
    fontSize: "0.875rem",
    fontFamily: "Roboto",
    width: '15em',
    height: '3.5em',
    marginLeft: '2.5em',
    '&:hover': {
      textDecoration: "underline"
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(1),
      marginLeft: '0',
      padding: ".5em .5em",
    }
  },
  submitNavButton: {
    marginRight: theme.spacing(3),
    color: "#fff",
    fontFamily: "Nunito Sans"
  },
  title: {
    textAlign: "left",
    marginLeft: "20px",
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      marginLeft: "5px"
    }
  },
  navbar: {
    background: "#fff",
    flexGrow: 1,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
    // marginBottom: "2em",
    [theme.breakpoints.down("xs")]: {
      position: "fixed",
      padding: "0",
      // boxShadow: "none"
    },
  },
  log: {
    color: "#fff",
    fontFamily: "Nunito Sans"
  },
  logout: {
    color: "#000",
    fontFamily: "Nunito Sans"
  },
  menu: {
    width: "2.5em",
    height: "2em",
    padding: "0"
  },
  signup: {
    marginRight: theme.spacing(3),
    color: "#3DB8B3",
    fontFamily: "Nunito Sans"
  },
  titleLink: {
    flexGrow: 1,
    textDecoration: "none"
  },
  link: {
    textDecoration: "none"
  },
  active: {
    color: "#3DB8B3"
  },
  tabs: {
    position: "fixed",
    marginTop: "3em"
  },
  drawer: {
    display: "flex",
    marginTop: "1em",
    fontSize: "2rem",
    height: "100%",
    width: "20rem"
  },
  links: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    width: "100%"
  },
  drawerLink: {
    margin: ".25em",
    // padding: ".5em",
    color: "#696969",
  },
  helloUser: {
    fontFamily: "Nunito Sans",
    padding: '15px'
  }, 
  drawerStlye: {
    paddingLeft: '40px',
    margin: '0.5em 0em',
    '&:hover': {
    backgroundColor: '#83D7D1'
  }
  },
  icon: {
    paddingLeft: '0.5em'
  },
  navLoading: {
    margin: '2em',
    fontFamily: "Nunito Sans"
  }
}));

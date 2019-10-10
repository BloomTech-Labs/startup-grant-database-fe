import { makeStyles } from "@material-ui/core/styles";
import { height } from "@material-ui/system";

const formStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    // padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6)
      // padding: theme.spacing(3)
    }
  },

  topBox: {
    padding: theme.spacing(3),
    // background: "primary"
    "& h1": {
      fontSize: "2.8rem",
      fontFamily: "adobe-garamond-pro",
      fontWeight: 400,
      // margin: "1rem",
      color: "white"
      // padding: "30px"
    },
    "& p": {
      fontFamily: "Roboto",
      color: "white",
      fontSize: "1.3rem",
      fontWeight: 200,
      lineHeight: 1.5
    },
    // marginTop: "80px",
    // paddingTop: "42px",
    background: "#3DB8B3"
    // padding: "2rem"
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  bottomBox: {
    padding: theme.spacing(2, 6, 1, 2)
  },
  submit: {
    width: "30%",
    height: "4em",
    color: "white"
  },
  back: {
    width: "30%",
    height: "4em",
    border: "1px solid black",
    color: "white"
  },
  dropDown: {
    width: 200
  }

  // // root: {
  // //   flexGrow: 1
  // // },
  // grid: {
  //   // justifyContent: "space-between",
  //   display: "flex",
  //   // flexDirection: "column",
  //   maxWidth: "50%"
  //   // height: "80%"
  //   // zIndex: 0
  // },
  // topBox: {
  //   // background: "primary"
  //   "& h1": {
  //     fontSize: "2.8rem",
  //     fontFamily: "adobe-garamond-pro",
  //     fontWeight: 400,
  //     margin: "1rem",
  //     color: "white",
  //     padding: "30px"
  //   },
  //   "& p": {
  //     fontFamily: "Roboto",
  //     color: "white",
  //     fontSize: "1.3rem",
  //     fontWeight: 200,
  //     lineHeight: 1.5
  //   },
  //   marginTop: "80px",
  //   paddingTop: "42px",
  //   background: "#3DB8B3",
  //   padding: "2rem",
  //   // paddingTop: "12rem",
  //   // height: "100vh",
  //   [theme.breakpoints.down("sm")]: {
  //     height: "30%",
  //     background: "#3DB8B3",
  //     paddingTop: "3rem",
  //     paddingBottom: "3rem",
  //     width: "100%"
  //   }
  // },
  // bottomBox: {
  //   width: "100%",
  //   paddingTop: "30px"
  // },
  // form: {
  //   display: "flex",
  //   flexDirection: "column",
  //   margin: "0 auto",
  //   height: "70vh",
  //   // width: "80%",
  //   justifyContent: "space-around"
  // },
  // formContainer: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   justifyContent: "space-between"
  //   // justifyContent: "space-evenly"
  //   // margin: "10%"
  //   // margin: "2rem"
  // },
  // notes: {
  //   width: "50%"
  // },
  // inputText: {
  //   // marginLeft: theme.spacing(1)
  //   // marginRight: theme.spacing(1)
  //   marginLeft: "30px",
  //   marginRight: "30px"
  // },
  // dense: {
  //   // marginTop: theme.spacing(2)
  // },
  // dropDown: {
  //   width: 200
  // },
  // // leftBox: {
  // //   // background: "primary"
  // //   "& h1": {
  // //     fontSize: "2.8rem",
  // //     fontFamily: "adobe-garamond-pro",
  // //     fontWeight: 400,
  // //     margin: "1rem",
  // //     color: "white",
  // //     padding: "30px"
  // //   },
  // //   "& p": {
  // //     fontFamily: "Roboto",
  // //     color: "white",
  // //     fontSize: "1.3rem",
  // //     fontWeight: 200,
  // //     lineHeight: 1.5
  // //   },
  // //   paddingTop: "70px",
  // //   background: "#3DB8B3",
  // //   padding: "2rem",
  // //   paddingTop: "12rem",
  // //   height: "100vh",
  // //   [theme.breakpoints.down("sm")]: {
  // //     height: "30%",
  // //     background: "#3DB8B3",
  // //     paddingTop: "3rem",
  // //     paddingBottom: "3rem",
  // //     width: "100%"
  // //   }
  // // },
  // submit: {
  //   width: "30%",
  //   height: "4em",
  //   color: "#fff"
  // },
  // label: {
  //   color: "#fff"
  // }
}));
// const formStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   grid: {
//     // justifyContent: "space-between",
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "100%"
//     // height: "80%"
//     // zIndex: 0
//   },
//   topBox: {
//     // background: "primary"
//     "& h1": {
//       fontSize: "2.8rem",
//       fontFamily: "adobe-garamond-pro",
//       fontWeight: 400,
//       margin: "1rem",
//       color: "white",
//       padding: "30px"
//     },
//     "& p": {
//       fontFamily: "Roboto",
//       color: "white",
//       fontSize: "1.3rem",
//       fontWeight: 200,
//       lineHeight: 1.5
//     },
//     marginTop: "80px",
//     paddingTop: "42px",
//     background: "#3DB8B3",
//     padding: "2rem",
//     // paddingTop: "12rem",
//     // height: "100vh",
//     [theme.breakpoints.down("sm")]: {
//       height: "30%",
//       background: "#3DB8B3",
//       paddingTop: "3rem",
//       paddingBottom: "3rem",
//       width: "100%"
//     }
//   },
//   bottomBox: {
//     paddingTop: "30px"
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     margin: "0 auto",
//     height: "70vh",
//     // width: "80%",
//     justifyContent: "space-around"
//   },
//   formContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between"
//     // justifyContent: "space-evenly"
//     // margin: "10%"
//     // margin: "2rem"
//   },
//   notes: {
//     width: "50%"
//   },
//   inputText: {
//     // marginLeft: theme.spacing(1)
//     // marginRight: theme.spacing(1)

//     marginLeft: "30px",
//     marginRight: "30px"
//   },
//   dense: {
//     // marginTop: theme.spacing(2)
//   },
//   dropDown: {
//     width: 200
//   },
//   // leftBox: {
//   //   // background: "primary"
//   //   "& h1": {
//   //     fontSize: "2.8rem",
//   //     fontFamily: "adobe-garamond-pro",
//   //     fontWeight: 400,
//   //     margin: "1rem",
//   //     color: "white",
//   //     padding: "30px"
//   //   },
//   //   "& p": {
//   //     fontFamily: "Roboto",
//   //     color: "white",
//   //     fontSize: "1.3rem",
//   //     fontWeight: 200,
//   //     lineHeight: 1.5
//   //   },
//   //   paddingTop: "70px",
//   //   background: "#3DB8B3",
//   //   padding: "2rem",
//   //   paddingTop: "12rem",
//   //   height: "100vh",
//   //   [theme.breakpoints.down("sm")]: {
//   //     height: "30%",
//   //     background: "#3DB8B3",
//   //     paddingTop: "3rem",
//   //     paddingBottom: "3rem",
//   //     width: "100%"
//   //   }
//   // },
//   submit: {
//     width: "30%",
//     height: "4em",
//     color: "#fff"
//   },
//   label: {
//     color: "#fff"
//   }
// }));

export default formStyles;

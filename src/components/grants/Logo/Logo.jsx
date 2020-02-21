import React from "react";
import {ReactComponent as DefaultLogo} from "./defaultGrantLogo.svg";

const modifiedUrl = oldUrl => {
    const loc = new URL(oldUrl);
    return loc.hostname;
};

export const Logo = (props) => {
    // if (props.grant.use_logo) {
    //     return <img src={props.grant.logo} alt="logo"/>
    // }
    return <DefaultLogo/>
};

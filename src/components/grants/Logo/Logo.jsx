import React, { useEffect, useState } from "react";
import { ReactComponent as DefaultLogo } from "./defaultGrantLogo.svg";
import axios from "axios";

const modifiedUrl = oldUrl => {
  const loc = new URL(oldUrl);
  return loc.hostname;
};

export const Logo = props => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    axios
      .get(`https://logo.clearbit.com/${modifiedUrl(props.url)}?size=75`)
      .then(res => {
        console.log("res.config.url", res.config.url);
        setImageUrl(res.config.url);
      })
      .catch(err => {
        console.log("logo not returned", err);
        setImageUrl("");
      });
  }, []);

  return imageUrl === "" ? <DefaultLogo /> : <img src={imageUrl} alt="logo" />;
};

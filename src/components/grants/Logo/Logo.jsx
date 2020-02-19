import React, { useEffect, useState } from "react";
import { ReactComponent as DefaultLogo } from "./defaultLogo.svg";
import axios from "axios";

export const Logo = props => {
  let domain = "fuelmade.com";
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    axios
      .get(`https://logo.clearbit.com/${domain}?size=75`)
      .then(res => {
        setImageUrl(res.config.url);
      })
      .catch(err => {
        console.log("logo not returned", err);
      });
  }, [domain]);

  console.log("the image url", imageUrl);

  return <img src={imageUrl} alt="logo" />;
};

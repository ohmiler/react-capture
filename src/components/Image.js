import React from "react";

const Image = ({ url, desc }) => (
  <li>
    <a href={url} target="_blank"><img src={url} alt={desc} /></a>
  </li>
);

export default Image;
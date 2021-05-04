import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;
  console.log("from gallery component", results)
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
      images = results.map(image => {
      let id = image.id;
      let desc = image.alt_description;
      let url = image.urls.regular;
      return <Image url={url} key={id} alt={desc} />;
    });
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
    </div>
  );
};

export default Gallery;
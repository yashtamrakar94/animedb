import React from "react";

export const DetailComponent = (props) => {
  const { data } = props;
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <span>
        <img src={data.data.images.jpg.large_image_url} alt="Placeholder"></img>
      </span>
      <span style={{ width: "50%" }}>
        <p>Title: {data.data.title_english}</p>
        <p>Status: {data.data.status}</p>
        <p>Year: {data.data.year}</p>
        <p>Synopsis: {data.data.synopsis}</p>

        <a href={data.data.url} target="_blank" rel="noopener noreferrer">
          <strong>More Details</strong>
        </a>
      </span>
    </div>
  );
};

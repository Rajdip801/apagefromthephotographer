import React from "react";
import "../style/adspace.css"
const AdSpace = ({ ads }) => {
  return (
    <div className="ad">
      <h2>{ads.title}</h2>
      <p>{ads.description}</p>
    </div>
  );
};

export default AdSpace;
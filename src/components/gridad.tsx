import React from "react";
import "../style/gridad.css";

const Gridads = ({ gridads }) => {
  return (
    <div className="gridadsection">
      <div className="gridad">
        {gridads.map((ad, index) => (
          <div key={index} className="space-1">
            <span>{ad.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gridads;
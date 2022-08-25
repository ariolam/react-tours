import React from "react";
import "./Tour.css";

function Tour({ tour }) {
  return (
    <div className="tour container mt-3 border border-1">
      <div className="row">
        <div className="col-6">
          <img
            src={tour.image}
            alt={tour.name}
            className="tour-img mt-4 rounded float-start"
          />
        </div>
        <div className="col-6">
          <h4> {tour.name} </h4>
          <p>{tour.info}</p>
          <h5> Price : {tour.price}</h5>
        </div>
      </div>
    </div>
  );
}

export default Tour;

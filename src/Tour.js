import React from "react";
import "./Tour.css";

function Tour({ tour, removeTour }) {
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
          <button className="mb-3" onClick={() => removeTour(tour.id)}>
            {" "}
            Not Interested{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tour;

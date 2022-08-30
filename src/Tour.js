import React, { useState } from "react";
import "./Tour.css";

function Tour({ tour, removeTour }) {
  const [showMore, setShowMore] = useState(false);

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
          <p>
            {showMore ? tour.info : `${tour.info.substring(0, 200)}`}
            <button className="show-btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
            </button>{" "}
          </p>
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

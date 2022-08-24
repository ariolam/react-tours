import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import "./Tours.css";

function Tours() {
  const [tours, setTours] = useState();

  const fetchTours = async () => {
    const response = await fetch(
      "https://course-api.com/react-tours-project"
    ).then((response) => response.json());
    setTours(response);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className="tours container">
      <div className="row">
        <div className="col">
          {tours.map((tour) => (
            <div className="item-container"> {tour.name}</div>
          ))}
          <Tour />
        </div>
      </div>
    </div>
  );
}
export default Tours;

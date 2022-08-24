import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import "./Tours.css";

function Tours() {
  const [tours, setTours] = useState();

  const fetchTours = async () => {
    const response = await fetch(
      "https://course-api.com/react-tours-project"
    ).then((response) => response.json());
    console.log("response", response);
    setTours(response);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <div className="tours container">
      <div className="row">
        <div className="col">
          {/* <h2> Hello World</h2> */}
          {tours?.map((tour) => (
            <div key={tour.id} className="item-container">
              {" "}
              {tour.name}
            </div>
          ))}
          <Tour tours={tours} />
        </div>
      </div>
    </div>
  );
}

export default Tours;

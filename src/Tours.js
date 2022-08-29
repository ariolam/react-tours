import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import "./Tours.css";

function Tours() {
  const [tours, setTours] = useState();

  function removeTour(id) {
    setTours([...tours].filter((tour) => tour.id !== id));
  }
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
        {tours?.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
}

export default Tours;

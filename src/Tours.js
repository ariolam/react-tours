import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import "./Tours.css";

function Tours() {
  const [tours, setTours] = useState();
  const [loaded, setLoaded] = useState(false);

  function removeTour(id) {
    setTours([...tours].filter((tour) => tour.id !== id));
  }
  const fetchTours = async () => {
    setLoaded(true);
    const response = await fetch(
      "https://course-api.com/react-tours-project"
    ).then((response) => response.json());
    setTours(response);
    setLoaded(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (tours?.length === 0) {
    return (
      <div>
        <h1> There are no available tours </h1>;
        <button onClick={fetchTours}> Refresh </button>
      </div>
    );
  }
  return (
    <div className="tours container">
      <div className="row">
        {loaded ? (
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only"> Loading...</span>
          </div>
        ) : (
          <ul>
            {tours?.map((tour) => (
              <Tour key={tour.id} tour={tour} removeTour={removeTour} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Tours;

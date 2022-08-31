import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import "./Tours.css";

function Tours() {
  const [tours, setTours] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function removeTour(id) {
    setTours([...tours].filter((tour) => tour.id !== id));
  }
  const fetchTours = async () => {
    // setLoading(true);
    const response = await fetch(
      "https://course-api.com/react-tours-project"
    ).then((response) => response.json());
    setTours(response);
  };
  useEffect(() => {
    fetchTours();
    setLoading(false);
    setError(true);
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
        {error && <p> something went wrong</p>}
        {loading ? (
          <p> Loading </p>
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

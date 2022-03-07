import React from "react";
import _ from "lodash";

import Row from "./Row";
import Banner from "./Banner";
import requests from "../requests";
import Cat from "../components/Cat";
import "./Home.css";

export default function Home({ cats, setCats }) {
  const handleRemoveCat = (id) => {
    setCats(cats.filter((cat) => cat.id !== id));
  };

  return (
    <>
      <Banner />
      {/* FROM API - NB: More row's can be added, á la Netflix model, depends on API results, see 'requests' */}
      <Row title="BREEDS" fetchUrl={requests.fetchRandomCat} isLargeRow />
      <Row title="Rare Cats" fetchUrl={requests.fetchRandomCat} />

      {/* EDITABLE CATS */}
      <h2 className="my-cat-title">My Cats</h2>
      <div className="my-cat-posters">
        {!_.isEmpty(cats) ? (
          cats.map((cat) => (
            <Cat key={cat.id} {...cat} handleRemoveCat={handleRemoveCat} />
          ))
        ) : (
          <p>No Cats listed. Please add some.</p>
        )}
      </div>
    </>
  );
}

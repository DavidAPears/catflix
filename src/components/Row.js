import React, { useState, useEffect } from "react";

import axios from "../axios";
import "./Row.css";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setCats(request.data);
      setLoading(false);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // NB: dependent. usEffect runs everytime variable 'fetchUrl' changes

  const handleClick = (cat) => {
    const url = cat.wikipedia_url;
    window.open(url, "_blank");
  };

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="row">
          <h2>{title}</h2>
          <div className="row__posters">
            {cats.map((cat) => (
              <>
                <h3
                  className={`rotate__text ${
                    isLargeRow && "rotateLarge__text"
                  }`}
                >
                  {cat.name}
                </h3>
                <img
                  key={cat.id}
                  onClick={() => handleClick(cat)}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={
                    cat?.image?.url ||
                    `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F131941464059438262%2F&psig=AOvVaw3xkTl8uZ1LLhw2BzN8mi9f&ust=1646742211635000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJC0t_f-s_YCFQAAAAAdAAAAABAV`
                  }
                  alt={cat.name}
                />
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

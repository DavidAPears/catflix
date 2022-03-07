import React, { useEffect, useState } from "react";

import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

export default function Banner() {
  const [catHeader, setCatHeader] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchRandomCat);
      setCatHeader(
        request.data[Math.floor(Math.random() * request.data.length - 1)]
      );
      setLoading(false);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function handleClick() {
    const url = catHeader.wikipedia_url;
    window.open(url, "_blank");
  }

  function setBackgroundImage() {
    let pic = "../assets/images/redLoader.gif";
    let imageUrl = catHeader.image.url;
    if (catHeader.image.url !== undefined) {
      return imageUrl;
    } else {
      return pic;
    }
  }

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${setBackgroundImage()})`,
          }}
        >
          <div className="banner__contents">
            <h1 className="banner__title">{catHeader.name}</h1>
            <div className="banner__buttons">
              <button className="banner__button" onClick={() => handleClick()}>
                Breed Info
              </button>
            </div>
            <h1 className="banner__description">
              {truncate(catHeader?.description, 250)}
            </h1>
          </div>
          <div className="banner__fadeBottom" />
        </header>
      )}
    </>
  );
}

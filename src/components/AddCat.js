import React from "react";
import { useNavigate } from "react-router-dom";

import CatForm from "./CatForm";
import Banner from "./Banner";

const AddCat = ({ cats, setCats }) => {
  const navigate = useNavigate();
  const handleOnSubmit = (cat) => {
    setCats([cat, ...cats]);
    navigate("/");
    console.log("Cat List from Add Cat: ", cats);
  };

  return (
    <React.Fragment>
      <Banner />
      <CatForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCat;

import React from "react";
import CatForm from "./CatForm";
import { useParams, useNavigate } from "react-router-dom";

import Banner from "./Banner";

const EditCat = ({ history, cats, setCats }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const catToEdit = cats.find((cat) => cat.id === id);

  const handleOnSubmit = (cat) => {
    const filteredCats = cats.filter((cat) => cat.id !== id);
    setCats([cat, ...filteredCats]);
    navigate("/");
  };

  return (
    <React.Fragment>
      <Banner />
      <CatForm cat={catToEdit} handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default EditCat;

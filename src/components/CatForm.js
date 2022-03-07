import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import "./CatForm.css";
import UploadButton from "./UploadButton";

const CatForm = (props) => {
  const [cat, setCat] = useState({
    name: props.cat ? props.cat.name : "",
    description: props.cat ? props.cat.description : "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setFile] = useState(null);
  const { name, description } = cat;
  console.log("File :", file);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, description];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const cat = {
        id: uuidv4(),
        name,
        description,
        date: new Date(),
        image: file,
      };
      props.handleOnSubmit(cat);
    } else {
      errorMsg = "Please fill out all the fields";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCat((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-form">
      <h2 className="main-form-title">Add Or Edit A Cat</h2>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <UploadButton setFile={setFile} />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Cat Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Enter name of cat"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter description of cat"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CatForm;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Cat.css";

//  ToDo: Allow user to add and render individual cat image

const Cat = ({ id, image, name, description, date, handleRemoveCat }) => {
  const navigate = useNavigate();
  return (
    <Card className="cat">
      <Card.Body className="cat-card">
        <img
          key={id}
          className={`cat__poster`}
          src={image || `https://cdn2.thecatapi.com/images/13MkvUreZ.jpg`}
          alt="cat"
        />
        <Card.Title className="cat-title">{name}</Card.Title>
        <div className="cat-details">
          <div>{description}</div>
          <div>Added {new Date(date).toDateString()}</div>
        </div>
        <div className="card__buttons">
          <button
            className="card__button"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit
          </button>
          <button className="card__button" onClick={() => handleRemoveCat(id)}>
            Delete
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cat;

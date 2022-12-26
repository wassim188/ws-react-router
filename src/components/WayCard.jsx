import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function WayCard({ title, img, category, rate, cast, date, id }) {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="bg-dark text-white big-show">
        <Card.Img variant="top" src={img} style={{ height: "360px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>Category: {category}</Card.Subtitle>
          <br />
          <Card.Subtitle>🌟Rate: {rate}</Card.Subtitle>
          <br />
          <Card.Subtitle>Cast: {cast} </Card.Subtitle>
          <br />
          <Card.Subtitle>Date: {date}</Card.Subtitle>
          <br />
          <Button variant="danger">
            <Link to={`/product/${id}`}>Ditails</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WayCard;

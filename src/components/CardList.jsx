import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
function CardList({ title, img, rate, date ,id}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} style={{ height: "428px" }} />
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text>
            <h5> ⭐:{rate}</h5>
            <h5>{date}</h5>
          </Card.Text>
          <Button variant="danger">
            <Link to={`/product/${id}`}>watch here</Link>
          </Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardList;

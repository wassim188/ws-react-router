import React from 'react';
import "./Style.css";
import {useParams} from "react-router-dom";
import { data } from "../data";
import Card from "react-bootstrap/Card";
function WatchPage() {
    const params = useParams() 
    const product= data.find((elt) => elt.id === params.id)
    console.log("product",product);
  return (
    <div className="Watch-container">
      <div className="Watch-movie">
        <Card className="bg-dark text-white">
          <Card.Img src={product.img} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
}

export default WatchPage
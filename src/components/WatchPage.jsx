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
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Text>
              <h3>Plot</h3>
              {product.src}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default WatchPage
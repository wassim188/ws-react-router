import React from "react";
import "./Style.css";
import { useParams } from "react-router-dom";
import { data } from "../data";
import ReactPlayer from "react-player";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
function WatchPage() {
  const params = useParams("");
  const product = data.find((elt) => elt.id === params.id);
  console.log("product", product);
  return (
    <div className="Watch-container">
      <div className="Watch-movie">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Image</th>
              <th>Trailer</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>
                <Image src={product.img} style={{ width: "270px" }} />
              </th>
              <th>
                <ReactPlayer url={product.src} controls={true} />
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Category:</th>
              <th>{product.category}</th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
}

export default WatchPage;

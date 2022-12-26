import React from "react";
import ReactStars from "react-rating-stars-component";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
function Navmain({ setSearch, setRating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.freepnglogos.com/uploads/w-logo/red-circle-w-letter-logos-get-wrapped-official-website-1.png"
              width="40"
              height="40"
              className="d-inline-block align-top "
            />{" "}
            Movies Way
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="link">
              Home
            </Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="Movie" className="link">
              Movies
            </Link>
          </Nav>
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={27}
            activeColor="#e50000"
          />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
          <Navbar.Brand></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navmain;

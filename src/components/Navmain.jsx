import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import ReactStars from "react-rating-stars-component";

function NavMain({ setSearch, setRating }) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  return (
    <div>
      <Navbar bg="light" expand="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM8dfF-7ewBXEKiiQFaky6GE8x1ZgxJaMng&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Anime MG
          </Navbar.Brand>
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
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
            </Nav>
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

              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavMain;

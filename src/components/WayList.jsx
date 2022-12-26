import React, { useState } from "react";
import WayCard from "./WayCard";
import "./Style.css";
import { Button, Modal, Form } from "react-bootstrap";
function WayList({ data, search, rating, setMovie }) {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({});

  console.log("newmovie", newMovie);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    setMovie([...data, newMovie]);
    handleClose();
  };
  return (
    <div className="movie-container">
      <h1 className="list-m">Movie List</h1>
      <Button
        className="add-items"
        variant="outline-danger"
        onClick={handleShow}
      >
        Add Movie
      </Button>
      <div className="movie-items">
        {data
          ?.filter((elt) =>
            elt.title.toLowerCase().includes(search.toLowerCase())
          )
          .filter((elt) => (rating ? elt.rate == rating : elt))
          .map((book) => (
            <WayCard {...book} />
          ))}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form onChange={(e) => handleChange(e)}>
            <Form.Group className="mb-3">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control placeholder="Movie Title" name="title" />
              <Form.Text className="text-muted">
                We'll never share your Movie with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Movie Poster</Form.Label>
              <Form.Control
                placeholder="paste your poster link here"
                name="img"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                placeholder="set the category here"
                name="category"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rate</Form.Label>
              <Form.Control name="rate" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cast</Form.Label>
              <Form.Control placeholder="movie's cast" name="cast" />
            </Form.Group>
            <Form.Label>Release Date</Form.Label>
            <Form.Control type="date" name="date" autoFocus />
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" type="button" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default WayList;

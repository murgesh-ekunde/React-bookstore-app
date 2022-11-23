import React from "react";
import Book from "./book";
import bookList from "./bookList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./books.css"

function bookComponent() {
  return (
  <div id="bookLists">
    <Container fluid>
      <Row>
        {bookList.map((bookItem) => (
          <Col lg={4} md={6}>
            <Book
              name={bookItem.name}
              image={bookItem.image}
              summary={bookItem.summary}
              rating={bookItem.rating}
              language={bookItem.language}
              Link={bookItem.Link} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
)}

export default bookComponent
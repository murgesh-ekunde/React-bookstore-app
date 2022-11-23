import React, { useState } from "react";
import { Button } from "@mui/material";
import Card from "react-bootstrap/Card";
import "./books.css";
import Counter from "../counter";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const book = (props) => {
 
  return (
    <div className="books">
      <Card 
        style={{
          height: "50rem",
          width: "24rem",
          boxShadow: "0 14px 28px #a3b7ca",
        }}
      >
        <Card.Header style={{ height:"55px", background:"#a3b7ca", textAlign: "center", color:"#3b6791" }}>
          <b>{props.name}</b>
        </Card.Header>
          <Card.Img id="bookImage" variant="top" src={props.image} />
          <Card.Body>
              <Card.Text>
                <b>Summary: </b> <br></br><ReadMore>{props.summary}</ReadMore>
              </Card.Text>
              <Card.Text>
                <b>Ratings: </b> {props.rating}
              </Card.Text>
              <Card.Text>
                <b>Language: </b>
                {props.language}
              </Card.Text>
              <div className="buy-button">
              <Button variant="outlined">
                <a href={props.Link}>Buy Now</a>
              </Button>
              <Counter />
              </div>      
          </Card.Body>
      </Card>
    </div>
  );
};

export default book;

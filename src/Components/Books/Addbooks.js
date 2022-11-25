import React from 'react'
import { useState } from 'react'
import { Button } from '@mui/material';
import bookList from './bookList';
import "./books.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Navigate } from 'react-router-dom';

function Addbooks({newBookList, setNewBookList}) {
    
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [link, setLink] = useState("");

  return (
    <div className='bookForm'>
        To add new book, please fill below form.

    <InputGroup className="mb-3">
        <InputGroup.Text id="textip">Book Name</InputGroup.Text>
        <Form.Control id="filled-basic" 
        label="Book Name" 
        variant="filled" 
        onChange={(event)=> setName(event.target.value)} />
    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroup.Text id="textip">Book Poster URL</InputGroup.Text>
        <Form.Control  
        id="filled-basic" 
        label="Enter Book Cover url" 
        variant="filled" 
        onChange={(event)=> setImage(event.target.value)} />
    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroup.Text id="textip">Ratings</InputGroup.Text>
        <Form.Control  
        id="filled-basic" 
        label="Enter Book Rating" 
        variant="filled" 
        onChange={(event)=> setRating(event.target.value)} />
    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroup.Text id="textip">Summary</InputGroup.Text>
        <Form.Control 
        id="filled-basic" 
        label="Enter Book Summary" 
        variant="filled" 
        onChange={(event)=> setSummary(event.target.value)} />
    </InputGroup>

    <InputGroup className="mb-3">
        <InputGroup.Text id="textip">Buy LInk</InputGroup.Text>
        <Form.Control 
        id="filled-basic" 
        label="Enter Book Link" 
        variant="filled" 
        onChange={(event)=> setLink(event.target.value)} />
    </InputGroup>

    <Button 
        variant="outlined"
        onClick={()=>{
        const newBook = {
                name:name,
                image:image,
                rating:rating,
                summary:summary,
                link:link
        }
        setNewBookList([...bookList, newBook])
        Navigate("/books")
    }}
        >
        Submit Book
    </Button>
    </div>
  )
}

export default Addbooks
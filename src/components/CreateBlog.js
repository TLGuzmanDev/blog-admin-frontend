import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container } from 'react-bootstrap';

function CreateBlog() {
  const [input, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <Container>
      <h1>Create New Blog</h1>
      <textarea
        rows="10"
        cols="50"
        value={input}
        onChange={handleInput}
      ></textarea>
      <h2>Output</h2>
      <Container className="bg-white">
        <ReactMarkdown source={input} />
      </Container>
    </Container>
  );
}

export default CreateBlog;

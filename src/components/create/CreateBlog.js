import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Form, Tabs, Tab, Button } from 'react-bootstrap';

import './create.css';

function CreateBlog({ createPost }) {
  const [key, setKey] = useState('editor');
  const [body, setBody] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost({ title, body });
  };

  const handleReset = () => {
    setTitle('');
    setBody('');
  };

  return (
    <Container fluid>
      <h1 className="text-center">Create Blog Post</h1>
      <hr />
      <Tabs
        id="controlled-tab"
        className="nav-justified mt-3"
        activeKey={key}
        onSelect={(key) => setKey(key)}
      >
        <Tab
          className="bg-white border border-top-0"
          eventKey="editor"
          title="Editor"
        >
          <Form className="p-3" onSubmit={handleSubmit}>
            <Form.Group controlId="markdownTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                as="input"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="markdownBody">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows="10"
                placeholder="Body"
                value={body}
                onChange={(event) => setBody(event.target.value)}
                required
              />
            </Form.Group>

            <div className="clearfix">
              <div className="float-right">
                <Button
                  className="mr-1"
                  variant="secondary"
                  type="button"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </div>
            </div>
          </Form>
        </Tab>
        <Tab
          className="bg-white border border-top-0"
          eventKey="preview"
          title="Preview"
        >
          <div className="preview bg-white p-2">
            <ReactMarkdown source={`${title}\n${body}`} />
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default CreateBlog;

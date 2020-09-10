import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Prompt({ deletePost }) {
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    deletePost();
    setShow(false);
  };

  return (
    <>
      <Button variant="danger" size="sm" onClick={() => setShow(true)}>
        Delete
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete this post? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Prompt;

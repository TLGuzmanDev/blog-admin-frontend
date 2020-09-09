import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Form, Tabs, Tab, Button } from 'react-bootstrap';

import './create.css';

const defaultTitle = `# Aversos bracchiaque inplicat Phrygum cervum`;
const defaultBody = `## Et silendo aures

Lorem markdownum et nomen prosit ut Sole tenero *dedit tauri tecta*. Tecta ut
modo [annos](http://adhuc.io/), furores videt coniuge eadem flammas exstinctaque
moenia ratibusque, ventos in gemitus prosunt vellera! Cretenque potens perimet.

## Humi rubore inscripta

Viri quas parte pelagi. Cervice flet tum domoque duorum coniunx: **ad**:
sistitur Clymene: **est**. Spes stratis parvas in et est montibus, o motus
quacumque furit quaeratur antris ille, poterat Medusae.

Secretaque nondum apulus dentibus referam iam rapiam fidem; spretae vos, nec pro
fessos Minyae figuram quod. Corpore tamen Athenae picto victus rumpere Phaethon
recusat bibebatur silva, metuque. Properant ne nisi ardent Cithaeron et facit,
capillis *parente est* paelex, cum undique. Vivam ulterius aevi.

## Totidem ubi litore labefactaque iaculum

Utque ubi iugulum feram an iampridem opto nubemque ablata perpetuumque unda. Pro
vini: haut dumque est sola altera gradientis aeternum. Ut lentum fugiebant esse
sitim qui submisso occupat placet Pedasus nomen. Puer neque omnes florentis
velamina quod monstraverat talia.

1. Esse atque lacrimae
2. Colla viminis
3. Effice ventris qualibet praeterit poteram Troia
4. Adit lacertos`;

function CreateBlog({ createPost }) {
  const [key, setKey] = useState('editor');
  const [body, setBody] = useState(defaultBody);
  const [title, setTitle] = useState(defaultTitle);

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
      <h1 className="text-center">Create New Blog Post</h1>
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
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="markdownBody">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows="10"
                value={body}
                onChange={(event) => setBody(event.target.value)}
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
          <div>
            <div className="preview bg-white p-2">
              <ReactMarkdown source={`${title}\n${body}`} />
            </div>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default CreateBlog;

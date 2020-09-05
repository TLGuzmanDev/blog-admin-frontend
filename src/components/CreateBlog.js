import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Form, Tabs, Tab, Button } from 'react-bootstrap';

import './create.css';

const defaultString = `# Aversos bracchiaque inplicat Phrygum cervum

## Et silendo aures

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

function CreateBlog() {
  const [key, setKey] = useState('editor');
  const [input, setInput] = useState(defaultString);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  const handleReset = () => {
    setInput('');
  };

  return (
    <Container>
      <h1 className="text-center">Create New Blog Post</h1>
      <Tabs
        id="controlled-tab"
        className="mt-3"
        activeKey={key}
        onSelect={(key) => setKey(key)}
      >
        <Tab eventKey="editor" title="Editor">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="markdownInput">
              <Form.Control
                as="textarea"
                rows="10"
                value={input}
                onChange={handleInput}
              />
            </Form.Group>
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
          </Form>
        </Tab>
        <Tab eventKey="preview" title="Preview">
          <div>
            <div className="preview bg-white p-2">
              <ReactMarkdown source={input} />
            </div>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default CreateBlog;

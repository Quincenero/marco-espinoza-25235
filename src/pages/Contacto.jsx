import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

function ContactForm() {
  const [state, handleSubmit] = useForm("xldpoozq");

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Contáctanos</h2>

          {state.succeeded && (
            <Alert variant="success">
              ¡Gracias por tu mensaje! Te responderemos pronto 🍎
            </Alert>
          )}

          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit} method="POST">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre completo *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        required
                      />
                      <ValidationError prefix="Nombre" field="name" errors={state.errors} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="11 234 5678"
                  />
                  <ValidationError prefix="Teléfono" field="phone" errors={state.errors} />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mensaje *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                  <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
                </Form.Group>

                <div className="text-center">
                  <Button variant="success" type="submit" size="lg" disabled={state.submitting}>
                    {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
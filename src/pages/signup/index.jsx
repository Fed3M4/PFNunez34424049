import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const SignUp = () => {
  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Ingresa una contraseña" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Direción</Form.Label>
          <Form.Control placeholder="Av. Boedo 2054" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Localidad</Form.Label>
            <Form.Control placeholder="Lomas de Zamora"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Provincia</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Seleccioná...</option>
              <option>Buenos Aires</option>
              <option>CABA</option>
              <option>Córdoba</option>
              <option>Santa Fe</option>
              <option>Neuquén</option>
              <option>Entre Ríos</option>
              <option>Usuahia</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control placeholder="B1832CXD"/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Recordarme" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};
export { SignUp };

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import logo from '../assets/logo.png';

const AppNavbar = () => (
  <Navbar bg="success" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">
      <img
        src={logo}
        alt="Verdulería Orgánica"
        className="verduleria-logo"
        height="50"
      />

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
          <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
          <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          <Nav.Link as={Link} to="/carrito">🛒 Carrito</Nav.Link>
          <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
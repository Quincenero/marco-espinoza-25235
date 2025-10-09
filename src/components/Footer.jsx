import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-light text-center py-3 fixed-bottom">
    <Container>
      <p className="mb-0 text-muted">
        © {new Date().getFullYear()} Verdulería Orgánica · Cultivando salud y sabor 🌱
      </p>
    </Container>
  </footer>
);

export default Footer;
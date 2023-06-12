import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/Logo-mama.png'

function NavBar({countCar}) {
  return (
    <Navbar bg="dark" variant="dark" expand="xl">
      <Container>
        <NavLink className="navbar-brand" to={'/'}><img src={logo} alt="" style={{height:"4rem"}}/></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' as={Link} to={'/inicio'}>Inicio</NavLink>
            <NavLink className='nav-link' as={Link} to={'/nosotros'}>Nosotros</NavLink>
            <NavDropdown title="Tienda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bebes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Niños/as
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Escuela</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/category/bautismos/:id'}>
                Bautismos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget countCar2 = {countCar}/>
    </Navbar>
  );
}

export default NavBar;
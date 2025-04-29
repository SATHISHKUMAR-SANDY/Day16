import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartArrowDown } from "react-icons/fa";

function NavBar() {
   const Navigate  = useNavigate()
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/products"}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to={"/login/kesavan"}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to={"/todo"}>
              TodoApp
            </Nav.Link>
          </Nav>
<FaCartArrowDown size={24} className="me-5" onClick={()=>Navigate("/wishlist")}  ></FaCartArrowDown>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

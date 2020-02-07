import React, {useState} from 'react';
import '../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  FormGroup,
  Input,
  Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="divNav">
      <Navbar color="white" light expand="md" className="navStyle">
        <img className="mr-5" src="https://uxmasters.org/images/merch_logo_50.svg" />
        <NavbarBrand id="navTitle" href="/">Merch Dropper</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <FormGroup className="searchStyle pt-3">
              <Input className="rounded-pill"
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="Search... "
              />
            </FormGroup>
            </NavItem>

          </Nav>
            <Link to="/registration">
              <Button color="primary" className="designBtn">Design Merch</Button>{' '}
            </Link>
            <Link to="/productDisplay">
              <Button className="ml-5" outline color="primary" href="/">Buy Merch</Button>{' '}
            </Link>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
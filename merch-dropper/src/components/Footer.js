import React from 'react';
import '../App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    Form,
    FormGroup,
    Input,
    Button
  } from 'reactstrap';

const Footer = (props) => {
    return (
        <div className="mt-5 footer">
            <Navbar color="white" light expand="md" className="navStyle">
                {/* <Form inline className="ml-5">
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Your email address" />
                        <Button color="primary" className="ml-3">Subscribe</Button>
                    </FormGroup>
                </Form> */}
                <p className="pt-3 pl-5 ml-auto">
                    © Merch Dropper 2020
                </p>
                <Nav className="ml-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/">Store</NavLink>
                </Nav>
            </Navbar>
        </div>
    )
}

  export default Footer;
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navi extends React.Component{
    render()
    {
        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand onClick={() => {this.props.buttonClick('Home')}}>Musify</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link onClick={() => {this.props.buttonClick('Home')}}>Home</Nav.Link>
                <Nav.Link onClick={() => {this.props.buttonClick('Artist')}}>Artists</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link onClick={this.props.logout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Navi;
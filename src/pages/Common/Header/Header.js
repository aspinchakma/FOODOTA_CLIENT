import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCont from '../../../hooks/useCont';
import './Header.css';

const Header = () => {
    const { user, logOutFromLogin } = useCont()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="header_container">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home"><img width="140px" src="https://i.ibb.co/9Tpc2WS/download.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {user.email && <Nav.Link as={NavLink} to={`/myOrder/${user.email}`}>My Order</Nav.Link>}
                            {user.email && <Nav.Link as={NavLink} to="/manageAllOrder">Manage All Order</Nav.Link>}
                            {
                                user.email && <Navbar.Text>
                                    Hello, <span>{user.displayName}</span>
                                </Navbar.Text>
                            }



                        </Nav>
                        <Nav>
                            {
                                user.email ? <Nav.Link><button
                                    onClick={logOutFromLogin}
                                    className="log_out_button">Log Out</button>
                                </Nav.Link>
                                    :
                                    <Nav.Link as={NavLink} to="/login">
                                        <button

                                            className="log_in_button">Log in</button>
                                    </Nav.Link>
                            }


                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
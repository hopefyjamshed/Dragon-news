import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';
import LeftNav from '../leftSideNav/LeftNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const logOutHandler = () => {
        logOut()
            .then(() => {
                console.log('signout successfull')
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-5' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link className='text-white text-decoration-none' to='/'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>

                            </NavDropdown>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">{user?.uid ? user.displayName :
                                <>
                                    <Link to='/login'>
                                        <Button className='me-2' variant="outline-light">Login</Button>
                                    </Link>
                                    <Link to='/register'>
                                        <Button className='me-2' variant="outline-light">Register</Button>
                                    </Link>
                                </>
                            }</Nav.Link>
                            <Nav.Link eventKey={2} href="">
                                {user?.photoURL ?
                                    <Image
                                        style={{ width: '30px' }}
                                        src={user.photoURL}
                                        roundedCircle

                                    >

                                    </Image>
                                    :
                                    <FaUserAlt></FaUserAlt>}
                                {user?.uid ?
                                    <Button onClick={logOutHandler} className='ms-2' variant="outline-light">Sign Out</Button>
                                    :
                                    <></>
                                }
                            </Nav.Link>

                        </Nav>
                        <div className='d-lg-none d-block '>
                            <LeftNav></LeftNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
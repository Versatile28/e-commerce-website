import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function HeaderBar() {
    return (
        <Navbar expand="lg">
            <Container className="headerbar-container">
                <Navbar className="d-none d-md-flex headerbar-box">
                    <Nav.Link href="#home" className="mar-r-5 ms-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 224 432"><path fill="currentColor" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z"/></svg>
                    </Nav.Link>
                    <Navbar.Brand href="#home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 432 384"><path fill="currentColor" d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45z"/></svg>
                    </Navbar.Brand>
                    <Navbar href="#home" className="ph-no">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9.159 5.712l-.403-.906c-.263-.592-.395-.888-.592-1.115a2 2 0 0 0-.928-.603C6.949 3 6.625 3 5.976 3c-.948 0-1.422 0-1.82.182a2.12 2.12 0 0 0-1.061 1.169c-.143.413-.102.838-.02 1.689q1.31 13.575 14.886 14.885c.85.082 1.275.123 1.689-.02a2.12 2.12 0 0 0 1.168-1.06c.182-.399.182-.873.182-1.821c0-.649 0-.973-.088-1.26a2 2 0 0 0-.603-.928c-.226-.197-.523-.328-1.115-.592l-.906-.402c-.642-.285-.962-.428-1.288-.459a2 2 0 0 0-.919.128c-.305.119-.574.343-1.114.793c-.537.447-.805.67-1.133.79a2.16 2.16 0 0 1-.981.101c-.346-.05-.61-.192-1.14-.475c-1.645-.88-2.553-1.787-3.433-3.433c-.283-.53-.424-.794-.475-1.14a2.16 2.16 0 0 1 .1-.98c.12-.329.344-.597.791-1.134c.45-.54.675-.809.793-1.114c.114-.292.158-.607.128-.919c-.03-.325-.173-.646-.459-1.288" color="currentColor"/></svg>
                        020-800-456-747
                    </Navbar>
                </Navbar>
                <Navbar className="d-flex justify-content-center title-head pe-5 ps-md-0 ps-3">
                        Free in-store delivery
                </Navbar>
                <Navbar className="headerbar-options d-sm-inline-block d-none" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="English" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">German</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                French
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="USD" id="basic-nav-dropdown" className="pe-2">
                            <NavDropdown.Item href="#">EUR</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                GBP
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    );
}

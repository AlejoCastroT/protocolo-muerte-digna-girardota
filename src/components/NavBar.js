import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaArrowCircleUp } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/logo.png';

function NavBar() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
        setShowScrollButton(true);
        } else {
        setShowScrollButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return (
        <Navbar bg="light" expand="lg" className="navbar-container">
        <Navbar.Brand href="#home">
            <img
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Plan Decenal Pública" id="plan-decenal-dropdown">
            <NavDropdown.Item href="#relacion">Relación con el Plan Decenal Pública</NavDropdown.Item>
            {/* Otros elementos del submenú */}
            </NavDropdown>
            <NavDropdown title="Definiciones" id="definiciones-dropdown" >
            <NavDropdown.Item href="#agonia">Agonía</NavDropdown.Item>
            <NavDropdown.Item href="#adecuacion">Adecuación de los esfuerzos terapéuticos (AET)</NavDropdown.Item>
            <NavDropdown.Item href="#consentimiento">Consentimiento Informado</NavDropdown.Item>
            <NavDropdown.Item href="#cuidado">Cuidado paliativo</NavDropdown.Item>
            <NavDropdown.Item href="#derecho">Derecho fundamental a morir con dignidad</NavDropdown.Item>
            <NavDropdown.Item href="#doc">Documento de voluntad anticipada (DVA)</NavDropdown.Item>
            <NavDropdown.Item href="#enfermedad">Enfermedad incurable avanzada</NavDropdown.Item>
            <NavDropdown.Item href="#enfermedad-ter">Enfermedad terminal</NavDropdown.Item>
            <NavDropdown.Item href="#eutanasia">Eutanasia</NavDropdown.Item>
            <NavDropdown.Item href="#eutanasia-soli">Solicitud de eutanasia</NavDropdown.Item>
            {/* Otros elementos del submenú */}
            </NavDropdown>
            
        </Nav>
        </Navbar.Collapse>
        {showScrollButton && (
        <div className="scroll-to-top-button">
            <Link to="navbar" smooth={true} duration={500}>
            <FaArrowCircleUp onClick={scrollToTop} className="arrow-icon" />
            </Link>
        </div>
        )}
    </Navbar>
    );
}

export default NavBar;

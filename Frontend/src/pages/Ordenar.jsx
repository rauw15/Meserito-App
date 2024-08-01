import React from 'react';
import SectionNavbar from "../components/organims/navbar/Section";
import Carrito from "../components/organims/Ordenar/Section"; 
import '../assets/styles/Navbar.css';


function CarritoPage() {
    return (
        <>
            <SectionNavbar />
            <Carrito />
        </>
    );
}

export default CarritoPage;

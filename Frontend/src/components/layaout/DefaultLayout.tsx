import React from "react";
import {Children, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface DefaultLayoutProps{
    children: React.ReactNode;
}

export default function DefaultLayout({children}: DefaultLayoutProps){
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
        const scrolled = window.scrollY;
        if (scrolled > 100) { // Ajusta este valor según tu diseño
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  
    return(
        <>
            {isVisible && <header className="default-layout">
                <nav className="dropdown-menu">
                    <ul>
                        <li>
                            <Link className="link" to="#1">Enfoque</Link>
                        </li>
                        <li>
                            <Link className='link' to="#2">Beneficios</Link>
                        </li>
                        <li>
                            <Link className="link" to="#3">Tecnologia avanzada</Link>
                        </li>
                        <li>
                            <Link className="link" to="">Inovemos</Link>
                        </li>
                    </ul>
                </nav>
            </header>}
            <main>{children}</main>
        </>
    );
}
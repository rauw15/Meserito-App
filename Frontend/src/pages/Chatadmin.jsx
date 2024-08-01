import React from 'react';
import SectionNavbar from "../components/organims/navbar/Section";
import Chat from "../components/organims/Websocket/Section2"; 
import '../assets/styles/Navbar.css';


function ChatAdminPage() {
    return (
        <>
            <SectionNavbar />
            <Chat />
        </>
    );
}

export default ChatAdminPage;

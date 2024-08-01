import React from 'react';
import SectionNavbar from "../components/organims/navbar/Section";
import Chat from "../components/organims/Websocket/Section"; 
import '../assets/styles/Navbar.css';
import '../assets/styles/Chat.css';


function ChatuserPage() {
    return (
        <>
            <SectionNavbar />
            <Chat />
        </>
    );
}

export default ChatuserPage;

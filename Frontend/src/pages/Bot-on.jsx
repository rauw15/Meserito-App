import SectionNavbar from "../components/organims/navbar/Section";
import SectionBot from "../components/organims/Bot-on/Section"
import '../assets/styles/Navbar.css'
import '../assets/styles/Bot-on.css'
function Bot(){
    return(
        <>
            <SectionNavbar/>,
            <SectionBot/>
        </>
    );
}

export default Bot;
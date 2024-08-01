import '../assets/styles/index.css'
import '../assets/styles/LandingPage.css'
import DefaultLayout from '../components/layaout/DefaultLayout';
import Section1 from '../components/organims/LandingPage/Section1';
import Section2 from '../components/organims/LandingPage/Section2';
import DecorationLine from '../components/atoms/DecorationLine';
import Section3 from '../components/organims/LandingPage/Section3';
import Section4 from '../components/organims/LandingPage/Section4';
import Section5 from '../components/organims/LandingPage/Section5';

function LandingPage(){
    return(
        <DefaultLayout>
            <Section1/>
            <Section2/>
            <DecorationLine/>
            <Section3/>
            {/* <Section4/>
            <Section5/>  */}
        </DefaultLayout>
    );
}

export default LandingPage;
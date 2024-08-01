import ImgNotFoundPerson from '../../../assets/img/NotFoundPerson.svg'
import Esperar from '../../../assets/img/esperar.gif'
import Caption from '../../atoms/Caption'

function SectionNotFound(){
    return(
        <section className='Section-NotFound'>
            <Caption className='Caption-NotFound' msn={"404. Página no encontrada"}></Caption>
            <img className='Person-NotFound' src={ImgNotFoundPerson}/>
            <img className='Esperar-NotFound' src={Esperar}/>
        </section>
    );
}

export default SectionNotFound;
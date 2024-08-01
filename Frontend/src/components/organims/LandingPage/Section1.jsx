import { Link } from 'react-router-dom';
import atraction from '../../../assets/img/atraction.png'
export default function Section1(){
    return(
        <section id="1" className="section-1">
                <div className="div-images">
                    <img className='div-image' src={atraction}/>
                    <div class="overlay"></div>
                </div>
                <div className="div-text">
                    <h1><span className='bot'>Bot</span>-ones al</h1>
                    <h1 className='h1-2'>servicio</h1>
                </div>
                <div className='era'>
                    <div>
                        <p>La <span className='resaltado-azul'>nueva era</span> de la</p>
                        <p>atención al cliente en restaurantes</p>
                        <Link to='/sesion'>
                            <button>
                                Iniciar sesión 
                                <ion-icon className="flecha" name="arrow-forward-outline"></ion-icon>
                            </button>
                        </Link>
                        
                    </div>
                </div>
        </section>
    );
}
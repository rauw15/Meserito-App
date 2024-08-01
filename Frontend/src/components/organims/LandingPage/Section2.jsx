import CircleAnimation from "../../atoms/circleAnimaton";
export default function Section2(){
    return(
        <section id="2" className="section-2">
            <p>Imagina un futuro donde la atención en tu restaurante sea <span className="resaltado-azul">impecable</span>, 
                <span className="resaltado-azul">eficiente</span> y <span className="resaltado-azul">memorable</span>.
                {/* <CircleAnimation classCircle='circleAnimation detectar'/> */}
                {/* <CircleAnimation classCircle='circleAnimation-2 detectar2'/> */}
            </p>
            
            <p className="text-2">
                Esa visión se hace realidad con nuestros robots meseros, una solución innovadora 
                que revolucionará la industria restaurantera.
            </p>
            <p className="text-3">
                Nuestros robots no solo te ayudarán a optimizar la gestión de tu negocio, sino 
                que también brindarán a tus clientes una <span className="resaltado-amarillo">experiencia 
                única</span> e inolvidable.
            </p>
        </section>
    );
}
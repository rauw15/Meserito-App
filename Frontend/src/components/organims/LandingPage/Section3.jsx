import Card from "../../atoms/card";




import Hourglass from '../../../assets/img/Hourglass.png'
import Rentabilidad from '../../../assets/img/rentabilidad.png'
import Alarm from '../../../assets/img/Alarm.png'
export default function Section3(){
    return(
        <section className="section-3">
            <h2 className="title">Descubre las ventajas para tu restaurante</h2>
            <div className="div-cards">
                <Card classDiv='card vis1' subtitle='Eficiencia' 
                src={Hourglass} classP='' 
                msgP='Reduce el tiempo de espera, agiliza la toma de pedidos, optimiza la gestión 
                de inventarios y reduce errores en pedidos y gestión de pagos.'/>
                <Card classDiv='card vis2' subtitle='Rentabilidad' 
                src={Rentabilidad} classP='' 
                msgP='Aumenta la productividad, permite optimizar la cantidad de personal humano 
                necesario, reduce el desperdicio de comida y otros recursos, aumenta la 
                satisfacción del cliente.'/>
                <Card classDiv='card vis3' subtitle='Experiencia de cliente' 
                src={Alarm} classP='' 
                msgP='Ofrece un servicio personalizado y memorable, reduce el tiempo de espera, 
                permite una mayor interacción entre los clientes y el personal, ofrece una 
                experiencia única e innovadora.'/>
            </div>
            <div className="div-cards part2">
                <Card classDiv='card vis4' subtitle='Rentabilidad' 
                src={Rentabilidad} classP='' 
                msgP='Aumenta la productividad, permite optimizar la cantidad de personal humano 
                necesario, reduce el desperdicio de comida y otros recursos, aumenta la 
                satisfacción del cliente.'/>
                <Card classDiv='card vis5' subtitle='Experiencia de cliente' 
                src={Alarm} classP='' 
                msgP='Ofrece un servicio personalizado y memorable, reduce el tiempo de espera, 
                permite una mayor interacción entre los clientes y el personal, ofrece una 
                experiencia única e innovadora.'/>
            </div>
        </section>
    );
}
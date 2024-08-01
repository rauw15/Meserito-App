export default function Section4(){
    return(
        <section className="section-4">
            <div className="div-general">
                <h2>Resultado reciente de datos</h2>
                <div className="div-targets">
                    <div className="targetss">
                        <div className="div-target">
                            <div className="div-target-1">
                                <div className="cantidad">
                                    <p>30%<ion-icon className='flecha' name="arrow-back-outline"></ion-icon></p>           
                                </div>
                                <ion-icon className='time' name="hourglass-outline"></ion-icon>
                            </div>
                            <div className="div-text-1">
                                <p className="description">Es la cantidad de un porcentaje de mas calor que emitio
                                    en los ultimos 1 mes </p>
                            </div>
                        </div>
                        <div className="div-target">
                            <div className="div-target-2">
                                <div className="cantidad-2">
                                    <p>10 PH<ion-icon className='flecha' name="arrow-back-outline"></ion-icon></p>           
                                </div>
                                <ion-icon name="cloud-outline"></ion-icon>
                            </div>
                            <div className="div-text-1">
                                <p className="description">Es la cantidad de un porcentaje de mas calor que emitio
                                    en los ultimos 1 mes </p>
                            </div>
                        </div>
                        <div className="div-target">
                            <div className="div-target-3">
                                <div className="cantidad-3">
                                    <p>-50%+</p>           
                                </div>
                                <ion-icon name="water-outline"></ion-icon>
                            </div>
                            <div className="div-text-1">
                                <p className="description">Es la cantidad de un porcentaje de mas calor que emitio
                                    en los ultimos 1 mes </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
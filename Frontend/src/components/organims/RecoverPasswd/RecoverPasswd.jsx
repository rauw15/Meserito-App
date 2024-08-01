import Label from "../../atoms/Label";

function SectionRecoverPasswd(){
    return(
        <section className="section-recovery">
            <div className="section-recovery-div-1">
                <div className="section-recovery-div-2">
                    <form action="">
                        <div className='div-logo-solo'>
                            <img class="logo-img" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/971/8678726971_bd4fdd30-72fb-46fd-9817-a1acd703ef0e.png?cb=1698992907" alt="" role="none"/>
                        </div>
                        <h3 className="title-recuperacion">Recuperación de la cuenta</h3>
                        <h5 className="title-recuperacion-dos">¿Olvidaste tu contraseña?</h5>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <Label className="label-login" classNameLabel='label' classNameInput='input' msg='Ingresa el correo a recuperar' type='email'/>
                        </div>
                        <button className="enviar">enviar</button>
                        <div className="respuesta">
                            <p>Hemos enviado un correo de recuperación de contraseña</p>
                        </div>
                        <a href="/login" className='button'>Ir a inicio</a>
                    </form>
                </div>
            </div>
        </section>    
    );
}

export default SectionRecoverPasswd;
import React from 'react';
import { useState } from 'react';
import Label from '../../atoms/Label';
import Button from '../../atoms/ButtonEnter';
import logo from '../../../assets/img/logo-recortado.png';
import { Link } from 'react-router-dom';
import CircleAnimation from '../../atoms/circleAnimaton';

const SectionConfirmar = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    

    const handleLogin = () => {
    console.log(`Iniciar sesión con ${username} y ${password}`);
    };

    return (
    <section className="section-login">
        <CircleAnimation classCircle="circleAnimation"/>
        <CircleAnimation classCircle="circleAnimation-2"/>
        <CircleAnimation classCircle="circleAnimation-3"/>
        <CircleAnimation classCircle="circleAnimation-4"/>
        <div className='login-box'>
            <img src={logo}/>
            <h3>Usa tu correo para recuperar la contraseña</h3>
            <h1 className='subtitle-login'>Recuperar contraseña</h1>
            <form action="">
                <Label classDiv='div-login' classNameLabel='label' msg='Contraseña nueva' 
                required='' onBlur='' onFocus='' id='' value='' placeholder='Tu nueva contraseña' classNameInput='inputs' type='email' onChange=''/>
                 <Label classDiv='div-login' classNameLabel='label' msg='Confirmar contraseña' 
                required='' onBlur='' onFocus='' id='' value='' placeholder='Confirma tu contraseña' classNameInput='inputs' type='email' onChange=''/>
                <Button className = 'iniciarsesion' type= '' msg = 'Siguiente' />
            </form>
        </div>
    </section>
    );
};
export default SectionConfirmar;


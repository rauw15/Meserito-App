import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Label from '../../atoms/Label';
import Button from '../../atoms/ButtonEnter';
import logo from '../../../assets/img/logo-recortado.png';
import CircleAnimation from '../../atoms/circleAnimaton';
import { useAuth } from '../../../auth/AuthProvider';
import axios from 'axios'; // Asegúrate de tener axios instalado

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3000/users/login', { email, password }); 
            
            const { data } = response.data;
            
            auth.login(data.token);
            
            navigate('/menu');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Correo electrónico o contraseña incorrectos');
        }
    };

    return (
        <section className="section-login">
            <CircleAnimation classCircle="circleAnimation"/>
            <CircleAnimation classCircle="circleAnimation-2"/>
            <CircleAnimation classCircle="circleAnimation-3"/>
            <CircleAnimation classCircle="circleAnimation-4"/>
            <div className='login-box'>
                <img src={logo} alt="Logo"/>
                <h3>Utiliza tu cuenta</h3>
                <h1 className='subtitle-login'>Iniciar Sesión</h1>
                <form onSubmit={handleLogin}>
                    <Label
                        classDiv='div-login'
                        classNameLabel='label'
                        msg='Correo electrónico'
                        required=''
                        onBlur=''
                        onFocus=''
                        id=''
                        value={email}
                        placeholder='example@gmail.com'
                        classNameInput='inputs'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Label
                        classDiv='div-login'
                        classNameLabel='label'
                        msg='Contraseña'
                        required=''
                        onBlur=''
                        onFocus=''
                        id=''
                        value={password}
                        placeholder='********'
                        classNameInput='inputs'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='apartados'>
                        <div className='checkbocs'>
                            <input type="checkbox" className='check'/>
                            <p className='p1'>Recordar contraseña</p>
                        </div>
                        <div className='crear-cuenta'>
                            <p>No tienes ninguna cuenta?</p>
                            <Link className='link' to='/registrarse'>Regístrate aquí</Link>
                        </div>
                    </div>
                    <Button className='iniciarsesion' type='submit' msg='Iniciar Sesión' />
                </form>
            </div>
        </section>
    );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../atoms/ButtonEnter";
import Label from "../../atoms/Label";
import CircleAnimation from '../../atoms/circleAnimaton';
import logo from '../../../assets/img/logo-recortado.png';

export default function SectionRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorResponse, setErrorResponse] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/create', {
        id: Date.now(),
        name: username,
        email,
        password,
      });

      if (response.status === 201) {
        setErrorResponse('');
        navigate('/sesion');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      setErrorResponse('Ocurrió un error al registrar. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <section className="section-register">
      <CircleAnimation classCircle="circleAnimation"/>
      <CircleAnimation classCircle="circleAnimation-2"/>
      <CircleAnimation classCircle="circleAnimation-3"/>
      <CircleAnimation classCircle="circleAnimation-4"/>
      <div className='login-box'>
        <img src={logo} alt="Logo"/>
        <h3>Crea tu cuenta</h3>
        <h1 className='subtitle-login'>Registro de cuenta</h1>
        <form onSubmit={handleSubmit}>
          <Label
            classDiv='div-login'
            classNameLabel='label'
            msg='Nombre completo'
            placeholder='Tu nombre'
            classNameInput='inputs'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label
            classDiv='div-login'
            classNameLabel='label'
            msg='Correo electrónico'
            placeholder='example@gmail.com'
            classNameInput='inputs'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label
            classDiv='div-login'
            classNameLabel='label'
            msg='Contraseña'
            placeholder='********'
            classNameInput='inputs'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className='button' type="submit" msg='Registrar' />
        </form>
        {errorResponse && <p className="error-message">{errorResponse}</p>}
      </div>
    </section>
  );
}

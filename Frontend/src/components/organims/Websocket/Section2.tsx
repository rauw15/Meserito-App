// AdminChatComponent.tsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../auth/AuthProvider';
import ReconnectingWebSocket from '../reconnecting-websocket';

const socket = new ReconnectingWebSocket('ws://localhost:3001');

const AdminChatComponent: React.FC = () => {
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [mensajes, setMensajes] = useState<any[]>([]);
  const [activeUsers, setActiveUsers] = useState<string[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  const auth = useAuth();

  const enviarMensaje = () => {
    if (nuevoMensaje.trim() !== '') {
      const message = JSON.stringify({ type: 'chat_message', user: 'Admin', message: nuevoMensaje, isAdmin: true });
      socket.send(message);
      console.log('Mensaje enviado:', message);
      setMensajes([...mensajes, { user: 'Admin', message: nuevoMensaje, isAdmin: true }]);
      setNuevoMensaje('');
    }
  };

  useEffect(() => {
    socket.setOnOpenHandler(() => {
      setIsConnected(true);
      console.log('Conectado al servidor WebSocket');
    });

    socket.setOnMessageHandler((event: MessageEvent) => {
      const data = JSON.parse(event.data);
      console.log('Mensaje recibido:', data);
      switch (data.type) {
        case 'chat_message':
          setMensajes((prevMessages) => [...prevMessages, data]);
          break;
        case 'connected_users':
          setActiveUsers(data.users || []);
          break;
        default:
          break;
      }
    });

    socket.setOnCloseHandler(() => {
      setIsConnected(false);
      console.log('Desconectado del servidor WebSocket');
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="chat-container">
      <div className="header">
        Atención a clientes
      </div>

      <div className="messages-container">
        {mensajes.map((mensaje, index) => (
          <div key={index} className={`message ${mensaje.isAdmin ? 'admin' : 'user'}`}>
            <div className="message-content">
              {mensaje.message}
            </div>
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="input-field"
        />
        <button onClick={enviarMensaje} className="send-button">
          Enviar
        </button>
      </div>

      <div className="active-users">
        <h3>Usuarios Activos:</h3>
        <ul>
          {activeUsers && activeUsers.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminChatComponent;

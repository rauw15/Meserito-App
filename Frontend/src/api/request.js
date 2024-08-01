import axios from "axios";

const API = "https://meserito-backend.onrender.com";

// Rutas de usuarios
export const registerRequest = (userData) =>
  axios.post(`${API}/users/create`, userData);

export const loginRequest = (userData) =>
  axios.post(`${API}/users/login`, userData);

export const verifyTokenRequest = () =>
  axios.post(`${API}/users/verify`);

export const profileRequest = () =>
  axios.post(`${API}/users/profile`);

export const logoutRequest = () =>
  axios.post(`${API}/users/logout`);

// Rutas de pedidos
export const crearPedidoRequest = (pedidoData) =>
  axios.post(`${API}/pedidos/create`, pedidoData);

export const actualizarPedidoRequest = (pedidoId, pedidoData) =>
  axios.put(`${API}/pedidos/update/${pedidoId}`, pedidoData);

export const borrarPedidoRequest = (pedidoId) =>
  axios.delete(`${API}/pedidos/delete/${pedidoId}`);

export const obtenerPedidosRequest = () =>
  axios.get(`${API}/pedidos/getAll`);

// Rutas de productos
export const crearProductoRequest = (productData) =>
  axios.post(`${API}/products/create`, productData);

export const actualizarProductoRequest = (productId, productData) =>
  axios.put(`${API}/products/update/${productId}`, productData);

export const borrarProductoRequest = (productId) =>
  axios.delete(`${API}/products/delete/${productId}`);

export const obtenerProductosRequest = () =>
  axios.get(`${API}/products/getAll`);

// Rutas de mensajes
export const sendMessageRoute = `${API}/api/messages/addmsg`;
export const receiveMessageRoute = `${API}/api/messages/getmsg`;

// Rutas de comandos del robot
export const moveForwardRequest = (value) =>
  axios.post(`${API}/api/robot/move_forward, { action: 'move_forward', value }`);

export const stopRequest = () =>
  axios.post(`${API}/api/robot/stop, { action: 'stop' }`);

export const rotateLeftRequest = (value) =>
  axios.post(`${API}/api/robot/rotate_left, { action: 'rotate_left', value }`);

export const rotateRightRequest = (value) =>
  axios.post(`${API}/api/robot/rotate_right, { action: 'rotate_right', value }`);

export const searchColorRequest = (color) =>
  axios.post(`${API}/api/robot/search_color, { action: 'search_color', value: color }`);

export const returnRequest = () =>
  axios.post(`${API}/api/robot/return, { action: 'return' }`);

export const checkDistanceRequest = () =>
  axios.post(`${API}/api/robot/check_distance, { action: 'check_distance' }`);
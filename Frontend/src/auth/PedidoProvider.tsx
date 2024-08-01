import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  crearPedidoRequest,
  actualizarPedidoRequest,
  borrarPedidoRequest,
  obtenerPedidosRequest
} from '../api/request'; // Asegúrate de que la ruta sea correcta

interface Pedido {
  id?: number;
  userEmail?: string;
  productIds: number[];
  status: string;
}

interface PedidoProviderType {
  pedidos: Pedido[];
  createPedido: (pedidoData: Omit<Pedido, 'id'>) => Promise<void>;
  updatePedido: (pedidoId: number, pedidoData: Pedido) => Promise<void>;
  deletePedido: (pedidoId: number) => Promise<void>;
  fetchPedidos: () => Promise<void>;
}

const PedidoContext = createContext<PedidoProviderType | undefined>(undefined);

export const usePedido = () => {
  const context = useContext(PedidoContext);
  if (!context) throw new Error('usePedido must be used within a PedidoProvider');
  return context;
};

export const PedidoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPedidos = useCallback(async () => {
    if (loading) return; // Evita múltiples llamadas simultáneas
    setLoading(true);
    try {
      const response = await obtenerPedidosRequest();
      console.log('Response:', response.data); // Verifica la estructura de la respuesta
      if (response.data.status === 'success' && Array.isArray(response.data.data)) {
        setPedidos(response.data.data);
      }
    } catch (error) {
      console.error('Error al obtener pedidos:', error);
    } finally {
      setLoading(false);
    }
  }, [loading]);

  const createPedido = async (pedidoData: Omit<Pedido, 'id'>) => {
    try {
      const response = await crearPedidoRequest(pedidoData);
      console.log('Pedido creado:', response.data);
      fetchPedidos(); // Actualiza la lista de pedidos después de la creación
    } catch (error) {
      console.error('Error al crear pedido:', error);
      throw error; // Lanza el error para que sea capturado en el frontend
    }
  };

  const updatePedido = async (pedidoId: number, pedidoData: Pedido) => {
    try {
      await actualizarPedidoRequest(pedidoId, pedidoData);
      fetchPedidos(); // Actualiza la lista de pedidos después de la actualización
    } catch (error) {
      console.error('Error al actualizar pedido:', error);
    }
  };

  const deletePedido = async (pedidoId: number) => {
    try {
      await borrarPedidoRequest(pedidoId);
      fetchPedidos(); // Actualiza la lista de pedidos después de la eliminación
    } catch (error) {
      console.error('Error al eliminar pedido:', error);
    }
  };

  const pedidoContextValue: PedidoProviderType = {
    pedidos,
    createPedido,
    updatePedido,
    deletePedido,
    fetchPedidos,
  };

  return (
    <PedidoContext.Provider value={pedidoContextValue}>
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoProvider;

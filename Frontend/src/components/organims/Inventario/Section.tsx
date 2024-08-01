import React, { useEffect } from 'react';
import { useProduct } from '../../../auth/ProductProvider';
import { usePedido } from '../../../auth/PedidoProvider';

export default function Inventario() {
  const { products, fetchProducts } = useProduct();
  const { pedidos, fetchPedidos } = usePedido();

  useEffect(() => {
    fetchProducts();
    fetchPedidos();
  }, [fetchProducts, fetchPedidos]);

  const productArray = Array.isArray(products) ? products : [];
  const pedidoArray = Array.isArray(pedidos) ? pedidos : [];

  const getProductNameById = (productId) => {
    const product = productArray.find((product) => product.id === productId);
    return product ? product.name : 'Producto no encontrado';
  };

  return (
    <div className="inventory-container">
      <div className="table-container">
        <h2>Productos Restantes</h2>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {productArray.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  {product.imageUrl ? (
                    <img src={`http://localhost:3000/uploads/${product.imageUrl}`} alt={product.name} style={{ width: '100px' }} />
                  ) : (
                    'No imagen'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-container">
        <h2>Pedidos Realizados</h2>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Productos</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {pedidoArray.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.userEmail || pedido.userId}</td>
                <td>
                  {pedido.productIds.map((productId) => (
                    <span key={productId}>{getProductNameById(productId)} </span>
                  ))}
                </td>
                <td>{pedido.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

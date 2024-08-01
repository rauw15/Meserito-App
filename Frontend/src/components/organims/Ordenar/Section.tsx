import React, { useState, useEffect } from "react";
import { usePedido } from "../../../auth/PedidoProvider"; // Actualizado aquí

export default function Carrito() {
  const { pedidos, deletePedido } = usePedido(); // Actualizado aquí
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calcularTotal();
  }, [pedidos]);

  const calcularTotal = () => {
    let totalPrice = 0;
    pedidos.forEach((pedido) => {
      // Aquí asumo que `pedido.productIds` se usa para obtener los productos, deberás ajustar esto según tu lógica
      // Si necesitas detalles de los productos, deberías tener otra forma de obtenerlos.
      totalPrice += pedido.productIds.reduce((acc, productId) => {
        // Suponiendo que tienes alguna forma de obtener el precio del producto por ID.
        // Ajusta esta lógica según cómo manejas los precios en tu aplicación.
        const productPrice = obtenerPrecioDelProducto(productId); // Esta función es un ejemplo
        return acc + productPrice;
      }, 0);
    });
    setTotal(totalPrice);
  };

  const handleRealizarOrden = () => {
    // Lógica para realizar la orden
    console.log("Orden realizada con éxito!");
    // Puedes enviar los productos al backend para procesar el pedido
    // Puedes borrar los productos del carrito si es necesario
  };

  const obtenerPrecioDelProducto = (productId: number) => {
    // Implementa la lógica para obtener el precio del producto por su ID
    // Esto puede involucrar una llamada al backend para obtener detalles del producto
    return 10; // Valor de ejemplo
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {pedidos.map((pedido) => (
        <div key={pedido.id}>
          <h3>Pedido #{pedido.id}</h3>
          {/* Asume que `pedido.productIds` contiene los IDs de los productos y necesitas otra forma de mostrar detalles */}
          <p>Productos en el pedido no disponibles para visualización detallada</p>
          <button onClick={() => deletePedido(pedido.id)}>Eliminar Pedido</button>
        </div>
      ))}
      <div>
        <h3>Total: ${total}</h3>
        <button onClick={handleRealizarOrden}>Realizar Orden</button>
      </div>
    </div>
  );
}

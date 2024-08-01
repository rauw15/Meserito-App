import React, { useState, useEffect } from "react";
import { usePedido } from "../../../auth/PedidoProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  CardMedia,
  Button,
} from "@mui/material";

export default function Menu() {
  const { createPedido } = usePedido(); // Actualizado aquí
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products/getAll");
      const productosComida = response.data.filter(
        (producto: any) => producto.category === "comida"
      );
      setProducts(productosComida);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const refreshProducts = async () => {
    await obtenerProductos();
  };

  const handleShowCart = () => {
    setShowCartPopup(true);
  };

  const handleCloseCart = () => {
    setShowCartPopup(false);
  };

  const handlePlaceOrder = () => {
    if (selectedProduct) {
      const pedidoData = {
        userId: 1, // Ajusta esto según tu lógica de usuario
        productIds: [selectedProduct._id], // Ajusta esto según los IDs de los productos
        status: "pending", // Ajusta el estado del pedido según sea necesario
      };
      createPedido(pedidoData); // Actualizado aquí
      alert("¡Pedido realizado con éxito!");
      setShowCartPopup(false); // Cerrar popup después de realizar el pedido
    }
  };

  const handleIncrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = (product: any) => {
    setSelectedProduct(product);
    setShowCartPopup(true);
  };

  return (
    <Container>
      <div className="botones-menu">
        <Link to="/menu">
          <button className="menu-button">Comida</button>
        </Link>
        <Link to="/bebidas">
          <button className="menu-button">Bebida</button>
        </Link>
        <Link to="/postres">
          <button className="menu-button">Postres</button>
        </Link>
      </div>
      <Grid container spacing={4} style={{ marginTop: 20 }}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={`http://localhost:3000/uploads/${product.img}`} // Usa la URL correcta
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
              </CardContent>
              <Button
                size="small"
                color="primary"
                onClick={() => handleAddToCart(product)}
              >
                Añadir al carrito
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Popup de carrito */}
      {showCartPopup && (
        <div className="cart-popup">
          <h2>Detalles del Pedido</h2>
          <p>{selectedProduct?.title}</p>
          <p>Quantity: {quantity}</p>
          <Button onClick={handlePlaceOrder}>Realizar Pedido</Button>
          <Button onClick={handleCloseCart}>Cerrar</Button>
        </div>
      )}
    </Container>
  );
}

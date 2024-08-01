import React, { useState, useEffect } from 'react';
import { useProduct } from '../../../auth/ProductProvider';
import { usePedido } from '../../../auth/PedidoProvider';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
  CardMedia,
  Button,
} from '@mui/material';
import { Product } from '../../../types/types';

export default function Menu() {
  const { products, fetchProducts } = useProduct();
  const { createPedido } = usePedido();
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleShowCart = () => {
    setShowCartPopup(true);
  };

  const handleCloseCart = () => {
    setShowCartPopup(false);
  };

  const handlePlaceOrder = async () => {
    if (selectedProduct) {
      const pedidoData = {
        productIds: [selectedProduct.id],
        status: 'pending',
      };
      try {
        await createPedido(pedidoData);
        alert('¡Pedido realizado con éxito!');
        setShowCartPopup(false); // Cerrar popup después de realizar el pedido
      } catch (error) {
        console.error('Error al realizar el pedido:', error);
        alert('Error al realizar el pedido.');
      }
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

  const handleAddToCart = (product: Product) => {
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
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={`http://localhost:3000/uploads/${product.imageUrl}`} // Usa la URL correcta
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
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

      {showCartPopup && (
        <div className="cart-popup">
          <h2>Detalles del Pedido</h2>
          <p>{selectedProduct?.name}</p>
          <p>Cantidad: {quantity}</p>
          <Button onClick={handlePlaceOrder}>Realizar Pedido</Button>
          <Button onClick={handleCloseCart}>Cerrar</Button>
        </div>
      )}
    </Container>
  );
}

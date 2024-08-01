import React, { createContext, useContext, useState } from 'react';
import axios from 'axios'; // Asegúrate de importar axios
import { crearProductoRequest, actualizarProductoRequest, borrarProductoRequest, obtenerProductosRequest } from '../api/request';
import { Product } from '../types/types';

interface ProductProviderType {
  products: Product[];
  createProduct: (productData: Product) => Promise<void>;
  updateProduct: (productId: number, productData: Product) => Promise<void>;
  deleteProduct: (productId: number) => Promise<void>;
  fetchProducts: () => Promise<void>;
}

const ProductContext = createContext<ProductProviderType | undefined>(undefined);

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProduct must be used within a ProductProvider');
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1252779310838841344/CHjyME9DmGC3PHH5_KFTPuZK_4woA_GVtrAHj5jCX6P5mXXv6HwHuCMO36mltFpSjDAP'; 
  
  const fetchProducts = async () => {
    try {
      const response = await obtenerProductosRequest();
      if (response.data && Array.isArray(response.data.data)) {
        setProducts(response.data.data);
      } else {
        console.error('La respuesta no contiene un array de productos:', response.data);
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const createProduct = async (productData: Product) => {
    try {
      await crearProductoRequest(productData);
      
      // Enviar notificación al webhook de Discord
      await axios.post(DISCORD_WEBHOOK_URL, {
        content: `¡Nuevo producto creado!\nID: ${productData.id}\nNombre: ${productData.name}\nDescripción: ${productData.description}\nPrecio: ${productData.price}\n`
      });

      fetchProducts();
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  };

  const updateProduct = async (productId: number, productData: Product) => {
    try {
      await actualizarProductoRequest(productId, productData);
      fetchProducts();
    } catch (error) {
      console.error('Error al actualizar producto:', error);
    }
  };

  const deleteProduct = async (productId: number) => {
    try {
      await borrarProductoRequest(productId);
      fetchProducts();
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  const productContextValue: ProductProviderType = {
    products,
    createProduct,
    updateProduct,
    deleteProduct,
    fetchProducts,
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

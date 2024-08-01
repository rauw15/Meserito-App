import React, { createContext, useContext, useEffect, useState } from 'react';
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/request';
import Cookies from 'js-cookie';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (userData: User) => Promise<void>;
  logout: () => void;
  register: (userData: User) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const checkLogin = async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const res = await verifyTokenRequest();
          if (res.data) {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } catch (error) {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkLogin();
  }, []);

  const register = async (user: User) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        setIsAuthenticated(true);
        setErrors([]);
      }
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data.message]);
    }
  };

  const login = async (userData: User) => {
    try {
      const response = await loginRequest(userData);
      if (response.data.token) {
        const token = response.data.token;
        Cookies.set("token", token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

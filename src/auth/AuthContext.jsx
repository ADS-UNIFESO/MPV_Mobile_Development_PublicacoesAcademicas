import React, { createContext, useContext, useState } from 'react';
import { setToken, getToken, removeToken, isAuthenticated } from './jwt';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(isAuthenticated());

  const login = (token) => {
    setToken(token);
    setAuth(true);
  };

  const logout = () => {
    removeToken();
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAuth = () => useContext(AppContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // Dummy auth logic
    if (username === "admin" && password === "1234") {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

import React, { createContext, useState, useContext, useMemo } from 'react';
import {
  getStoredToken,
  setStoredToken,
  clearStoredToken,
} from 'src/data/storage';

interface AuthContextData {
  logged: boolean;
  rehydrated: boolean;
  rehydrate: () => Promise<void>;
  onLogin: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [rehydrated, setRehydrated] = useState(false);
  const [token, setToken] = useState<string | null>();

  async function rehydrate() {
    const token = await getStoredToken();
    setToken(token);

    setRehydrated(true);
  }

  async function onLogin(token: string) {
    await setStoredToken(token);
    setToken(token);
  }

  async function logout() {
    await clearStoredToken();
    setToken(null);
  }

  const value: AuthContextData = useMemo(
    () => ({
      logged: !!token,
      rehydrated,
      rehydrate,
      onLogin,
      logout,
    }),
    [token, rehydrated, rehydrate, onLogin, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

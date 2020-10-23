import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  whatsapp: string;
  };

interface SignInCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface AuthContextState {
  user: User;
  signIn: (data: SignInCredentials) => Promise<void>;
  updateUser: (user: User) => Promise<void>;
  signOut: () => void;
}

interface AuthDataState {
  user: User;
  token: string;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthDataState>(() => {
    const user = localStorage.getItem('@Happy/user');
    const token = localStorage.getItem('@Happy/token');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthDataState;
  });

  const signIn = useCallback(
    async ({ email, password, rememberMe }: SignInCredentials) => {
      const response = await api.post('/session', {
        email,
        password,
      });

      const { token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      if (rememberMe) {
        localStorage.setItem('@Happy/user', JSON.stringify(user));
        localStorage.setItem('@Happy/token', token);
      }

      setAuthData({ token, user });
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Happy/user');
    localStorage.removeItem('@Happy/token');

    api.defaults.headers.authorization = '';
    setAuthData({} as AuthDataState);
  }, []);

  const updateUser = useCallback(async (user: User) => {
    localStorage.setItem('@Happy/user', JSON.stringify(user));

    setAuthData(state => ({ ...state, user }));
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: authData.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const authData = useContext(AuthContext);

  if (!authData) {
    throw new Error('Cannot use useAuth outside a AuthProvider');
  }

  return authData;
}

export default AuthProvider;

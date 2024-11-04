import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { AuthActions, AuthState, User } from "../types/auth";
import { authReducer, initialState } from "../reducers/authReducer";
import { CREATE_USER, LOGIN, LOGOUT } from "../actions/auth";

export interface AuthContenxtType {
  state: AuthState;
  dispatch: Dispatch<AuthActions>;
  createUser: (user: User) => void;
  login: (id: string) => void;
  logout: (id: string) => void;
  isLoggedIn: () => boolean;
}

interface ProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContenxtType | undefined>(
  undefined
);
const { Provider } = AuthContext;

export const AuthProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const createUser = (user: User) => {
    dispatch({ type: CREATE_USER, payload: user });
  };

  const login = (id: string) => {
    dispatch({ type: LOGIN, payload: { id } });
  };

  const logout = (id: string) => {
    dispatch({ type: LOGOUT, payload: { id } });
  };

  const isLoggedIn = () => {
    const user = state.users.find((u) => u.isLoggedIn === true);
    return user ? true : false;
  };

  return (
    <Provider
      value={{ createUser, state, dispatch, login, logout, isLoggedIn }}
    >
      {children}
    </Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be initialized within AuthProvider");
  return context;
};

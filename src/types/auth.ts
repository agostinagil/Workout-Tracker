import { CREATE_USER, DELETE_USER, LOGIN, LOGOUT } from "../actions/auth";

export interface AuthState {
  users: User[];
}

export interface User {
  username: string;
  password: string;
  email: string;
  id: string;
  isLoggedIn: boolean;
}

export interface CreateUserAction {
  type: typeof CREATE_USER;
  payload: User;
}

export interface DeleteUserAction {
  type: typeof DELETE_USER;
  payload: { id: string };
}

export interface LoginAction {
  type: typeof LOGIN;
  payload: { username: string; password: string; isLoggedIn: boolean };
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActions =
  | CreateUserAction
  | DeleteUserAction
  | LoginAction
  | LogoutAction;

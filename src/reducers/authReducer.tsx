import ShortUniqueId from "short-unique-id";
import { CREATE_USER, DELETE_USER, LOGIN, LOGOUT } from "../actions/auth";
import {
  AuthActions,
  AuthState,
  CreateUserAction,
  DeleteUserAction,
  LoginAction,
  LogoutAction,
} from "../types/auth";

export const initialState: AuthState = {
  users: JSON.parse(localStorage.getItem("users") || "[]"),
};

const isCreateAction = (action: AuthActions): actions is CreateUserAction =>
  action.type === CREATE_USER;

const isDeleteAction = (action: AuthActions): action is DeleteUserAction =>
  action.type === DELETE_USER;

const isLoginAction = (action: AuthActions): action is LoginAction =>
  action.type === LOGIN;

const isLogoutAction = (action: AuthActions): action is LogoutAction =>
  action.type === LOGOUT;

export const authReducer = (
  state: AuthState = initialState,
  action: AuthActions
) => {
  switch (action.type) {
    case CREATE_USER: {
      if (isCreateAction(action)) {
        const uid = new ShortUniqueId();
        const newUser = [...state.users, { ...action.payload, id: uid.rnd() }];
        localStorage.setItem("users", JSON.stringify(newUser));
        return {
          ...state,
          users: newUser,
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export interface IUser {
  _id: string,
  firstName: string;
  lastName: string;
}

export interface IAuthState {
  authenticated: boolean;
  password: string;
  email: string;
  username: string;
  user?: IUser;
  token?: string;
  authPrompted?: boolean;
}
export const AUTH_PROMPT = 'AUTH_PROMPT';
export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';

export const SET_AUTH_EVAPORATE_CLIENT = "SET_AUTH_EVAPORATE_CLIENT";

interface AuthSignInAction {
  type: typeof AUTH_SIGNIN,
  payload: Partial<IAuthState>
}
interface AuthSignOutAction {
  type: typeof AUTH_SIGNOUT
}
interface AuthPromptAction {
  type: typeof AUTH_PROMPT,
  authPrompted: boolean
}

export type AuthActionTypes = AuthSignInAction | AuthSignOutAction | AuthPromptAction
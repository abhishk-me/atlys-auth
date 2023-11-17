import {
  AUTH_SIGNOUT,
  AuthActionTypes,
  IAuthState,
  AUTH_SIGNIN,
  AUTH_PROMPT,
} from './type';

export function authSignInAction(payload: Partial<IAuthState>): AuthActionTypes {
  return {
    type: AUTH_SIGNIN,
    payload
  }
}

export function authSignOutAction(): AuthActionTypes {
  return {
    type: AUTH_SIGNOUT
  }
}

export function authPromptAction(authPrompted: boolean): AuthActionTypes {
  return {
    type: AUTH_PROMPT,
    authPrompted
  }
}
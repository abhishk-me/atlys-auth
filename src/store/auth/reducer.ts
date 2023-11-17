import produce, { Draft } from "immer";
import {
  AuthActionTypes,
  IAuthState,
  AUTH_SIGNOUT,
  AUTH_SIGNIN,
  AUTH_PROMPT,
} from './type'

const initialState: IAuthState = {
  authenticated: false,
  password: "12345",
  email: "",
  username: ""
}

export const authReducer = produce((
  draft: Draft<IAuthState>,
  action: AuthActionTypes
) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      return {
        ...draft,
        ...action.payload,
        authenticated: true
      }
    case AUTH_PROMPT:
      return {
        ...draft,
        authPrompted: action.authPrompted
      }
    case AUTH_SIGNOUT:
      return initialState;
  }
}, initialState)

export default authReducer;
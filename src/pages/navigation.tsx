import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store/config';
import { LoginForm, Modal, SignupForm } from '../components';
import { Outlet } from 'react-router-dom';
import { authPromptAction } from '../store/auth/action';

// Main navigation renders the pages based on the route. 
// It also prompts the Login/signup modal when something is being accessed on homepage without authenticated user.

export const MainNavigation: FC = () => {
  const [authComponent, setAuthComponent] = useState<"LOGIN" | "SIGNUP">("SIGNUP")
  const dispatch = useDispatch();
  // authPrompted is a global state which is set to true when auth-blocked content is being accessed
  const { authPrompted } = useSelector((state: IState) => state.authReducer);

  const handlePromptClose = useCallback(() => {
    dispatch(authPromptAction(false));
  }, []);

  return (
    <>
      <Modal
        open={authPrompted || false}
        setOpen={handlePromptClose}
      >
        {authComponent === "SIGNUP" && <SignupForm
          onSignupSuccess={() => handlePromptClose()}
          onLoginClick={() => setAuthComponent("LOGIN")}
        />}
        {authComponent === "LOGIN" && <LoginForm
          onLoginSuccess={() => handlePromptClose()}
          onSignupClick={() => setAuthComponent("SIGNUP")}
        />}
      </Modal>
      <Outlet />
    </>
  )
}
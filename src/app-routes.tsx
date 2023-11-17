import React, { } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from './pages/auth/login';
import { SignupPage } from './pages/auth/signup';
import { HomePage } from './pages/home';
import { MainNavigation } from './pages/navigation';
import { useSelector } from 'react-redux';
import { IState } from './store/config';

const AppRoute: React.FC = () => {
  const authenticated = useSelector((state: IState) => state.authReducer.authenticated)
  return (
    <>
      <Routes key="root">
        <Route path='/' element={<MainNavigation />}>
          {!authenticated && <>
            <Route
              path='login'
              element={<LoginPage />}
            />
            <Route
              path='signup'
              element={<SignupPage />}
            />
          </>}
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </>

  )
};

export default AppRoute;


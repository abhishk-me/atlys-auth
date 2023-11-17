import React, { FC } from 'react';
import { Button, TextInput } from '.';
import { ArrowRight } from 'react-feather';
import * as Yup from 'yup';
import { LoginFormInput } from '../types/common';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSignInAction } from '../store/auth/action';
import { Field, FieldProps, Form, Formik } from 'formik';

interface LoginFormProps {
  onLoginSuccess?: (data: LoginFormInput) => void;
  onSignupClick?: () => void;  //handles view change on the modal
}

// Signup form - used both on Signup page and signup modal.
export const LoginForm: FC<LoginFormProps> = ({ onLoginSuccess, onSignupClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    identifier: Yup.string().required(),
    password: Yup.string().required(),
  });

  const login = (values: LoginFormInput) => {
    dispatch(authSignInAction({ email: values.identifier, username: values.identifier, password: values.password }));
    onLoginSuccess && onLoginSuccess(values)
  }

  return (
    <div className='w-full bg-contrast-5 border-2 border-contrast-20 rounded-xl px-6 py-10 text-sm text-white'>
      <h2 className='text-sm opacity-50 text-center'>WELCOME BACK</h2>
      <h2 className='text-lg font-medium text-center mt-1 mb-10'>Log into your account</h2>
      <Formik
        initialValues={{
          identifier: "",
          password: ""
        }}
        validationSchema={schema}
        onSubmit={values => {
          login(values)
        }}
      >
        {(formikProps) => (
          <Form onSubmit={formikProps.handleSubmit} className="text-left">
            <Field name="identifier">
              {({ field, meta: { touched, error }, }: FieldProps) => (
                <>
                  <h4 className='mb-2 px-0.5 opacity-80 flex'>
                    <span>Email or Username</span>
                    {touched && Boolean(error) && <span className="text-red-500 font-normal ml-2">Required*</span>}
                  </h4>
                  <TextInput
                    {...field}
                    title='Email or username'
                    placeholder='Enter your email or username'
                    status={(touched && Boolean(error)) ? "error" : 'default'}
                  />
                </>
              )}
            </Field>
            <Field name="password">
              {({ field, meta: { touched, error }, }: FieldProps) => (
                <>
                  <h4 className='mb-2 px-0.5 opacity-80 mt-6 flex'>
                    <span>Password</span>
                    {touched && Boolean(error) && <span className="text-red-500 font-normal ml-2">Required*</span>}
                    <span className='flex flex-1' />
                    <Button onClick={() => alert("Implementation not in scope")} type='button' variant='text' text='Forgot password?'></Button>
                  </h4>
                  <TextInput
                    {...field}
                    title='Password'
                    type='password'
                    placeholder='Enter your password'
                    status={(touched && Boolean(error)) ? "error" : 'default'}
                  />
                </>
              )}
            </Field>
            <div className='mt-4' />
            <Button type='submit' variant='accent' text='Login Now' fullWidth />
          </Form>
        )}
      </Formik>
      <div className='flex items-center mt-3 px-0.5'>
        <p className='opacity-60 mr-1'>Not registered yet?</p>
        <Button
          variant='text'
          text='Register Now'
          iconRight={<ArrowRight size={14} />}
          onClick={() => {
            if (onSignupClick) {
              onSignupClick();
            } else {
              navigate("/signup")
            }
          }}
        />
      </div>
    </div>
  )
}
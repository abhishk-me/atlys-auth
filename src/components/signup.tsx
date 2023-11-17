import React, { FC } from 'react';
import { ArrowRight } from 'react-feather';
import { TextInput, Button } from '.';
import * as Yup from 'yup';
import { SignupFormInput } from '../types/common';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSignInAction } from '../store/auth/action';
import { Field, FieldProps, Form, Formik } from 'formik';

interface SignupFormProps {
  onSignupSuccess?: (data: SignupFormInput) => void;
  onLoginClick?: () => void; //handles view change on the modal
}

// Signup form - used both on Signup page and signup modal.
export const SignupForm: FC<SignupFormProps> = ({ onSignupSuccess, onLoginClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const signup = (values: SignupFormInput) => {
    dispatch(authSignInAction({ email: values.email, username: values.username, password: values.password }));
    onSignupSuccess && onSignupSuccess(values);
  }

  return (
    <div className='w-full bg-contrast-5 border-2 border-contrast-20 rounded-xl px-6 py-10 text-sm text-white'>
      <h2 className='text-sm opacity-50 text-center'>SIGN UP</h2>
      <h2 className='text-lg font-medium text-center mt-1 mb-10'>Create an account to continue</h2>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: ""
        }}
        validationSchema={schema}
        onSubmit={values => {
          signup(values);
        }}
      >
        {(formikProps) => (
          <Form onSubmit={formikProps.handleSubmit} className="text-left">
            <Field name="email">
              {({ field, meta: { touched, error }, }: FieldProps) => (
                <>
                  <h4 className='mb-2 px-0.5 opacity-80 flex'>
                    <span>Email</span>
                    {touched && Boolean(error) && <span className="text-red-500 font-normal ml-2">Required*</span>}
                  </h4>
                  <TextInput
                    {...field}
                    title='Email'
                    placeholder='Enter your email'
                    status={(touched && Boolean(error)) ? "error" : 'default'}
                  />
                </>
              )}
            </Field>
            <Field name="username">
              {({ field, meta: { touched, error }, }: FieldProps) => (
                <>
                  <h4 className='mb-2 px-0.5 opacity-80 mt-4 flex'>
                    <span>Username</span>
                    {touched && Boolean(error) && <span className="text-red-500 font-normal ml-2">Required*</span>}
                  </h4>
                  <TextInput
                    {...field}
                    title='Username'
                    placeholder='Enter a preferred username'
                    status={(touched && Boolean(error)) ? "error" : 'default'}
                  />
                </>
              )}
            </Field>
            <Field name="password">
              {({ field, meta: { touched, error }, }: FieldProps) => (
                <>
                  <h4 className='mb-2 px-0.5 opacity-80 mt-4 flex'>
                    <span>Password</span>
                    {touched && Boolean(error) && <span className="text-red-500 font-normal ml-2">Required*</span>}
                    <span className='flex flex-1' />
                    <Button onClick={() => alert("Implementation not in scope")} type='button' variant='text' text='Forgot password?'></Button>
                  </h4>
                  <TextInput
                    {...field}
                    title='Password'
                    type='password'
                    placeholder='Create a strong password'
                    status={(touched && Boolean(error)) ? "error" : 'default'}
                  />
                </>
              )}
            </Field>
            <div className='mt-4' />
            <Button type='submit' variant='accent' text='Continue' fullWidth />
          </Form>
        )}
      </Formik>
      <div className='flex items-center mt-3 px-0.5'>
        <p className='opacity-60 mr-1'>Already have an account?</p>
        <Button
          variant='text'
          text='Login'
          iconRight={<ArrowRight size={14} />}
          onClick={() => {
            if (onLoginClick) {
              onLoginClick();
            } else {
              navigate("/login")
            }
          }}
        />
      </div>
    </div>
  )
}
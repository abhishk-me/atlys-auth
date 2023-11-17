import React, { FC } from 'react'
import { Logo, LoginForm } from '../../components';

//Standalone Login Page
export const LoginPage: FC = () => {
  return (
    <section className='min-h-screen bg-dark flex flex-col justify-center'>
      <div className='flex justify-center items-center text-white mb-8'>
        <Logo />
      </div>
      <div className='px-10'>
        <div className='max-w-lg mx-auto text-white text-sm px-6'>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}
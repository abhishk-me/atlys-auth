import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuthPrompt } from '../utils/auth-prompt';

interface AuthProtectedLinkProps extends React.RefAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
  children: React.ReactNode;

}
export const AuthProtectedLink: FC<AuthProtectedLinkProps> = ({ to, replace, children, ...rest }) => {
  const { authenticated, prompt } = useAuthPrompt();
  return (
    <>
      {authenticated ? <Link to={to} replace={replace} className='no-underline text-white' {...rest} target='_blank'>
        {children}
      </Link> : <span onClick={prompt} className='border-0 bg-transparent shadow-none cursor-pointer'>
        {children}
      </span>}
    </>
  )
}
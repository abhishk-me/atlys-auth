import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store/config';
import { NewPost, PostCard, Button } from '../../components';
import { LogIn, LogOut } from 'react-feather';
import { authSignOutAction } from '../../store/auth/action';
import { useNavigate } from 'react-router-dom';
import { posts } from '../../utils/posts-data';

export const HomePage: FC = () => {
  const auth = useSelector((state: IState) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <main className='min-h-screen bg-dark text-white'>
      <header className='flex flex-row justify-end px-6 py-3'>
        {auth.authenticated ? <Button
          variant='text'
          text='Logout'
          iconRight={<LogOut size={16} />}
          onClick={() => dispatch(authSignOutAction())}
        /> : <Button
          variant='text'
          text='Login'
          iconRight={<LogIn size={16} />}
          onClick={() => navigate("/login")}
        />}
      </header>
      <section className='max-w-3xl mx-auto py-20'>
        <h1 className='text-3xl opacity-90'>Hello {auth.username || "there!"}</h1>
        <h3 className='text-lg opacity-60 mt-3 mb-10 max-w-xl'>How are you doing today? Would you like share something with the community? 🤗 </h3>
        <NewPost />
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </section>
    </main>
  )
}
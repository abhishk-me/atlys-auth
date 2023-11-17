import React, { FC } from 'react';
import { Button } from '.';
import { useAuthPrompt } from '../utils/auth-prompt';

export const NewPost: FC = () => {
  const { authenticated, prompt } = useAuthPrompt();

  return (
    <div className='bg-contrast-5 border-2 border-contrast-5 rounded-lg p-6'>
      <h4 className='text-lg opacity-80 mb-3'>Create post</h4>
      <div className='bg-dark rounded-lg p-4 flex'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-contrast-10'>
          <span className='text-xl'>💬</span>
        </div>
        <span className='mx-2' />
        <div className='flex flex-1 flex-col overflow-hidden'>
          <div className=''>
            <textarea
              onFocus={authenticated ? undefined : prompt}
              placeholder='How are you feeling today?'
              className='bg-transparent border-0 w-full h-12 text-white outline-none py-4'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end mt-4'>
        <Button onClick={() => alert("posted!! (Mocking the post button)")} variant='accent' text="Post" authBlocked />
      </div>
    </div>
  )
}
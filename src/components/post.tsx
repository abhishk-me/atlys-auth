import React, { FC } from 'react';
import { Button, Avatar } from '.';
import { MessageSquare } from 'react-feather';
import { AuthProtectedLink } from './auth-protected-link';
import { Post } from '../types/common';


interface PostCardProps {
  post: Post;
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className='bg-contrast-5 border-2 border-contrast-5 rounded-lg p-6 mt-4'>
      <div className='flex flex-row items-center'>
        <AuthProtectedLink to='https://google.com'>
          <Avatar firstName={post.user.firstName} lastName={post.user.lastName} image={post.user.image} />
        </AuthProtectedLink>
        <div className='flex flex-1 flex-col pl-4'>
          <AuthProtectedLink to='https://google.com'>
            <h4 className='hover:underline text-white'>{post.user.firstName} {post.user.lastName}</h4>
          </AuthProtectedLink>
          <p className='text-sm mt-1 opacity-50'>5 Mins ago</p>
        </div>
      </div>
      <AuthProtectedLink to='https://google.com'>
        <div className='bg-dark rounded-lg p-4 flex mt-6 mb-3'>
          <div className='w-12 h-12 flex items-center justify-center rounded-full bg-contrast-10'>
            <span className='text-xl'>{post.emotion}</span>
          </div>
          <p className='flex flex-1 flex-col justify-center overflow-hidden pl-4 opacity-60 leading-relaxed min-h-12'>
            {post.content}
          </p>
        </div>
      </AuthProtectedLink>
      <Button
        onClick={() => alert(`${post.noOfComments} Comments. (Mocking comment preview button)`)}
        style={{ opacity: 0.6 }}
        variant='text' text={`${post.noOfComments} Comments`}
        iconLeft={<MessageSquare size={16} className='mr-1 ml-0.5' />}
        authBlocked
      />
    </div>
  )
}
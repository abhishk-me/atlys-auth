import React, { FC } from 'react';


interface AvatarProps {
  firstName: string;
  lastName: string;
  image?: string;
}

export const Avatar: FC<AvatarProps> = ({ firstName, lastName, image }) => {
  return (
    <div className='h-12 w-12 rounded-full bg-contrast-5 overflow-hidden cursor-pointer'>
      {image ?
        <img src={image} className='h-full w-full object-cover' alt={`Image-${firstName}-${lastName}`} /> :
        <div className='h-full w-full flex items-center justify-center'>
          <span className='capitalize text-white'>{firstName[0]}{lastName[0]}</span>
        </div>
      }
    </div>
  )
}
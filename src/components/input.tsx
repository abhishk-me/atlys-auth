import React, { FC, HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

//define status of input field. like - error, warning, success....
type Status = keyof typeof inputStatuses

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  status?: Status
}

export const TextInput: FC<InputProps> = (props) => {
  const {
    status,
    type,
    ...rest
  } = props;
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type || "text");

  const outlineStyles = `${inputStatuses[status || 'default']}`;
  const inputStyles = `${baseInputStyles} ${type === "password" ? 'pr-12' : ''}`;

  return (
    <span className='inline-flex flex-row w-full rounded-md text-base relative'>
      <input type={inputType} {...rest} className={inputStyles}></input>
      <span className={outlineStyles}></span>
      {type === 'password' &&
        <button
          type='button'
          onClick={() => setInputType(prev => prev === "password" ? "text" : "password")}
          className='absolute inset-y-0 right-0 w-10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity z-20 bg-transparent text-white'
        >
          {inputType === "password" ? <Eye size={14} /> : <EyeOff size={14} />}
        </button>
      }
    </span>
  )
}

const baseInputStyles = `flex flex-1 outline-none bg-transparent text-white p-3.5 z-10 peer`;

const outlinerBaseStyles = `absolute inset-0 rounded-md z-0`;

const inputStatuses = {
  default: `${outlinerBaseStyles} border border-contrast-15 peer-focus:border-accent`,
  error: `${outlinerBaseStyles} border border-red-400 peer-focus:border-red-500`,
};


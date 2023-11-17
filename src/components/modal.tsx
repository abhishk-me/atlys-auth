import React, { FC, useEffect, useState } from 'react';
import { X } from 'react-feather';

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
  width?: number;
}


enum FadeState {
  ENTERING = "entering",
  ENTERED = "entered",
  EXITING = "exiting",
  UNMOUNTED = "unmounted",
}

const transitionStyles = {
  entering: `opacity-0 scale-90`,
  entered: `opacity-100 scale-100`,
  exiting: `opacity-0 scale-90`,
  unmounted: `opacity-0 scale-90`
};

export const Modal: FC<ModalProps> = ({ open, setOpen, children, width = 440 }) => {
  const [fadeState, setFadeState] = useState<FadeState>(FadeState.UNMOUNTED);
  useEffect(() => {
    if (open) {
      setFadeState(FadeState.ENTERING);
    } else {
      setFadeState(FadeState.EXITING);
    }
  }, [open])

  useEffect(() => {
    if (fadeState === FadeState.ENTERING) {
      setTimeout(() => {
        setFadeState(FadeState.ENTERED);
      }, 30);
    }
    if (fadeState === FadeState.EXITING) {
      setTimeout(() => {
        setFadeState(FadeState.UNMOUNTED);
      }, 300);
    }
  }, [fadeState])

  console.log(open, fadeState);

  if (fadeState === FadeState.UNMOUNTED) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[100] overflow-y-auto flex flex-col items-center justify-center text-white`}>
      <div
        className={`absolute inset-0 z-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 cursor-pointer ${transitionStyles[fadeState]}`}
        style={{ transform: "none" }}
        onClick={() => setOpen(false)}
      />
      <div className='z-10' style={{ width }}>
        <div className={`${transitionStyles[fadeState]} w-full rounded-xl bg-dark transition-all duration-300 z-10 relative`}>
          <button
            onClick={() => setOpen(false)}
            className='absolute top-3 right-3 h-8 w-8 rounded-full bg-dark flex items-center justify-center text-white z-10 hover:opacity-75 cursor-pointer'>
            <X size={16} />
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}
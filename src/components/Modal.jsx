import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({onClose,isOpen,children}) => {
  return <>
  {isOpen && (
  <>
  <div className='relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4'>
    <div className='flex justify-end'>
        <AiOutlineClose onClick = {onClose}
        className='self-end text-2xl'/>
    </div>
  </div>
  <div
  onClick = {onClose}
  className='absolute top-0 z-40 h-screen w-screen backdrop-blur'
  />
  </>
  )}
  </>
}

export default Modal;
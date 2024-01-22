import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='flex h-[80vh] items-center justify-center gap-4'>
        <div>
        <img src="/contact.png" alt="contact png" />
        </div>
        <h3 className='text-2xl font-semibold text-white'> Not Found</h3>
    </div>
  )
}

export default NotFoundContact
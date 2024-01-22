import React from 'react'
import Modal from './Modal'

const AddAndUpdateContact = ({onClose, isOpen}) => {
  return (
    <div>
    <Modal isOpen={isOpen} onClose={onClose}>
      Hi Everyone
    </Modal>
   </div>
  )
}

export default AddAndUpdateContact
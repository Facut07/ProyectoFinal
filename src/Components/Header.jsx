import React, { useState } from 'react';
import ModalAgenda from './ModalAgenda';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
       <header id="titulo">
        <h1>Mighty Mick's Gym</h1>
        <ModalAgenda isOpen={isModalOpen} onClose={closeModal} />
    </header>
        
        
        
        

  );
};

export default Header;

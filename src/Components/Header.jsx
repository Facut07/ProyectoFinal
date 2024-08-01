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
       <header id="Header">
         <img src="logo apollonius.png" alt="Apollonius Gym Logo"  />
        <h1>APOLLONIUS GYM</h1>
        <ModalAgenda isOpen={isModalOpen} onClose={closeModal} />
    </header>
        
        

        

  );
};

export default Header;
import React, { useState } from 'react';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer> 
        <img src="logo apollonius.png" alt="Apollonius Gym Logo"  />
        <h1>APOLLONIUS GYM</h1> 
        <br />
        <section class="ml-40">
          <a href="#Header"> Ir al comienzo.</a>
          <br />
          <a href="mailto:fctaapia11@gmail.com">Contactame aqui.</a>
        </section>
        <div className='copyri'>
        <p>Copyright 2024</p>
        </div>
    </footer>
  );
};

export default Footer;

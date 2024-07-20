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
     
        <h2>APOLLONIUS GYM</h2>
        
        <br />
        
        <p>Copyright 2024</p>

        <section>
          <a href="#Header"> Ir al comienzo.</a>
          <br />
          <a href="mailto:fctaapia11@gmail.com">Contactame aqui.</a>
        </section>

    </footer>
  );
};

export default Footer;

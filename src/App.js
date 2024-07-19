import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Category from './Components/Category';
import ModalAgenda from './Components/ModalAgenda';
import ModalPerfil from './Components/ModalPerfil';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenProfileModal = (classData) => {
    setSelectedClass(classData);
    setIsProfileModalOpen(true);
  };

  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
    setSelectedClass(null);
  };

  const handleFormSubmit = (formData) => {
    console.log("Datos del formulario enviados:", formData);
    handleCloseModal();        // Cierra el modal de agenda
    handleCloseProfileModal(); // Cierra el modal de perfil
  };

  return (
    <div className="App">
      <Header />
      <Category />
      <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Ver Agenda
      </button>
      <ModalAgenda 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onEdit={handleOpenProfileModal} 
      />
      <ModalPerfil
        isOpen={isProfileModalOpen}
        onClose={handleCloseProfileModal}
        selectedClass={selectedClass}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;

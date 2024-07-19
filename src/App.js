import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Category from './Components/Category';
import Footer from './Components/Footer';




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
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Category from './Components/Category';
import Footer from './Components/Footer';




function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleOpenModal = (classData) => {
    setSelectedClass(classData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClass(null);
  };

  const handleFormSubmit = (formData) => {
    console.log("Datos del formulario enviados:", formData);
    // Aquí puedes manejar los datos del formulario, como enviarlos a un servidor
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

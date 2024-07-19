import React, { useState } from 'react';
import ModalForm from './ModalForm'; // Asegúrate de que la ruta sea correcta según tu estructura de archivos
import clasesData from '../clases.json'; // Asegúrate de que la ruta sea correcta según tu estructura de archivos

const Category = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const openModal = (clase) => {
    setSelectedClass(clase);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedClass(null);
    setIsModalOpen(false);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {clasesData.map((clase, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">{clase.nombreClase}</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{clase.descripcion}</h3>
                <p className="mt-1">Profesor: {clase.nombreProfesor}</p>
                <p className="mt-1">Horarios: {clase.horarios}</p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => openModal(clase)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Agregarr
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ModalForm isOpen={isModalOpen} onClose={closeModal} selectedClass={selectedClass} />
    </section>
  );
};

export default Category;

import React, { useState, useEffect } from 'react';
import ModalConfirmacion from './ModalConfirmacion'; // modal donde se ven las clases agregadas

const ModalAgenda = ({ isOpen, onClose, onEdit }) => {
  const [classData, setClassData] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const storedData = JSON.parse(localStorage.getItem('formData')) || [];
      setClassData(storedData);
    }
  }, [isOpen]);

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = storedData.filter((_, i) => i !== deleteIndex);
    localStorage.setItem('formData', JSON.stringify(updatedData));
    setClassData(updatedData);
    setConfirmOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={`fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 ${isOpen ? 'flex' : 'hidden'}`}>
        <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
          <div className="relative mb-4">
            <button onClick={onClose} className="absolute top-0 right-0 p-2 focus:outline-none">
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-center text-xl text-gray-800">Agenda de Clases</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {classData.length > 0 ? (
              classData.map((data, index) => (
                <div key={index} className="p-4 border rounded-lg shadow bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="text-lg font-medium text-blue-600">Clase</h3>
                      <p className="text-gray-700">{data.clase.nombreClase}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-blue-600">Profesor</h3>
                      <p className="text-gray-700">{data.clase.nombreProfesor}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">Horario: {data.horario}</p>
                  <div className="flex justify-end space-x-2">
                    <button
                      className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-700 text-sm transition-opacity duration-200 hover:opacity-80"
                      onClick={() => onEdit(data)}
                    >
                      Editar mis datos
                    </button>
                    <button
                      className="bg-transparent border border-gray-600 text-gray-600 px-4 py-2 rounded hover:bg-gray-800 hover:text-white text-sm transition-opacity duration-200 hover:opacity-90"
                      onClick={() => handleDelete(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Agrega clases!</p>
            )}
          </div>
        </div>
      </div>
      <ModalConfirmacion
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
};

export default ModalAgenda;

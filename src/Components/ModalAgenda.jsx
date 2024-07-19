import React, { useState, useEffect } from 'react';

const ModalAgenda = ({ isOpen, onClose, onEdit }) => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const storedData = JSON.parse(localStorage.getItem('formData')) || [];
      setClassData(storedData);
    }
  }, [isOpen]);

  const handleDelete = (index) => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = storedData.filter((_, i) => i !== index);
    localStorage.setItem('formData', JSON.stringify(updatedData));
    setClassData(updatedData);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <div className="relative mb-4">
          <button onClick={onClose} className="absolute top-0 right-0 p-2 focus:outline-none">
            <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-center text-2xl font-bold text-gray-900">Agenda de Clases</h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {classData.length > 0 ? (
            classData.map((data, index) => (
              <div key={index} className="p-4 border rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-800">Nombre de la clase: {data.clase.nombreClase}</h3>
                <p className="text-gray-600">Profesor: {data.clase.nombreProfesor}</p>
                <p className="text-gray-600">Horario: {data.horario}</p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    onClick={() => onEdit(data)}
                  >
                    Editar mis datos
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleDelete(index)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No hay información disponible</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalAgenda;

import React, { useState } from 'react';

const ModalAgenda = ({ isOpen, onClose }) => {
  
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
          
            <div  className="p-4 border rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-800">nombre de clase</h3>
              <p className="text-gray-600">Profesor</p>
              <p className="text-gray-600">Horario</p>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Editar
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Eliminar
                </button>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Ver Agenda
      </button>
      <ModalAgenda isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;

import React from 'react';

const ModalConfirmacion = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirmación</h3>
        <p className="text-gray-600 mb-4">¿Estás seguro de que deseas eliminar esta clase?</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;

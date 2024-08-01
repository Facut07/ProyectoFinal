import React, { useState, useEffect } from 'react'; // moda leditar el perfil

const ModalPerfil = ({ isOpen, onClose, selectedClass, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });
  const [selectedHorario, setSelectedHorario] = useState('');

  useEffect(() => {
    if (selectedClass) {
      setSelectedHorario(selectedClass.horario);
      setFormData({
        nombre: selectedClass.nombre || '',
        apellido: selectedClass.apellido || '',
        email: selectedClass.email || '',
        telefono: selectedClass.telefono || ''
      });
    }
  }, [selectedClass]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedClass) {
      console.error("No hay clase seleccionada para actualizar.");
      return;
    }

    const formDataWithHorario = { ...formData, horario: selectedHorario };

    // Obtener datos del localStorage y actualizar
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = existingData.map(item => 
      item?.clase?.nombreClase === selectedClass?.clase?.nombreClase 
        ? { ...item, ...formDataWithHorario } 
        : item
    );

    // Guardar datos actualizados en localStorage
    localStorage.setItem('formData', JSON.stringify(updatedData));

    if (typeof onFormSubmit === 'function') {
      onFormSubmit(formDataWithHorario); // Cierra ambos modales
    } else {
      console.error("onFormSubmit no es una función");
    }
    onClose(); // Cierra el modal de perfil
  };

  if (!isOpen || !selectedClass) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <button onClick={onClose} className="absolute top-0 right-0 p-2 focus:outline-none">
          <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-center text-xl text-gray-800 mb-6">Editar Perfil</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-medium mb-2">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apellido" className="block text-gray-700 text-sm font-medium mb-2">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block text-gray-700 text-sm font-medium mb-2">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="horario" className="block text-gray-700 text-sm font-medium mb-2">Horario</label>
            <input
              type="text"
              id="horario"
              name="horario"
              value={selectedHorario}
              onChange={(e) => setSelectedHorario(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-transparent border border-gray-600 text-gray-600 px-4 py-2 rounded hover:bg-gray-700 hover:text-white text-sm transition-opacity duration-200 hover:opacity-80"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-700 text-sm transition-opacity duration-200 hover:opacity-80"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPerfil;

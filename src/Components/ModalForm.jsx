import React, { useState, useEffect } from 'react'; // modal agregar clase

const ModalForm = ({ isOpen, onClose, selectedClass, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });
  const [selectedHorario, setSelectedHorario] = useState('');

  useEffect(() => {
    if (selectedClass) {
      setSelectedHorario(selectedClass.horarios.split(' / ')[0]);
    }
  }, [selectedClass]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleHorarioChange = (e) => {
    setSelectedHorario(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithHorario = { ...formData, horario: selectedHorario };

    // Obtener datos actuales del localStorage
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    // Agregar los nuevos datos
    const newData = {
      ...formDataWithHorario,
      clase: {
        nombreClase: selectedClass.nombreClase,
        nombreProfesor: selectedClass.nombreProfesor
      }
    };

    // Guardar datos actualizados en localStorage
    localStorage.setItem('formData', JSON.stringify([...existingData, newData]));

    if (typeof onFormSubmit === 'function') {
      onFormSubmit(formDataWithHorario); // Verifica que onFormSubmit sea una función
    } else {
      console.error("onFormSubmit no es una función");
    }
    onClose();
  };

  if (!selectedClass) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <div className="relative mb-4">
          <button onClick={onClose} className="absolute top-0 right-0 p-2 focus:outline-none">
            <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-center text-xl text-gray-800">Detalles de la clase</h2>
        </div>
        <div className="flex justify-between items-center mb-4 px-4 py-2 bg-gray-100 rounded-lg">
          <div className="flex flex-col items-start">
            <span className="text-lg font-medium text-blue-600">Clase</span>
            <span className="text-gray-700">{selectedClass.nombreClase}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-medium text-blue-600">Profesor</span>
            <span className="text-gray-700">{selectedClass.nombreProfesor}</span>
          </div>
        </div>
        <div className="relative mb-4">
          <label htmlFor="horario" className="block text-gray-700 mb-2 text-sm">Selecciona el horario</label>
          <select
            id="horario"
            value={selectedHorario}
            onChange={handleHorarioChange}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
          >
            {selectedClass.horarios.split(' / ').map((horario, index) => (
              <option key={index} value={horario}>
                {horario}
              </option>
            ))}
          </select>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 mb-2 text-sm">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apellido" className="block text-gray-700 mb-2 text-sm">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block text-gray-700 mb-2 text-sm">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 text-sm"
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;

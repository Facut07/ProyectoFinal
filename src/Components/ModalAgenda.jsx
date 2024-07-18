import React from 'react';

const ModalAgenda = ({ isOpen, onClose, classes }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg">
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-2xl font-bold">Agenda</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M15.707 4.293a1 1 0 0 1 1.414 1.414L11.414 12l5.707 5.293a1 1 0 1 1-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 12 3.293 6.707a1 1 0 0 1 1.414-1.414L10 10.586l5.293-5.293z"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          {classes.map((classInfo, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <h3 className="text-lg font-semibold">{classInfo.name}</h3>
              <p className="text-gray-600">{classInfo.date} - {classInfo.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalAgenda;

import React from 'react';
import { ITravels } from '@/interface/ITravels';
import FormularioTravel from './PostTravel';

interface ModalFormularioTravelProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTravel: (travel: ITravels) => void;
}

const ModalFormularioTravel: React.FC<ModalFormularioTravelProps> = ({ isOpen, onClose, onAddTravel }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-90'}`} style={{ maxHeight: '80vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <h2 className="text-2xl font-bold mb-4">Añadir Mascota</h2>
        <FormularioTravel onClose={onClose} onAddTravel={onAddTravel} />
        <div className="absolute top-3 right-3 cursor-pointer text-gray-500" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ModalFormularioTravel;

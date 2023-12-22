import { useState } from 'react';
import ModalSearch from './ModalSearch';

export default function Search() {
  const [modalSearchOpen, setModalSearchOpen] = useState<boolean>(false);

  const closeModal = () => {
    setModalSearchOpen(false);
  };
    
  return (
    <>
      <aside 
        onClick={() => setModalSearchOpen(true)}
        className={`text-2xl flex justify-center items-center gap-4 cursor-pointer text-white 
        font-medium hover:text-white/70 transition z-50 ${modalSearchOpen && 'hidden'}`}>
        <span className="md:block hidden">
          ¿Qué estás buscando?
        </span>
        <i className='bx bx-search'></i>
      </aside>

      {modalSearchOpen && (
        <ModalSearch 
          onClose={closeModal} 
          modalSearchOpen={modalSearchOpen}
        />
      )}
    </>
  )
}

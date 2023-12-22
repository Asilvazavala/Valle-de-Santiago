interface ModalSearchProps {
  onClose: () => void;
  modalSearchOpen: boolean;
}

const ModalSearch: React.FC<ModalSearchProps> = ({ 
  onClose,
  modalSearchOpen
}) => {
  return (
    <section className="fixed top-0 -left-6 lg:-left-16 w-screen h-screen flex items-center justify-center
     bg-white bg-opacity-100 overflow-hidden z-[9999]">
      <form 
        className={`flex flex-col gap-y-4 justify-center items-center w-full h-full relative transition
           ${modalSearchOpen ? 'animate-fadeIn' : 'animate-fadeOut'}`}
        id="handleSubmit"
      >
        <header className="flex justify-center items-center">
          <input 
            type="text" 
            title="Buscar"
            placeholder="¿Qué estás buscando?"
            className="px-4 py-2 w-[75vw] md:w-[40vw] outline-none text-xl border-b-gray 
            border-b-2 font-medium md:text-2xl"
          />
          
          <i className='bx bx-search text-secondary text-3xl lg:text-4xl cursor-pointer'></i>
        </header>

        <i 
          onClick={onClose} 
          className='bx bx-x-circle text-5xl  cursor-pointer absolute top-5 right-5 text-primary transition  
          md:right-28 lg:hover:text-primary/80 md:text-6xl '>  
        </i>
        
        <span className="flex flex-col text-center md:text-sm text-xs text-gray max-w-[75vw] lg:max-w-[40vw]">Escribe lo que estás buscando y presiona "Enter" o la lupa para buscar o bien, "Esc" para cancelar</span>
      </form>
    </section>
  )
}

export default ModalSearch;

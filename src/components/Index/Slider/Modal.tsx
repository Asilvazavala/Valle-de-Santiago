interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  return (
    <article className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
      <aside className="relative max-w-screen-md w-full max-h-screen overflow-hidden">
        <img
          src={imageUrl}
          alt={imageUrl}
          className="object-cover w-full max-h-[500px]"
        />
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={onClose}
        >
          <span className='px-2 rounded-full bg-red-700 lg:hover:bg-red-500 transition-colors text-2xl'>
            &times;
          </span>
        </button>
      </aside>
    </article>
  );
};

export default Modal;

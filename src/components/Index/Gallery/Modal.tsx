interface ModalProps {
  imageUrl: string;
  description: string;
  onClose: () => void;
  prevImage: () => void;
  nextImage: () => void;
}

const Modal: React.FC<ModalProps> = ({ 
  imageUrl, 
  description,
  onClose,
  prevImage,
  nextImage
}) => {
  return (
    <article className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
      <aside className="relative max-w-screen-md w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={imageUrl}
          title={imageUrl}
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

       <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-primary text-3xl opacity-70 hover:opacity-100 transition"
          onClick={prevImage}
        >
          <i className='bx bxs-left-arrow-circle'></i>
        </button>

       <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-primary text-3xl opacity-70 hover:opacity-100 transition"
          onClick={nextImage}
        >
          <i className='bx bxs-right-arrow-circle'></i>
        </button>

        <span className="text-lg absolute bottom-0 backdrop-blur text-black">
          {description}
        </span>
      </aside>
    </article>
  );
};

export default Modal;

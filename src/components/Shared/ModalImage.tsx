import { useState } from 'react';

const ModalImage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <article className="fixed top-0 left-0 w-full h-full items-center justify-center bg-black bg-opacity-80">
      <header className="bg-white p-8 rounded-md">
        <img
          src={`/images/sobre-valle/localizacion/${selectedImage}`}
          alt="Modal"
          className="w-full h-[50vh] object-contain"
        />
        <button
          className="mt-4 px-4 py-2 bg-red-500 lg:hover:bg-red-700 transition text-white rounded-md"
          onClick={closeModal}
        >
          Cerrar
        </button>
      </header>
    </article>
  )
};

export default ModalImage;
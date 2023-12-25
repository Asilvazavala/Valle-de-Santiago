import { searchData, type searchDataProps } from './search-data.astro';
import { useState } from 'react';

interface ModalSearchProps {
  onClose: () => void;
  modalSearchOpen: boolean;
}

const ModalSearch: React.FC<ModalSearchProps> = ({ 
  onClose,
  modalSearchOpen
}) => {
  
  const getRecentSearches = () => {
    const recentSearches = localStorage.getItem('recentSearches');
    return recentSearches ? JSON.parse(recentSearches) : [];
  };

  const [currentSearch, setCurrentSearch] = useState('');
  const [searchResults, setSearchResults] = useState<searchDataProps[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>(getRecentSearches());

  const handleSearch = (query: string) => {
    if (query.trim() !== '') {
      const newSearch = searchData.filter(
        (search) => search.title.toLowerCase().includes(query.trim().toLowerCase()));
      setSearchResults(newSearch);
    } else {
      setSearchResults([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (currentSearch.trim() !== '') {
      const recentSearches = getRecentSearches();
      const updatedRecentSearches = [currentSearch, ...recentSearches.slice(0, 2)];
      saveRecentSearches(updatedRecentSearches);
  
      setIsSearching(true)
      handleSearch(currentSearch);
    } else {
      setSearchResults([]);
    }
  
    e.stopPropagation();
  };

  const saveRecentSearches = (searches: string[]) => {
    localStorage.setItem('recentSearches', JSON.stringify(searches));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearching(false);
    setCurrentSearch(e.target.value);
  };
  

  return (
    <section className="fixed top-0 -left-4 lg:-left-16 w-screen h-screen flex items-center justify-center
     bg-white bg-opacity-100 overflow-x-hidden z-[9999]">
      <form 
        onSubmit={handleSubmit}
        className={`flex flex-col gap-y-4 justify-start items-center w-full h-full relative 
        transition overflow-x-hidden
        ${modalSearchOpen ? 'animate-fadeIn' : 'animate-fadeOut'}`}
      >
        <header className="flex justify-center items-center mt-16 w-full">
          <div className="flex justify-center items-center w-full">
            <input 
              autoFocus={true}
              type="text" 
              title="Buscar"
              placeholder="¿Qué estás buscando?"
              className="px-4 py-2 w-[75vw] md:w-[40vw] outline-none text-xl border-b-gray 
              border-b-2 font-medium md:text-2xl"
              onChange={handleChange}
            />
            
            <button type="submit">
              <i className='bx bx-search text-secondary text-3xl lg:text-4xl cursor-pointer'></i>
            </button>
          </div>
          
          <i 
            onClick={onClose} 
            className='bx bx-x-circle text-5xl cursor-pointer absolute top-0 right-5 text-primary transition  
            md:right-28 lg:hover:text-primary/80 md:text-6xl md:top-14 lg:top-0 lg:relative'>  
          </i>
        </header>

        {currentSearch.length < 1 &&
          <span className="flex flex-col text-center md:text-sm text-xs text-gray max-w-[75vw] lg:max-w-[40vw]">
            Escribe lo que estás buscando y presiona "Enter" o la lupa para buscar
          </span>
        }

        <div className="text-gray font-medium text-sm">
          {searchResults.length === 0 && currentSearch === '' && recentSearches.length > 0 && (
            <>
              <h3>Últimas búsquedas:</h3>
              <ul>
                {recentSearches.map((search, index) => (
                  <li key={index}>- {search}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {isSearching && searchResults.length > 0 && (
          <div className={`mt-2 px-4 md:px-0 
          ${currentSearch.length > 0 ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
            <h2 className="font-medium text-black/50 mb-2">
              {searchResults.length} {searchResults.length === 1 ? 'Resultado' : 'Resultados'}
            </h2>
            <ul>
              {searchResults.map(({ title, description, href}, index) => (
                <li key={index} className='flex max-[600px]:max-w-xs max-w-3xl border-b border-b-gray pb-2 mb-10'>
                  <header className='flex flex-col'>
                    <h3 className='text-primary text-xl font-semibold'>{title}</h3>
                    <p className='text-sm line-clamp-2'>{description}</p>
                    <a href={href} className='font-bold underline lg:hover:text-black/70 transition'>
                      Ver más...
                    </a>
                  </header>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isSearching && searchResults.length === 0 && (
          <span className='w-fit text-green-900 bg-green-600 text-center font-medium px-4 py-2 rounded-full animate-fadeIn'>
            No hay resultados de esta búsqueda
          </span>
        )}
      </form>
    </section>
  )
}

export default ModalSearch;

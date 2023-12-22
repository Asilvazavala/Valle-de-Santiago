import NavbarMobile from '../NavbarMobile/NavbarMobile.tsx';
import { linksNavbar } from './Navbar-data.astro';
import { useState } from 'react';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div id="navbar">
      <header className='hidden lg:block z-[9998] bg-gradient-to-r from-primary to-secondary fixed top-0 w-full'>
        <div className='py-4 containerSpace flex justify-between items-center'>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className={`text-white font-medium hover:text-white/70 
            transition flex items-center justify-center ${isSidebarOpen && 'opacity-0'}`}>
            <i className='bx bx-menu-alt-left text-2xl'></i>
            <span className='text-2xl'>Menú</span>
          </button>

          <span className='text-white font-medium text-2xl flex justify-center items-center gap-4
          hover:text-white/70 transition cursor-pointer'>
            ¿Qué estás buscando?<i className='bx bx-search'></i>
          </span>
        </div>
      </header>

      <div className={`shadow-lg fixed z-[9999] top-0 left-0 bg-gradient-to-r from-primary to-secondary w-68  
        flex justify-between items-center h-full duration-500 transform transition
        ${isSidebarOpen 
          ? '-translate-x-0' 
          : '-translate-x-full'
        }`}>

          {isSidebarOpen && 
            <section className="lg:flex hidden relative z-50">
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="absolute top-0 right-0 text-white hover:text-white/80 transition">
                <i className='bx bx-x-circle text-2xl'></i>
              </button>

              <nav className="flex flex-col items-start my-24 justify-between h-full">
                {linksNavbar.map(link => (
                  <ul className="text-lg text-white font-semibold">
                      {link.href !== ''
                        ? <a href={link.href}>
                            <li className="flex items-center gap-x-1 py-3
                              border-transparent border-b-[3px] lg:hover:border-b-white transition-colors">
                              {link.title}
                            </li>
                          </a>
                        : <li className="flex gap-x-1 py-3 group relative w-fit
                            border-transparent border-b-[3px] lg:hover:border-b-white transition-colors">
                            {link.title}
                            <span className="flex items-center justify-center" dangerouslySetInnerHTML={{ __html: link.icon }}></span>
                            
                            {link.submenu.length > 0 && (
                              <ul className="group-hover:block absolute hidden top-12 bg-primary 
                              shadow-md z-50 text-white/70 mt-2">
                                {link.submenu.map((item, index) => (
                                  <a href={item.link}>
                                    <li className={`px-4 py-2 hover:bg-secondary lg:w-40",
                                      ${index !== link.submenu.length - 1 && "border-b border-white/20"}`}
                                    >
                                      {item.label}
                                    </li>
                                  </a>
                                ))}
                              </ul>
                            )}
                          </li>
                      }
                    </ul>
                  ))}
              </nav>
            </section>
          }
        </div>
      <NavbarMobile />
    </div>
  )
}
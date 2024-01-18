import NavbarMobile from "../NavbarMobile/NavbarMobile.tsx";
import { linksNavbar } from "./Navbar-data.astro";
import { useState } from "react";
import Confetti from "../Confetti.tsx";
import Search from "../../Index/Search/Search.tsx";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div id="navbar" className="mb-16 lg:mb-20">
      <header
        className="hidden lg:block z-[9998] bg-gradient-to-r from-primary to-secondary 
      fixed top-0 w-full"
      >
        <div className="py-4 containerSpace flex justify-between items-center relative">
          <aside className="flex gap-2">
            <a href="/">
              <img
                src="/images/general/Logo-Valle.webp"
                alt="Logo-Valle"
                title="Logo-Valle"
                className="h-auto w-24 object-cover"
              />
            </a>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`text-white font-medium hover:text-white/70 
            transition flex items-center justify-center ${
              isSidebarOpen && "opacity-0"
            }`}
            >
              <i className="bx bx-menu-alt-left text-2xl"></i>
              <span className="text-2xl">Menú</span>
            </button>
          </aside>

          <Confetti />
          <Search />
        </div>
      </header>

      <div
        className={`shadow-lg fixed z-[9999] top-0 left-0 bg-gradient-to-r from-primary to-secondary 
        flex justify-between items-center h-full duration-700 transition w-68  
        ${
          isSidebarOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-150%]"
        }`}
      >
        {isSidebarOpen && (
          <section className="lg:flex hidden relative z-50 overflow-x-hidden">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-0 right-0 text-white hover:text-white/80 transition"
            >
              <i className="bx bx-x-circle text-4xl"></i>
            </button>

            <nav className="flex flex-col items-start my-24 justify-between h-full">
              {linksNavbar.map((link, index) => (
                <ul key={index} className="text-lg text-white font-semibold">
                  {link.href !== "" ? (
                    <a href={link.href}>
                      <li
                        className="flex items-center justify-center gap-x-2 py-3
                              border-transparent border-b-[3px] lg:hover:border-b-white transition-colors"
                      >
                        <span
                          className="flex text-xl"
                          dangerouslySetInnerHTML={{ __html: link.image }}
                        ></span>
                        {link.title}
                      </li>
                    </a>
                  ) : (
                    <li
                      className="flex items-center justify-center gap-x-2 py-3 group relative w-fit
                            border-transparent border-b-[3px] lg:hover:border-b-white transition-colors"
                    >
                      <span
                        className="flex text-xl"
                        dangerouslySetInnerHTML={{ __html: link.image }}
                      ></span>
                      {link.title}
                      <span
                        className="flex"
                        dangerouslySetInnerHTML={{ __html: link.icon }}
                      ></span>

                      {link.submenu.length > 0 && (
                        <ul
                          className="group-hover:block absolute hidden top-12 bg-primary 
                              shadow-md z-50 text-white/70 mt-2"
                        >
                          {link.submenu.map((item, index) => (
                            <a key={index} href={item.link}>
                              <li
                                className={`px-4 py-2 hover:bg-secondary lg:w-40",
                                      ${
                                        index !== link.submenu.length - 1 &&
                                        "border-b border-white/20"
                                      }`}
                              >
                                {item.label}
                              </li>
                            </a>
                          ))}
                        </ul>
                      )}
                    </li>
                  )}
                </ul>
              ))}
            </nav>
          </section>
        )}
      </div>
      <NavbarMobile />
    </div>
  );
}

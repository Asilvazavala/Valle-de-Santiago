import Search from "../../Index/Search/Search.tsx";
import Confetti from "../Confetti.tsx";
import { linksNavbar } from "../Navbar/Navbar-data.astro";
import { useState } from "react";

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuStates, setSubmenuStates] = useState(
    linksNavbar.map(() => false)
  );

  const toggleSubmenu = (index: number) => {
    const newSubmenuStates = [...submenuStates];
    newSubmenuStates[index] = !newSubmenuStates[index];
    setSubmenuStates(newSubmenuStates);
  };

  return (
    <header
      className="lg:hidden bg-gradient-to-r from-primary to-secondary py-3 md:px-6 fixed 
    top-0 z-[9998] w-full"
    >
      <section className="flex justify-between gap-4 items-center">
        <div className="flex gap-3 justify-center items-center">
          <a href="/">
            <img
              src="/images/general/Logo-Valle.webp"
              alt="Logo-Valle"
              title="Logo-Valle"
              className="h-auto w-28 object-cover"
            />
          </a>
          <Confetti />
        </div>

        <aside className="flex gap-x-2">
          <div className={`${isMenuOpen && "hidden"} flex`}>
            <Search />
          </div>

          <i
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`bx bx-menu-alt-right text-4xl text-white z-50 transition duration-700
          ${isMenuOpen ? "delay-0 scale-0" : "delay-200"}`}
          ></i>

          <i
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`bx bx-x scale-0 text-4xl text-white z-50 fixed top-[14px] right-4 transition 
            duration-700 ${
              isMenuOpen ? "scale-100 block delay-200" : "delay-0"
            }`}
          ></i>
        </aside>

        <ul
          className={`z-40 w-full h-screen fixed right-0 top-0 transition duration-700 
        pt-20 flex flex-col gap-y-8 bg-gradient-to-r from-primary to-secondary overflow-y-auto
        ${isMenuOpen ? "translate-x-0" : "translate-x-[-150%]"}`}
        >
          {linksNavbar.map((item, index) => (
            <div key={index}>
              {item.href !== "" ? (
                <li
                  className="flex w-full text-2xl py-2
                  border-b border-white px-8"
                >
                  <a
                    href={item.href}
                    className="w-full text-white flex justify-start items-center gap-x-2"
                  >
                    <span
                      className="text-white flex"
                      dangerouslySetInnerHTML={{ __html: item.image }}
                    ></span>
                    {item.title}
                  </a>
                </li>
              ) : (
                <li
                  className="flex flex-col justify-between w-full text-2xl py-2 border-white border-b 
                  px-8 text-white"
                >
                  <article
                    id={`toggleSubmenu${index}`}
                    className="flex justify-between items-center"
                    onClick={() => toggleSubmenu(index)}
                  >
                    <div className="flex justify-start items-center gap-x-2">
                      <span
                        className="text-white flex"
                        dangerouslySetInnerHTML={{ __html: item.image }}
                      ></span>
                      <span>{item.title}</span>
                    </div>
                    <span
                      className="text-white flex"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></span>
                  </article>

                  {item.submenu.length > 0 && (
                    <ul
                      id={`ulMobile${index}`}
                      className={`flex-col ${
                        submenuStates[index] ? "" : "hidden"
                      } 
                      bg-primary shadow-md text-white z-50`}
                    >
                      {item.submenu.map((link, index) => (
                        <a href={link.link} key={index}>
                          <li
                            className={`px-4 py-2 hover:bg-secondary lg:w-40 text-white/70                       
                            ${
                              index !== item.submenu.length - 1 &&
                              "border-b border-white/20"
                            }`}
                          >
                            {link.label}
                          </li>
                        </a>
                      ))}
                    </ul>
                  )}
                </li>
              )}
            </div>
          ))}
        </ul>
      </section>
    </header>
  );
}

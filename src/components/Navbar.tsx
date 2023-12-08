import { IoIosArrowDown } from "react-icons/io";

interface NavbarProps {
  title: string;
  href: string;
  icon: React.ReactNode | string;
}

const linksNavbar: NavbarProps[] = [
  {
    title: 'Inicio',
    href: '',
    icon: ''
  },
  {
    title: 'Sobre el Municipio',
    href: '',
    icon: <IoIosArrowDown />
  },
  {
    title: 'Algo de Historia',
    href: '',
    icon: <IoIosArrowDown />
  },
  {
    title: 'Sitios de interés',
    href: '',
    icon: <IoIosArrowDown />
  },
  {
    title: 'Un Valle Misterioso',
    href: '',
    icon: <IoIosArrowDown />
  },
  // {
  //   title: 'Nuestras instituciones',
  //   href: '',
  //   icon: <IoIosArrowDown />
  // },
  // {
  //   title: 'Nuestras gentes',
  //   href: '',
  //   icon: <IoIosArrowDown />
  // },
  // {
  //   title: 'Empresas Locales',
  //   href: '',
  //   icon: <IoIosArrowDown />
  // },
  // {
  //   title: 'Enlaces y Cápsulas',
  //   href: '',
  //   icon: ''
  // },
  // {
  //   title: 'Descargas',
  //   href: '',
  //   icon: ''
  // },
  // {
  //   title: 'Libro/Foro de visitas',
  //   href: '',
  //   icon: ''
  // },
  {
    title: 'Mapa y Actualizaciones',
    href: '',
    icon: <IoIosArrowDown />
  },
  {
    title: 'Sobre el Autor',
    href: '',
    icon: <IoIosArrowDown />
  }
]

export default function Navbar() {

  return(
    <div className="hidden lg:block shadow-lg">
      <section>
        <nav className="flex justify-between w-full">
            {linksNavbar.map(link => (
            <ul className="text-sm text-secondary font-semibold">
                <li className="cursor-pointer flex justify-between items-center gap-x-1 py-2 max-w-[8rem]
                border-transparent border-b-[3px] lg:hover:border-b-secondary transition-colors">
                  {link.title}
                  <span>{link.icon}</span>
                </li>
              </ul>
            ))}
        </nav>
      </section>
    </div>
  )
}
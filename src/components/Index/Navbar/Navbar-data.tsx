import { IoIosArrowDown } from "react-icons/io";

interface NavbarProps {
  title: string;
  href: string;
  icon: React.ReactNode | string;
}

export const linksNavbar: NavbarProps[] = [
  {
    title: 'Inicio',
    href: '/',
    icon: ''
  },
  {
    title: 'Sobre Valle',
    href: '',
    icon: <IoIosArrowDown />
  },
  {
    title: 'Historia',
    href: '',
    icon: <IoIosArrowDown />
  },
  {
    title: 'Sitios de interés',
    href: '',
    icon: <IoIosArrowDown />
  },
  {
    title: 'Actualizaciones',
    href: '',
    icon: <IoIosArrowDown />
  },
  {
    title: 'Sobre el Autor',
    href: '',
    icon: <IoIosArrowDown />
  }
]
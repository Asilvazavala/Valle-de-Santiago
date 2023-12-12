import type { ReactNode } from 'react';

interface NavbarProps {
  title: string;
  href: string;
  icon: ReactNode | string;
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
    icon: <i className='bx bx-chevron-down'></i>
  },
  {
    title: 'Historia',
    href: '',
    icon: <i className='bx bx-chevron-down'></i>
  },
  {
    title: 'Sitios de interés',
    href: '',
    icon: <i className='bx bx-chevron-down'></i>
  },
  {
    title: 'Actualizaciones',
    href: '',
    icon: <i className='bx bx-chevron-down'></i>
  },
  {
    title: 'Sobre el Autor',
    href: '',
    icon: <i className='bx bx-chevron-down'></i>
  }
]
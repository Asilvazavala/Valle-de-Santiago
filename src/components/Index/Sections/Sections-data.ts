interface sectionsProps {
  title: string;
  className: string;
  image: string;
  link: string;
}

export const sections: sectionsProps[] = [
  {
    title: 'Descargas',
    className: 'bg-blue-300/30 hover:bg-blue-300/0',
    image: 'images/sections/descargas.webp',
    link: '/' 
  },
  {
    title: 'Foro de visitas',
    className: 'bg-yellow-300/30 hover:bg-yellow-300/0',
    image: 'images/sections/foro.webp',
    link: '/' 
  },
  {
    title: 'Mapa',
    className: 'bg-green-300/30 hover:bg-green-300/0',
    image: 'images/sections/mapa.webp',
    link: '/' 
  },
  {
    title: 'Enlaces',
    className: 'bg-orange-300/30 hover:bg-orange-300/0',
    image: 'images/sections/enlaces.webp',
    link: '/' 
  },
]
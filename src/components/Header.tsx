import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

interface headerProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const itemsHeader: headerProps[] = [
  {
    title: 'Valle de Santiago, Gto',
    icon: <IoLocationSharp />,
    href: 'https://www.google.com.mx/maps/place/Valle+de+Santiago,+Gto./@20.3937121,-101.2390669,13z/data=!3m1!4b1!4m6!3m5!1s0x842c8d0935957e15:0x3a870577baeca000!8m2!3d20.392169!4d-101.1900528!16s%2Fg%2F113qbm70p?entry=ttu'
  },
  {
    title: 'CP: 38400',
    icon: <FaPhoneAlt />,
    href: 'tel:1234567890'
  }
]

export default function Header () {
  return (
    <>
      <header className="bg-primary">
        <section className="py-[0.65rem] text-white font-medium flex items-center gap-x-8">
          {itemsHeader.map(item => (
            <a 
              key={item.title}        
              className="flex items-center justify-center gap-x-2" 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </a>
          ))}
        </section>
      </header>
    </>
  )
}
import { linksNavbar } from './Navbar-data';

export default function Navbar() {

  return(
    <div className="hidden lg:block shadow-lg">
      <section className="flex gap-x-60">
      <a href="/">
        <img 
          src="images/LogoValle.jpg" 
          alt="Logo-valle" 
          title="Logo-valle"
          className="w-24 h-12"
        />
      </a>

        <nav className="flex items-end justify-between w-full">
            {linksNavbar.map(link => (
            <ul className="text-sm text-secondary font-semibold">
                {link.href !== ''
                  ? <a href={link.href}>
                      <li className="flex justify-between items-center gap-x-1 py-3
                        border-transparent border-b-[3px] lg:hover:border-b-secondary transition-colors">
                        {link.title}
                        <span>{link.icon}</span>
                      </li>
                    </a>
                  : <li className="flex justify-between items-center gap-x-1 py-3
                      border-transparent border-b-[3px] lg:hover:border-b-secondary transition-colors">
                      {link.title}
                      <span>{link.icon}</span>
                    </li>
                }
              </ul>
            ))}
        </nav>
      </section>
    </div>
  )
}
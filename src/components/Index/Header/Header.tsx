import { itemsHeader } from './Header-data';

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
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-[#f8f9fa] border-b-2 border-black sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-between text-xl font-bold uppercase">
          <li><Link href="#experience" className="hover:underline text-base md:text-xl">Experencia</Link></li>
          <li><Link href="#projects" className="hover:underline text-base md:text-xl">Proyectos</Link></li>
          <li><Link href="#skills" className="hover:underline text-base md:text-xl">Skills</Link></li>
          <li><Link href="#contact" className="hover:underline text-base md:text-xl">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default function Navbar() {
    return (
        <header className="bg-[#f8f9fa] border-b border-black sticky top-0 z-50 shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold uppercase">Fabrizzio Portillo</h1>
                <ul className="flex space-x-4">
                    <li><a href="#skills" className="hover:underline">Skills</a></li>
                    <li><a href="#Projects" className="hover:underline">Proyectos</a></li>
                    <li><a href="#contact" className="hover:underline">Contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}
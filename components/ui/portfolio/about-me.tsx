import { Button } from "@/components/ui/button"
import Link from "next/link"

import Image from "next/image"
import Picture from "@/components/images/pfp.png"



export default function AboutMe() {
    return (
        <section className="flex flex-col md:flex-row gap-8 justify-center items-center h-auto pb-8 md:py-8 md:h-[calc(100vh-4rem)] overflow-hidden">
            <div className="flex justify-center items-center w-full md:w-4/12 h-full overflow-hidden">
                <Image
                    src={Picture}
                    alt="Fabrizzio Portillo"
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-8 justify-center items-center">
                <h1 className="text-5xl md:text-7xl font-normal text-center">Fabrizzio Portillo</h1>
                <h2 className="text-2xl md:text-4xl font-normal text-center uppercase">Backend Developer</h2>
                <p className="text-base md:text-xl max-w-2xl px-4 md:text-justify">
                    Soy un apasionado de la programación con una sólida formación en Python, JavaScript/TypeScript y Golang. 
                    Mi experiencia laboral se ha centrado en el desarrollo de APIs REST, lo que me ha permitido adquirir un profundo conocimiento en la creación de soluciones. 
                    Actualmente, busco nuevos desafíos profesionales que me permitan seguir evolucionando y explorando tecnologías innovadoras.
                </p>
                <div className="flex justify-center gap-2 flex-wrap">
                    <Link href="#contact">
                        <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black text-xl py-6 px-12 transition-colors duration-300">
                                Contacto
                        </Button>
                    </Link>
                    <Link href="/curriculum.pdf">
                        <Button className="bg-black text-white hover:bg-white hover:text-black border-2 border-black text-xl py-6 px-12 transition-colors duration-300">
                                Descargar Curriculum
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
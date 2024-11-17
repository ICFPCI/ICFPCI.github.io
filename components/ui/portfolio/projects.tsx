import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Projects() {
	return (
		<section id="projects" className="py-24">
			<div className="container mx-auto px-4">
				<h3 className="text-5xl font-bold mb-12 uppercase">Proyectos</h3>
				<div className="space-y-12">
					<div className="border-2 border-black p-8">
						<h4 className="text-3xl font-bold mb-4">SimpleChat</h4>
						<p className="text-base md:text-xl mb-6">
							Aplicación Web Fullstack con API REST y WebSockets. Construida utilizando Python, Django, SQLite y SvelteKit.
						</p>
						<div className="flex gap-2 flex-wrap">
							<Link href="https://github.com/ICFPCI/dj_simplechat">
								<Button variant="outline" className="border-2 border-black hover:bg-black hover:text-white text-xl py-4 px-8">
									Ver Backend
								</Button>
							</Link>
							<Link href="https://github.com/ICFPCI/svelte_simplechat">
								<Button variant="outline" className="border-2 border-black hover:bg-black hover:text-white text-xl py-4 px-8">
									Ver Frontend
								</Button>
							</Link>
						</div>
					</div>
					<div className="border-2 border-black p-8">
						<h4 className="text-3xl font-bold mb-4">Cashpal</h4>
						<p className="text-base md:text-xl mb-6">
							API REST para gestión de ingresos y egresos. Construida utilizando Golang y PostgresSQL.
						</p>
						<Link href="https://github.com/ICFPCI/Cashpal">
							<Button variant="outline" className="border-2 border-black hover:bg-black hover:text-white text-xl py-4 px-8">
								Ver Proyecto
							</Button>
						</Link>
					</div>
					<div className="border-2 border-black p-8">
						<h4 className="text-3xl font-bold mb-4">Cache Proxy</h4>
						<p className="text-base md:text-xl mb-6">
							Herramienta CLI para iniciar un servidor proxy de caché. Construida utilizando Golang y Redis.
						</p>
						<Link href="https://github.com/ICFPCI/go-http-cache-proxy">
							<Button variant="outline" className="border-2 border-black hover:bg-black hover:text-white text-xl py-4 px-8">
								Ver Proyecto
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
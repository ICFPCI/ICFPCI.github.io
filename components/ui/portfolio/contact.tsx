import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export default function Contact() {
	return (
		<section id="contact" className="py-24 text-black">
			<div className="container mx-auto px-4 text-center">
				<h3 className="text-5xl font-bold mb-12 uppercase">Ponte en contacto</h3>
				<p className="text-2xl mb-12">Abierto a nuevas oportunidades y colaboraciones.</p>
				<div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8">
					<Link href="mailto:fbzzportillo@gmail.com">
						<Button variant="outline" className="border-black hover:bg-black hover:text-white text-xl py-4 px-8">
							<Mail className="mr-2 h-6 w-6" />
							Email
						</Button>
					</Link>
					<Link href="https://github.com/ICFPCI">
						<Button variant="outline" className="border-black hover:bg-black hover:text-white text-xl py-4 px-8">
							<Github className="mr-2 h-6 w-6" />
							GitHub
						</Button>
					</Link>
					<Link href="https://www.linkedin.com/in/fabrizzio-portillo/">
						<Button variant="outline" className="border-black hover:bg-black hover:text-white text-xl py-4 px-8">
							<Linkedin className="mr-2 h-6 w-6" />
							LinkedIn
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}
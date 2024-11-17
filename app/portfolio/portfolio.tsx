import Navbar from "@/components/ui/portfolio/navbar2"
import AboutMe from "@/components/ui/portfolio/about-me"
import Skills from "@/components/ui/portfolio/skills"
import Projects from "@/components/ui/portfolio/projects"
import Contact from "@/components/ui/portfolio/contact"
import Footer from "@/components/ui/portfolio/footer"
import { GeistMono } from 'geist/font/mono';
import Experience from "@/components/ui/portfolio/experience"

export default function Portfolio() {
    return (
        <div className={`min-h-screen bg-[#f8f9fa] text-black sm:font-mono ${GeistMono.className} antialiased`}>
            <Navbar />

            <main>
                <AboutMe />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}
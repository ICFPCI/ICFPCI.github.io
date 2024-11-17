// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Code2, Database, Server } from 'lucide-react'

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl font-bold mb-12 uppercase">Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-2xl">
              <li className="border-2 border-white p-6">Python</li>
              <li className="border-2 border-white p-6">JavaScript/TypeScript</li>
              <li className="border-2 border-white p-6">Golang</li>
              <li className="border-2 border-white p-6">Django</li>
              <li className="border-2 border-white p-6">SvelteKit</li>
              <li className="border-2 border-white p-6">Git/Github</li>
              <li className="border-2 border-white p-6">Docker</li>
              <li className="border-2 border-white p-6">PostgreSQL</li>
              <li className="border-2 border-white p-6">Redis</li>
            </ul>
          </div>
        </section>
    )
}
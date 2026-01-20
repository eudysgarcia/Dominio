"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { ExternalLink, Code } from "lucide-react"

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGitlab: string,
        urlDemo: string,
        technologies?: string[],
        description?: {
            es: string,
            en: string
        }
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props
    const { language } = useLanguage()

    const { title, image, urlGitlab, urlDemo, technologies, description } = data

    return ( 
        <div className="group w-full">
            <div className="relative pt-28 pb-6 px-5 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/60 backdrop-blur-sm 
                border-2 border-gray-700/30 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
                
                {/* Imagen flotando encima del borde */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[85%]">
                    <div className="relative overflow-hidden rounded-xl border-4 border-blue-500/40 group-hover:border-blue-400 transition-all duration-300 shadow-2xl bg-gray-900">
                        <Image 
                            src={image} 
                            alt={title} 
                            width={300} 
                            height={200} 
                            className="w-full h-44 object-contain transition-transform duration-300 group-hover:scale-105 p-3"
                        />
                    </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 text-center mt-2">
                    {title}
                </h3>

                {description && (
                    <p className="text-sm text-gray-400 mb-4 line-clamp-2 text-center">
                        {description[language]}
                    </p>
                )}

                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5 justify-center">
                        {technologies.map((tech) => (
                            <span 
                                key={tech} 
                                className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex gap-3">
                    <Link 
                        href={urlGitlab} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 transition-all duration-300 rounded-lg 
                        bg-gray-700/40 border border-gray-600/50 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-500
                        hover:shadow-lg font-medium text-sm" 
                    >
                        <Code size={16} />
                        GitHub
                    </Link>
                    {urlDemo !== "#!" && (
                        <Link 
                            href={urlDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 transition-all duration-300 rounded-lg 
                            bg-blue-500 border border-blue-400 text-white hover:bg-blue-600 
                            hover:shadow-lg hover:shadow-blue-500/50 font-medium text-sm" 
                        >
                            <ExternalLink size={16} />
                            Demo
                        </Link>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default PortfolioBox;
"use client"

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import { professionalProfile, personalInfo } from "@/data";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Introduction = () => {
    const { language } = useLanguage();

    const sequences = {
        es: [
            "Simplifica lo complejo.",
            1000,
            "Automatiza lo repetitivo.",
            1000,
            "Mejora lo existente.",
            1000,
            "Revoluciona el futuro.",
            1000
        ],
        en: [
            "Simplify the complex.",
            1000,
            "Automate the repetitive.",
            1000,
            "Improve what exists.",
            1000,
            "Revolutionize the future.",
            1000
        ]
    };

    return ( 
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 flex items-center justify-center h-full py-10 md:py-0 flex-wrap px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-0 md:mr-20"
                >
                    <Image 
                        src="/home-5.png" 
                        priority 
                        width="1200" 
                        height="1200" 
                        alt="Eudys García - Full Stack Developer" 
                        className="w-100 h-100 md:w-[450px] md:h-[650px] object-contain"
                    />
                </motion.div>
    
                <motion.div 
                    className="flex flex-col justify-center max-w-2xl"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="mb-4 text-2xl leading-tight text-center md:text-left md:text-5xl md:mb-6">
                        {language === 'es' ? 'Piensa. Programa. Perfecciona.' : 'Think. Code. Perfect.'}
                        <span className="block mt-2">
                            <TypeAnimation 
                                sequence={sequences[language]}
                                speed={50}
                                repeat={Infinity}
                                className="font-bold text-newbrand"
                            />
                        </span>
                    </h1>
                    <p className="mx-auto mb-6 text-base md:text-lg leading-relaxed md:mx-0 md:mb-8 text-gray-300">
                        {professionalProfile[language]}
                    </p>
                    <div className="flex flex-wrap items-center mb-4 justify-center gap-3 md:justify-start md:gap-4">
                        <Link 
                            href="/portfolio" 
                            className="px-6 py-3 transition-all border-2 cursor-pointer text-sm md:text-base font-semibold
                            rounded-xl hover:shadow-xl hover:shadow-white/50 hover:scale-105 hover:bg-white hover:text-secondary" >
                            {language === 'es' ? 'Ver proyectos' : 'View projects'}
                        </Link>
                        <Link 
                            href="https://wa.link/34j9wj" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 transition-all border-2 border-newbrand text-newbrand cursor-pointer text-sm md:text-base font-semibold
                            rounded-xl hover:shadow-xl hover:shadow-newbrand/50 hover:scale-105 hover:bg-newbrand hover:text-white" >
                            {language === 'es' ? 'Contacta conmigo' : 'Contact me'}
                        </Link>
                        <a 
                            href={personalInfo.cvLinks[language]} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 transition-all border-2 border-blue-400 text-blue-400 cursor-pointer text-sm md:text-base font-semibold
                            rounded-xl hover:shadow-xl hover:shadow-blue-400/50 hover:scale-105 hover:bg-blue-400 hover:text-black flex items-center gap-2" >
                            <Download size={18} />
                            {language === 'es' ? 'Ver CV' : 'View CV'}
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default Introduction;
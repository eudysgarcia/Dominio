"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-component";
import { socialNetworks, itemsNavbar } from "@/data";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
    const router = usePathname();
    const { language } = useLanguage();

    return ( 
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-4 md:px-20">
            <header>
                <div className="container max-w-7xl mx-auto">
                    {/* Todo en una sola línea: Logo - Navbar - Redes sociales */}
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/">
                            <h1 className="my-3 text-3xl md:text-4xl font-light hover:scale-105 transition-transform duration-300">
                                Eudys
                                <span> </span> 
                                <span className="text-newbrand font-bold">
                                    García
                                </span>
                            </h1>
                        </Link>

                        {/* Navbar horizontal centrado (solo desktop) */}
                        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                            <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/60 backdrop-blur-xl shadow-2xl border border-blue-500/30">
                                {itemsNavbar.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={item.link}
                                        className={`px-5 py-2.5 transition-all duration-300 rounded-full cursor-pointer hover:bg-blue-500 hover:scale-105 flex items-center gap-2
                                        ${router === item.link && 'bg-blue-500 scale-105 shadow-lg shadow-blue-500/50'}`}
                                        title={typeof item.title === 'string' ? item.title : item.title[language]}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        {/* Redes sociales y toggle de idioma */}
                        <div className="flex items-center gap-4 md:gap-7">
                            <div className="flex items-center gap-4 md:gap-5">
                                {socialNetworks.map(({logo, src, id, name}) => (
                                    <Link 
                                        key={id}
                                        href={src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-all duration-300 hover:text-newbrand hover:scale-110"
                                        aria-label={name}
                                        title={name}
                                    >
                                        {logo}
                                    </Link>
                                ))}
                            </div>
                            <LanguageToggle />
                        </div>
                    </div>
                </div>
            </header>
        </MotionTransition>
     );
}
 
export default Header;
"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, socialNetworks } from "@/data";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer className="mt-auto py-8 px-4 border-t border-blue-500/20 bg-gradient-to-b from-transparent to-black/40">
            <div className="max-w-6xl mx-auto mb-16 lg:mb-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-newbrand">
                            {language === 'es' ? 'Contacto' : 'Contact'}
                        </h3>
                        <div className="space-y-3">
                            <a 
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-2 text-gray-300 hover:text-newbrand transition-colors duration-300"
                            >
                                <Mail size={18} />
                                <span className="text-sm">{personalInfo.email}</span>
                            </a>
                            <a 
                                href={`tel:${personalInfo.phone}`}
                                className="flex items-center gap-2 text-gray-300 hover:text-newbrand transition-colors duration-300"
                            >
                                <Phone size={18} />
                                <span className="text-sm">{personalInfo.phone}</span>
                            </a>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin size={18} />
                                <span className="text-sm">{personalInfo.location[language]}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-newbrand">
                            {language === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
                        </h3>
                        <div className="space-y-2">
                            <Link href="/about-me" className="block text-gray-300 hover:text-newbrand transition-colors duration-300 text-sm">
                                {language === 'es' ? 'Sobre Mí' : 'About Me'}
                            </Link>
                            <Link href="/services" className="block text-gray-300 hover:text-newbrand transition-colors duration-300 text-sm">
                                {language === 'es' ? 'Servicios' : 'Services'}
                            </Link>
                            <Link href="/portfolio" className="block text-gray-300 hover:text-newbrand transition-colors duration-300 text-sm">
                                {language === 'es' ? 'Portafolio' : 'Portfolio'}
                            </Link>
                        </div>
                    </div>

                    {/* Social Networks */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-newbrand">
                            {language === 'es' ? 'Redes Sociales' : 'Social Networks'}
                        </h3>
                        <div className="flex gap-4">
                            {socialNetworks.map(({ id, logo, src, name }) => (
                                <Link
                                    key={id}
                                    href={src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-newbrand transition-all duration-300 hover:scale-110"
                                    aria-label={name}
                                    title={name}
                                >
                                    {logo}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} {personalInfo.name}. {' '}
                        {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

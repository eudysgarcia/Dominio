"use client"

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { personalInfo } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactInfo = () => {
    const { language } = useLanguage();

    const contactItems = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: personalInfo.email,
            href: `mailto:${personalInfo.email}`,
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Phone size={24} />,
            label: language === 'es' ? 'Teléfono' : 'Phone',
            value: personalInfo.phone,
            href: `tel:${personalInfo.phone}`,
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <MapPin size={24} />,
            label: language === 'es' ? 'Ubicación' : 'Location',
            value: personalInfo.location[language],
            href: null,
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <div className="mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="text-newbrand">
                    {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {contactItems.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {item.href ? (
                            <a
                                href={item.href}
                                className="block p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm 
                                border border-white/10 hover:border-newbrand/50 transition-all duration-300 hover:scale-105 
                                hover:shadow-xl hover:shadow-newbrand/20"
                            >
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-white">{item.label}</h3>
                                <p className="text-gray-300 text-sm break-words">{item.value}</p>
                            </a>
                        ) : (
                            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm 
                                border border-white/10">
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-white">{item.label}</h3>
                                <p className="text-gray-300 text-sm">{item.value}</p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Download CV Button */}
            <div className="flex justify-center mt-8">
                <a
                    href={personalInfo.cvLinks[language]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-newbrand to-blue-600 
                    rounded-xl font-semibold text-white hover:scale-105 transition-all duration-300 
                    hover:shadow-xl hover:shadow-newbrand/50"
                >
                    <Download size={24} />
                    {language === 'es' ? 'Ver CV Completo' : 'View Full CV'}
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;

"use client"

import { motion } from "framer-motion";
import { experience } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
    const { language } = useLanguage();

    return (
        <div className="mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="text-newbrand">
                    {language === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
                </span>
            </h2>
            <div className="space-y-6">
                {experience.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="p-6 rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-newbrand/50 transition-all duration-300 hover:shadow-xl hover:shadow-newbrand/20"
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div className="p-4 rounded-lg bg-newbrand/20 text-newbrand w-fit">
                                <Briefcase size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-2 text-white">
                                    {exp.title[language]}
                                </h3>
                                <div className="flex flex-wrap gap-4 mb-4 text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <Briefcase size={16} className="text-newbrand" />
                                        <span className="font-semibold">{exp.company}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-newbrand" />
                                        <span>{exp.location[language]}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-newbrand" />
                                        <span className="text-newbrand font-medium">{exp.date[language]}</span>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {exp.description[language].map((desc, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-300">
                                            <span className="text-newbrand mt-1">▸</span>
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;

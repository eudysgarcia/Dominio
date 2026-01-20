"use client"

import { motion } from "framer-motion";
import { Code, Database, Layers, Server, Monitor, Settings } from "lucide-react";
import { skills } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillsSection = () => {
    const { language } = useLanguage();

    const skillCategories = [
        {
            title: language === 'es' ? 'Lenguajes' : 'Languages',
            icon: <Code size={24} />,
            items: skills.languages,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: language === 'es' ? 'Frameworks & Librerías' : 'Frameworks & Libraries',
            icon: <Layers size={24} />,
            items: skills.frameworks,
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: language === 'es' ? 'Bases de Datos' : 'Databases',
            icon: <Database size={24} />,
            items: skills.databases,
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: language === 'es' ? 'Herramientas' : 'Tools',
            icon: <Settings size={24} />,
            items: skills.tools,
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Frontend',
            icon: <Monitor size={24} />,
            items: skills.frontend,
            color: 'from-yellow-500 to-orange-500'
        },
        {
            title: language === 'es' ? 'Metodologías' : 'Methodologies',
            icon: <Server size={24} />,
            items: skills.methodology,
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    return (
        <div className="mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="text-newbrand">
                    {language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-newbrand/50 transition-all duration-300 hover:shadow-xl hover:shadow-newbrand/20"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-sm bg-white/10 rounded-full hover:bg-newbrand/20 transition-colors duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;

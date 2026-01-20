"use client"

import { motion } from "framer-motion";
import { education } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";

const EducationSection = () => {
    const { language } = useLanguage();

    return (
        <div className="mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="text-newbrand">
                    {language === 'es' ? 'Educación' : 'Education'}
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-newbrand/50 transition-all duration-300 hover:shadow-xl hover:shadow-newbrand/20 hover:scale-105"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-newbrand/20 text-newbrand">
                                {edu.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-white">
                                    {typeof edu.degree === 'string' ? edu.degree : edu.degree[language]}
                                </h3>
                                <p className="text-gray-300 text-sm mb-2">
                                    {typeof edu.institution === 'string' ? edu.institution : edu.institution[language]}
                                </p>
                                <p className="text-newbrand text-sm font-medium">
                                    {typeof edu.date === 'string' ? edu.date : edu.date[language]}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EducationSection;

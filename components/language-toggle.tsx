"use client"

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 border-2 border-newbrand rounded-full hover:bg-newbrand/20 hover:shadow-lg hover:shadow-newbrand/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Languages size={18} className="text-newbrand" />
            <span className="uppercase font-semibold">{language}</span>
        </motion.button>
    );
};

export default LanguageToggle;

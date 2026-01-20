"use client"

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const fullText = "await loadPage()...";
    
    useEffect(() => {
        // Ocultar scroll del body
        document.body.style.overflow = 'hidden';
        
        // Typing effect
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);
        
        // Desaparecer después de 2.3 segundos
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
            // Restaurar scroll después de que termine la animación de salida
            setTimeout(() => {
                document.body.style.overflow = 'unset';
            }, 500);
        }, 2300);
        
        return () => {
            clearInterval(typingInterval);
            clearTimeout(hideTimer);
            document.body.style.overflow = 'unset';
        };
    }, []);
    
    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div 
                    className="fixed inset-0 w-screen h-screen z-50 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Monitor/Computadora */}
                    <motion.div 
                        className="relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {/* Pantalla */}
                        <div className="w-64 md:w-80 h-40 md:h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-4 border-gray-700 shadow-2xl relative overflow-hidden p-4">
                            {/* Brillo de la pantalla */}
                            <motion.div 
                                className="absolute inset-0 bg-blue-500/5"
                                animate={{ opacity: [0.05, 0.1, 0.05] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            
                            {/* Terminal header */}
                            <div className="relative z-10 flex gap-1.5 mb-3">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            
                            {/* Terminal/Código escribiéndose */}
                            <div className="relative z-10 font-mono text-sm md:text-base space-y-2">
                                <div className="text-gray-500">
                                    <span className="text-green-400">$</span> node app.js
                                </div>
                                <motion.div 
                                    className="text-blue-400"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {text}
                                    <motion.span
                                        className="inline-block w-2 h-4 bg-blue-400 ml-1"
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                        
                        {/* Base del monitor */}
                        <div className="w-20 h-2 bg-gray-700 mx-auto mt-2 rounded" />
                        <div className="w-32 h-1.5 bg-gray-800 mx-auto mt-1 rounded" />
                    </motion.div>

                    {/* Indicador de progreso minimalista */}
                    <motion.div 
                        className="mt-8 w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 shadow-lg shadow-blue-500/50"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default TransitionPage; 
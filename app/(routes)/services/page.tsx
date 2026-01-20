"use client"

import AvatarServices from "@/components/avatar-services";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicePage = () => {
    const { language } = useLanguage();

    const description = {
        es: "Ofrezco servicios completos en desarrollo web full stack, creando aplicaciones escalables y modernas con React, Next.js, Node.js, PHP, Laravel y .NET. Diseño interfaces intuitivas y responsivas con las últimas tecnologías frontend. Implemento servidores robustos, APIs RESTful y soluciones en tiempo real con WebSockets. Gestiono bases de datos relacionales y no relacionales, asegurando rendimiento e integridad de datos. También brindo consultoría tecnológica y optimización de sistemas existentes.",
        en: "I offer complete full stack web development services, creating scalable and modern applications with React, Next.js, Node.js, PHP, Laravel, and .NET. I design intuitive and responsive interfaces with the latest frontend technologies. I implement robust servers, RESTful APIs, and real-time solutions with WebSockets. I manage relational and non-relational databases, ensuring performance and data integrity. I also provide technology consulting and optimization of existing systems."
    };

    return ( 
        <div className="flex flex-col min-h-screen pb-16 lg:pb-0">
            <TransitionPage/>
            <AvatarServices />
            
            <div className="flex-grow grid items-center justify-center min-h-[60vh] max-w-6xl gap-8 mx-auto md:grid-cols-2 md:px-20 md:mt-10 px-4 pt-32 pb-10">
                <div className="max-w-[550px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl pl-2 md:mb-5">
                        {language === 'es' ? 'Mis ' : 'My '}
                        <span className="font-bold text-newbrand">
                            {language === 'es' ? 'servicios' : 'services'}
                        </span>
                    </h1>
                    <p className="mb-6 pl-2 text-base md:text-lg text-gray-300 leading-relaxed">
                        {description[language]}
                    </p>
                    <div className="pl-2">
                        <button className="px-6 py-3 rounded-lg bg-newbrand hover:bg-newbrand/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-newbrand/50 font-semibold">
                            <a href="https://wa.link/34j9wj" target="_blank" rel="noopener noreferrer">
                                {language === 'es' ? 'Contacta conmigo' : 'Contact me'}
                            </a>
                        </button>
                    </div>
                </div>

                {/*SLIDER*/}
                <div>
                    <SliderServices />
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default ServicePage;
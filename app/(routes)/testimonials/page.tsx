"use client"

import Image from "next/image";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import Footer from "@/components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { dataTestimonials, references } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { Quote, Phone } from "lucide-react";

const TestimonialPage = () => {
    const { language } = useLanguage();

    return ( 
        <div className="flex flex-col min-h-screen">
            <TransitionPage/>
            <div className="flex-grow flex flex-col justify-center py-20 px-4">
                <CircleImage />
                <h1 className="text-2xl leading-tight text-center md:text-5xl md:mb-10 mb-6 mt-20 md:mt-0">
                    {language === 'es' ? 'Lo que dicen ' : 'What they say '}
                    <span className="block font-bold text-newbrand">
                        {language === 'es' ? 'de mí' : 'about me'}
                    </span>
                </h1>

                <div className="flex items-center justify-center mb-10">
                    <div>
                        <Swiper
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 15
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                }
                            }}
                            freeMode={true}
                            pagination={{
                                clickable: true
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="h-[480px] md:h-[420px] w-[300px] md:w-[700px] lg:w-[900px]"
                        >
                            {dataTestimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm 
                                        border border-white/10 hover:border-newbrand/50 transition-all duration-300 
                                        hover:shadow-xl hover:shadow-newbrand/20 h-[420px] flex flex-col">
                                        <Quote className="text-newbrand mb-4" size={32} />
                                        
                                        <div className="flex items-center gap-4 mb-4">
                                            <Image 
                                                src={testimonial.imageUrl} 
                                                alt={testimonial.name} 
                                                width={80} 
                                                height={80} 
                                                className="rounded-full border-2 border-newbrand/50"
                                            />
                                            <div>
                                                <h4 className="text-xl font-bold text-white">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-newbrand text-sm">
                                                    {typeof testimonial.role === 'string' ? testimonial.role : testimonial.role[language]}
                                                </p>
                                                {testimonial.phone && (
                                                    <a 
                                                        href={`tel:${testimonial.phone}`}
                                                        className="flex items-center gap-1 text-gray-400 hover:text-newbrand text-xs mt-1"
                                                    >
                                                        <Phone size={12} />
                                                        {testimonial.phone}
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-sm leading-relaxed flex-grow overflow-y-auto">
                                            {typeof testimonial.description === 'string' ? testimonial.description : testimonial.description[language]}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Referencias Section */}
                <div className="max-w-4xl mx-auto mt-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                        <span className="text-newbrand">
                            {language === 'es' ? 'Referencias Profesionales' : 'Professional References'}
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {references.map((ref) => (
                            <div 
                                key={ref.id}
                                className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 
                                hover:border-newbrand/50 transition-all duration-300 text-center"
                            >
                                <h3 className="font-semibold text-white mb-2">{ref.name}</h3>
                                <a 
                                    href={`tel:${ref.phone}`}
                                    className="flex items-center justify-center gap-2 text-newbrand hover:text-purple-400 text-sm"
                                >
                                    <Phone size={14} />
                                    {ref.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default TestimonialPage;
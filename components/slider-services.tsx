"use client"

import { serviceData } from "@/data";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/contexts/LanguageContext";

const SliderServices = () => {
    const { language } = useLanguage();

    return ( 
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="h-[320px] md:h-[380px] w-[280px] md:w-[600px]">
                {serviceData.map((item) =>(
                    <SwiperSlide key={item.id}>
                        <div className="relative flex flex-col px-6 py-6 h-[280px] md:h-[330px] rounded-2xl cursor-pointer 
                        bg-gradient-to-br from-gray-900/95 to-gray-800/80 backdrop-blur-sm gap-4 group 
                        transition-all duration-500 overflow-hidden
                        border-2 border-gray-700/50 hover:border-blue-500/80 hover:scale-[1] 
                        shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl
                        before:absolute before:inset-0 before:rounded-2xl before:p-[2px] 
                        before:bg-gradient-to-br before:from-transparent before:via-transparent before:to-transparent
                        hover:before:from-blue-500/50 hover:before:via-blue-400/30 hover:before:to-blue-500/50
                        before:-z-10 before:transition-all before:duration-500">
                            <div className="mb-2 text-5xl text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300 relative z-10">
                                {item.icon}
                            </div>
                            <div className="relative z-10">
                                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                                    {typeof item.title === 'string' ? item.title : item.title[language]}
                                </h3>
                                <p className="text-sm text-gray-400 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
                                    {typeof item.description === 'string' ? item.description : item.description[language]}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
     );
}
 
export default SliderServices;
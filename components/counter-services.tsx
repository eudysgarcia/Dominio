"use client"
import CountUp from "react-countup";
import { dataCounter } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";

const CounterServices = () => {
    const { language } = useLanguage();

    return ( 
        <div className="grid justify-between max-w-4xl grid-cols-2 gap-3
        mx-auto my-8 md:flex md:grid-cols-3 md:gap-8">
            {dataCounter.map(({id, endCounter, text, lineRight, lineRightMobile}) => (
                <div key={id} className={`${lineRight && 'ltr'}`}>
                    <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'}
                        ${lineRightMobile && 'border-e-gray-100'} text-center
                    `}>
                        <p className="flex justify-center mb-2 text-3xl font-extrabold md:text-5xl text-newbrand">
                            + <CountUp end={endCounter} start={0} duration={5} /> 
                        </p>
                        <p className="text-sm uppercase max-w-[150px] mx-auto">
                            {typeof text === 'string' ? text : text[language]}
                        </p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default CounterServices;
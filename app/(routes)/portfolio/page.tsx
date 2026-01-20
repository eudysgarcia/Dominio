"use client"

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container"
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";

const PortfolioPage = () => {
    const { language } = useLanguage();

    return ( 
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio />
            <CircleImage />

            <div className="flex flex-col justify-center h-full px-4">
                <h1 className="text-2xl leading-tight text-center md:text-5xl md:mb-12 mb-8">
                    {language === 'es' ? 'Mis últimos ' : 'My latest '}
                    <span className="text-newbrand font-bold">
                        {language === 'es' ? 'trabajos realizados' : 'completed works'}
                    </span>
                </h1>

                <div className="relative z-10 grid max-w-6xl gap-x-6 gap-y-20 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
     );
}
 
export default PortfolioPage;
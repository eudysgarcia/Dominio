"use client"

import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";
import ExperienceSection from "@/components/experience-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import ContactInfo from "@/components/contact-info";
import { useLanguage } from "@/contexts/LanguageContext";

const PageAboutMe = () => {
    const { language } = useLanguage();

    return ( 
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    {language === 'es' ? 'Toda mi ' : 'My '}
                    <span className="font-bold text-newbrand">
                        {language === 'es' ? 'trayectoria profesional' : 'professional journey'}
                    </span>
                </h1>

                <CounterServices />

                <ExperienceSection />

                <EducationSection />

                <SkillsSection />

                <ContactInfo />
            </ContainerPage>
        </>
    );
}
 
export default PageAboutMe;
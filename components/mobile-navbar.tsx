"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import { useLanguage } from "@/contexts/LanguageContext";

const MobileNavbar = () => {
    const router = usePathname();
    const { language } = useLanguage();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-black/90 backdrop-blur-md border-t border-blue-500/30 shadow-2xl">
            <div className="flex items-center justify-around px-4 py-3 max-w-md mx-auto">
                {itemsNavbar.map((item) => (
                    <Link 
                        key={item.id}
                        href={item.link}
                        className={`p-3 transition-all duration-300 rounded-xl
                        ${router === item.link ? 'bg-blue-500 shadow-lg shadow-blue-500/50 scale-110' : 'hover:bg-blue-500/20 hover:scale-105'}`}
                        title={typeof item.title === 'string' ? item.title : item.title[language]}
                    >
                        {item.icon}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default MobileNavbar;

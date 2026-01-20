"use client"

import Footer from "./footer";

interface ContainerProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerProps) => {
    const { children } = props

    return ( 
        <div className="flex flex-col min-h-screen">
            <div className="w-full max-w-7xl px-4 pb-24 lg:pb-10 pt-32 md:pt-40
            mx-auto md:px-6 flex-grow">
                {children}
            </div>
            <Footer />
        </div>
     );
}
 
export default ContainerPage;
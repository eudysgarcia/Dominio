"use client"
import MotionTransition from "./transition-component";
import Image from "next/image";

const AvatarPortfolio = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-[-140px] left-0 hidden md:inline-block md:absolute">
            <Image src="./avatar-works.png" width={250} height={250} className="w-full h-full" alt="Avatar Portafolio" />
        </MotionTransition>
     );
}
 
export default AvatarPortfolio;
"use client"
import Image from "next/image";

const CircleImage = () => {
    return ( 
        <div className="bottom-[-140px] right-0 hidden md:inline-block md:absolute">
            <Image src="./circles.png" width={300} height={300} alt="Circle" className="w-full h-full"/>
        </div>
     );
}
 
export default CircleImage;
const Skills = () => {
    return ( 
        <div className="text-2xl leading-tight text-center md:text-center md:text-4xl pl-2 md:mb-5">
            Mis{" "}
            <span className="font-bold text-newbrand ">
            habilidades
            </span>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="flex px-2 py-2 text-newbrand justify-center mt-4 rounded-lg hover:bg-[rgba(89,65,169,0.15)] transition-all 
                duration-300 hover:border-lastn border-2">
                    JavaScript
                </span>
                <span className="flex px-2 py-2 text-newbrand justify-center mt-4 rounded-lg hover:bg-[rgba(89,65,169,0.15)] transition-all 
                duration-300 hover:border-lastn border-2">
                    React JS
                </span>
                <span className="flex px-2 py-2 text-newbrand justify-center mt-4 rounded-lg hover:bg-[rgba(89,65,169,0.15)] transition-all 
                duration-300 hover:border-lastn border-2">
                    Node JS
                </span>
                <span className="flex px-2 py-2 text-newbrand justify-center mt-4 rounded-lg hover:bg-[rgba(89,65,169,0.15)] transition-all 
                duration-300 hover:border-lastn border-2">
                    .NET
                </span>
                <span className="flex px-2 py-2 text-newbrand justify-center mt-4 rounded-lg hover:bg-[rgba(89,65,169,0.15)] transition-all 
                duration-300 hover:border-lastn border-2">
                    ASP.MVC
                </span>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-0">
                <span className="flex px-2 py-2 text-newbrand justify-center mt-4 rounded-lg hover:bg-[rgba(89,65,169,0.15)] transition-all 
                duration-300 hover:border-lastn border-2">
                    PHP
                </span>
                <span className="flex px-2 py-2 text-newbrand justify-center mt-4 rounded-lg hover:bg-[rgba(89,65,169,0.15)] transition-all 
                duration-300 hover:border-lastn border-2">
                    Laravel
                </span>
                <span className="flex px-2 py-2 text-newbrand justify-center mt-4 rounded-lg hover:bg-[rgba(89,65,169,0.15)] transition-all 
                duration-300 hover:border-lastn border-2">
                    MySQL
                </span>
                <span className="flex px-2 py-2 text-newbrand justify-center mt-4 rounded-lg hover:bg-[rgba(89,65,169,0.15)] transition-all 
                duration-300 hover:border-lastn border-2">
                    HTML/CSS/Bootstrap
                </span>
            </div>

        </div>
     );
}
 
export default Skills;
export default function Navbar(){
    
    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Portofolios", href: "#portofolios" },
        { name: "Contact", href: "#contact" },
    ];
    
    return(
        <div className="sticky top-0 md:z-10 lg:z-10 text-gray-500">
         <header className=" bg-gray-950 px-4 md:px-10 lg:px-10 py-4 md:py-6 lg:py-6"> {/* header */} 
            <nav className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="uppercase text-lg basis-1/4 flex flex-col "> {/*Logo*/}
                    <a href="#bio">
                        <span className="font-extrabold text-white">Ryan </span>
                        <span className="font-extrabold text-white">Yakhin </span><br />
                        <span className="font-extralight text-blue-500">Kogoya </span>
                    </a>
                </div>
                <div className="basis-1/2 flex items-center justify-evenly "> {/*LINK*/}
                   {navLinks.map((link,index) => (
                        <a className="hover:text-slate-50 transition-colors duration-300 cursor-pointer" key={index} href={link.href}>
                            <span>{link.name}</span>
                        </a>
                   ))}
                </div>
            </nav>
        </header>
        </div>
        
    )
}
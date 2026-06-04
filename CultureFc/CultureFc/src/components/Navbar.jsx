import Logo from "..//assets/cult.png";

export default function Navbar() {
    return(
        <>
        <div className="sticky top-0 text-gray-800 p-6 md:px-20 font-mono bg-blue-400 flex flex-row items-center gap-20 font-bold text-2xl">
            <div className="h-24 w-24 aspect-square flex-shrink-0  rounded-full overflow-hidden border-1 border-black">
                <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-row gap-10">
                <span className="hover:text-zinc-100"><a href="#home">Home</a></span>
                <span className="hover:text-zinc-100"><a href="#player">Player</a></span>
                <span className="hover:text-zinc-100"><a href="#contact">Contact</a></span>
            </div>  
        </div>
        </>
    )
}
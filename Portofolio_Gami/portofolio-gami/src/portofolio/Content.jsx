import Home from "./Home";
import About from "./About";
import Project from "./Project";
import { useState } from "react";

export default function Content(){
    const [active, setActive] = useState("home");
    
    return(
        <>
        <div className="mx-auto flex w-full min-h-screen items-stretch">
            <div className="bg-gray-950 basis-1/4 "> {/*left*/}
                <header className="flex flex-col items-center justify-center px-4 md:px-0 lg:px-0 h-1/2">
                    <div className="text-3xl">
                        <span className="font-semibold text-slate-50">Stella</span> <br />
                        <span className="font-extralight text-blue-400">Design</span>
                    </div>
                </header>
                <nav className="uppercase text-slate-50 flex flex-col gap-4 w-full px-4">
                    <a onClick={() =>setActive("home")} className=" group w-full transition hover:bg-white hover:text-gray-950 hover:rounded-md">
                        <span className="cursor-pointer text-xl font-extralight block text-center transition duration-200 group-hover:font-normal group-hover:translate-x-2">
                                Home
                        </span>
                    </a>
                    <a onClick={() =>setActive("about")} className="group w-full transition hover:bg-white hover:text-gray-950 hover:rounded-md">
                        <span className="cursor-pointer text-xl font-extralight block text-center transition duration-200 group-hover:font-normal group-hover:translate-x-2">
                                About
                        </span>
                    </a>
                    <a onClick={() =>setActive("project")} className="group w-full transition hover:bg-white hover:text-gray-950 hover:rounded-md">
                        <span className="cursor-pointer text-xl font-extralight block text-center transition duration-200 group-hover:font-normal group-hover:translate-x-2">
                                Project
                        </span>
                    </a>
                    <a onClick={() =>setActive("contact")} className="group w-full transition hover:bg-white hover:text-gray-950 hover:rounded-md">
                        <span className="cursor-pointer text-xl font-extralight block text-center transition duration-200 group-hover:font-normal group-hover:translate-x-2">
                                Contact
                        </span>
                    </a>
                </nav>
            </div>
            <div className="basis-3/4 text-gray-950">{/*right*/}
                {active === "home" && <Home/>}
                {active === "about" && <About/>}
                {active === "project" && <Project/>}
            </div>
        </div>
        </>
    )
}
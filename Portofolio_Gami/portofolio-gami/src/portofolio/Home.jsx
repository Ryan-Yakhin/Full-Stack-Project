import { useEffect, useState } from "react"

export default function Home(){

    const temp = ["Hi, I'm Stella", "I'm an Editor", "Welcome to My Website"];

    const [tempIndex, setTempIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (charIndex < temp[tempIndex].length) {
             // typing
            timeout = setTimeout(() => {
                setCharIndex((prev) => prev + 1);
            }, 200);
    } else {
      // pause before moving to the next word
      timeout = setTimeout(() => {
        setTempIndex((prevIndex) =>
          prevIndex === temp.length - 1 ? 0 : prevIndex + 1
        );
        setCharIndex(0);
      }, 1000); // pause 1 sec
    }

    return () => clearTimeout(timeout);
    }, [charIndex, tempIndex]);

    const text = temp[tempIndex].slice(0, charIndex);

    const [show, setShow] = useState(false);
        useEffect(() => {
        setShow(true);
    }, []);

    return(
       <div id="home"
        className={` group bg-gradient-to-l from-blue-700 to-purple-700 min-h-screen
        flex flex-col items-center justify-center gap-16 px-6
        transition-all duration-200
        ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>

    {/* TEXT */}
    <div className={`h-10 text-3xl font-semibold font-mono text-center text-white
    transition-all duration-500 delay-300
    ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
    {text}
  </div>

  {/* CIRCLE */}
  <div className={`flex items-center justify-center text-2xl
                    transition-all duration-700 delay-500
                    ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
    <div className="bg-gray-950 w-40 h-40 rounded-full flex flex-col items-center justify-center">
      <span className="font-semibold text-slate-50">Stella</span>
      <span className="font-extralight text-blue-400">Design</span>
    </div>
  </div>

  {/* DESCRIPTION */}
  <div className={`text-white font-mono text-center max-w-xl
                    transition-all duration-1000 delay-700
                    ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
    <p>
      Halo!, saya Stella, seorang Social Media Editor yang berfokus pada pembuatan konten yang menarik, relevan, dan berdampak untuk membangun engagement dan memperkuat identitas brand.
    </p>
  </div>

</div>
    )
}
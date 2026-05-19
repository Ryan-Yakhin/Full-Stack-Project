import pic from "../assets/pic.png";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.svg";
import X from "../assets/X.svg";
import Linkedin from "../assets/Linkedin.svg";

export default function Main(){
  return(
    <main  className="flex flex-col text-white">
      <div className="bg-gray-950 px-4 md:px-10 lg:px-10 py-4 md:py-6 lg:py-6"> {/*Main 1*/}
        <div className="max-w-6xl mx-auto md:h-screen lg:h-screen flex flex-col md:flex-row lg:flex-row items-center justify-between">
          <div className="flex flex-col"> {/*About Me*/}
          <p className="uppercase text-xs font-extralight tracking-widest">my name is</p>
          <h3 className="text-2xl">
            <span className="font-extrabold text-white">Ryan </span>
            <span className="font-extrabold text-white">Yakhin </span>
            <span className="font-extralight text-blue-500">Kogoya</span>
          </h3>
          <p className="font-light">Junior Front-End Developer with 1 year of hands-on experience building personal projects. Proficient in HTML, CSS, JavaScript, React, and Tailwind CSS, with a focus on creating responsive and user-friendly interfaces.</p>
          <div className="flex flex-row mt-5 space-x-3"> {/*Logo*/}
            <img className="w-6 h-6" src={Github} alt="" />
            <img className="w-6 h-6" src={Instagram} alt="" />
            <img className="w-6 h-6" src={X} alt="" />
            <img className="w-6 h-6" src={Linkedin} alt="" />
          </div>
        </div>

       <div className="mx-auto mt-5 md:mt-0 flex-shrink-0"> {/*Picture*/}
          <img src={pic} className="w-48 h-48 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-2 border-black object-cover" alt="pic" />
        </div>
        </div>
      </div>
    </main>
  )
}
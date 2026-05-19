import pic from "../assets/pic.png";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.svg";
import X from "../assets/X.svg";
import Linkedin from "../assets/Linkedin.svg";
import Crown from "../assets/crown.svg";
import Apl from "../assets/app.svg";
import Globe from "../assets/globe.svg";

export default function Main(){
  return(
    <main className="md:relative md:-mt-32 lg:relative lg:-mt-32">
      <div id="bio" className="bg-gray-950 text-white px-4 md:px-10 lg:px-10 py-4 md:py-6 lg:py-6"> {/*Main 1*/}
        <div className="max-w-6xl mx-auto min-h-screen flex flex-col md:flex-row lg:flex-row gap-5 md:gap-10 lg:gap-10 items-center">
          <div className="flex flex-col md:w-2/3 lg:w-2/3"> {/*About Me*/}
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
          <div className="mx-auto md:mt-0 flex-shrink-0 md:w-1/3 lg:w-1/3"> {/*Picture*/}
            <img src={pic} className="w-48 h-48 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-2 border-black object-cover" alt="pic" />
          </div>
        </div>
      </div>

      <div id="services" className="bg-slate-50 pt-20 pb-20"> {/*Main 2*/}
        <div className="w-9/12 mx-auto">
        <div className="flex flex-col place-items-center"> {/*Part 1*/}
            <h2 className="uppercase text-xs font-extralight tracking-widest text-gray-500">- Services</h2>
            <h1 className=" text-3xl font-semibold text-gray-700">Specialized In</h1>
        </div> 
        <div className="grid grid-cols-3 gap-10 py-10">{/*Part 2*/}
          <div className="rounded-lg bg-white  shadow-lg"> {/*card 1*/}
            <div className="flex flex-col items-center px-10 py-10">
               <div className="h-10 w-10 rounded-2xl bg-blue-100">
                <img className="w-full" src={Crown} alt="" />
              </div>
              <h4 className="text-black mt-5 text-center">UI/UX Design</h4>
              <p className="text-center font-extralight text-sm mt-2 text-gray-500">Turn what you have in mind of a digital product into reality. For any platform you consider.</p>
            </div>
          </div>
          <div className="rounded-lg bg-white  shadow-lg"> {/*card 2*/}
            <div className="flex flex-col items-center px-10 py-10">
               <div className="h-10 w-10 rounded-2xl bg-blue-100">
                <img className="w-full" src={Apl} alt="" />
              </div>
              <h4 className="text-black mt-5 text-center">Aplication Development</h4>
              <p className="text-center font-extralight text-sm mt-2 text-gray-500">Standard designing, building, and implementing your aplications with documentation.</p>
            </div>
          </div>
          <div className="rounded-lg bg-white  shadow-lg"> {/*card 1*/}
            <div className="flex flex-col items-center px-10 py-10">
               <div className="h-10 w-10 rounded-2xl bg-blue-100">
                <img className="w-full" src={Globe} alt="" />
              </div>
              <h4 className="text-black mt-5 text-center">Web Development</h4>
              <p className="text-center font-extralight text-sm mt-2 text-gray-500">Create and maintain your websites and also take care of its performance and traffic capacity.</p>
            </div>
          </div>
        </div>
        </div> 
      </div>
    </main>
  )
}
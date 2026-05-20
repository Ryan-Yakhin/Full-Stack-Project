import pic from "../assets/pic.png";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.svg";
import X from "../assets/X.svg";
import Linkedin from "../assets/Linkedin.svg";
import Crown from "../assets/crown.svg";
import Apl from "../assets/app.svg";
import Globe from "../assets/globe.svg";
import Gym from "../assets/gym.jpg";
import Food from "../assets/food.jpg";

export default function Main(){

  const services = [
    {
      title: "UI/UX Design",
      desc : "Turn what you have in mind of a digital product into reality. For any platform you consider.",
      icon : Crown
    },
    {
      title : "Application Development",
      desc : "Standard designing, building, and implementing your aplications with documentation.",
      icon: Apl
    },
    {
      title: "Web Development",
      desc : "Create and maintain your websites and also take care of its performance and traffic capacity.",
      icon: Globe
    }
  ]

  const portofolios = [
    {
      link: "https://full-stack-project-khaki-three.vercel.app/",
      title: "Fit Life Gym",
      desc : "This website is a landing page for a gym (FitLife Gym), designed to attract users to join or try the services offered. I built this website using React as the frontend framework to create reusable and interactive components, and Tailwind CSS to speed up styling and deliver a modern, responsive design.",
      pict : Gym
    },
    {
      link: "https://full-stack-project-px6k.vercel.app/",
      title: "Food Recipe",
      desc : "This website is a Food Recipe application built using the MERN Stack (MongoDB, Express.js, React, Node.js) that allows users to view, add, and manage food recipes online.",
      pict : Food
    }
  ]

  return(
    <main className="md:relative md:-mt-32 lg:relative lg:-mt-32">
      <div id="bio" className="bg-gray-950 text-white px-4 md:px-10 lg:px-10 py-4 md:py-6 lg:py-6"> {/*Main 1*/}
        <div className="max-w-6xl mx-auto pb-20 md:pb-0 lg:pb-0 lg:min-h-screen md:min-h-screen flex flex-col md:flex-row lg:flex-row gap-5 md:gap-10 lg:gap-10 items-center">
          <div className="flex flex-col md:w-2/3 lg:w-2/3"> {/*About Me*/}
            <p className="uppercase text-xs font-extralight tracking-widest">- my name is</p>
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
        <div className="flex flex-col lg:grid md:grid grid-cols-3 gap-10 py-10">{/*Part 2*/}
          {services.map((item, index) =>(
            <div key={index} className="rounded-lg bg-white shadow-lg hover:scale-105 transition-transform duration-300"> {/*cards*/}
            <div className="flex flex-col items-center px-10 py-10">
               <div className="h-10 w-10 rounded-2xl bg-blue-100">
                <img className="w-full" src={item.icon} alt="" />
              </div>
              <h4 className="text-black mt-5 text-center">{item.title}</h4>
              <p className="text-center font-extralight text-sm mt-2 text-gray-500">{item.desc}</p>
            </div>
          </div>
          ))}
        </div>
        </div> 
      </div>

      <div id="portofolios" className="bg-gray-950 text-white pb-20 pt-20"> {/*Main 3*/}
          <div className="w-9/12 mx-auto">
            <div className="flex flex-col "> {/*part1*/}
              <h2 className="uppercase font-extralight text-xs tracking-widest text-gray-500">- my works</h2>
              <h1 className="font-semibold text-3xl">Featured Portofolios</h1>
            </div>
            <div className="flex flex-col lg:grid md:grid grid-cols-2 gap-10 py-10"> {/*part2*/}
              {
                portofolios.map((item, index) =>(
                    <div key={index} className="rounded-lg shadow-lg">
                      <a href={item.link} className="flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
                          <img className="w-full h-full" src={item.pict} alt="" />
                        </div>
                        <h4 className="text-white mt-5 text-center">{item.title}</h4>
                        <p className="text-center font-extralight text-sm mt-2 text-gray-400">{item.desc} <br /> <br /> CLICK TO SEE</p>
                      </a>
                    </div>
                  )
                )
              }
            </div>
          </div>
      </div>
    </main>
  )
}
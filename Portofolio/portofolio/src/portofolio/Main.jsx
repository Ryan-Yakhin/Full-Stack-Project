import pic from "../assets/pic.png";
import { FaWhatsapp, FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import Crown from "../assets/crown.svg";
import Apl from "../assets/app.svg";
import Globe from "../assets/globe.svg";
import Gym from "../assets/gym.jpg";
import Skuy from "../assets/skuy.jpg";
import Porto from "../assets/porto.jpg";

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
      link: "https://full-stack-project-zr3y.vercel.app/",
      title: "SKUY",
      desc : "This website is a travel-sharing platform where users can share their travel experiences, explore posts from other users, and discover new destinations. I built the frontend using React.js and Tailwind, I developed the backend using Node.js and Express.js, with Supabase as the database and storage solution.",
      pict : Skuy,
      tools: ["React.js", "Tailwind", "Node.js","Express.js","PostgreSQL"]
    },

    {
      link : "https://full-stack-project-khaki-three.vercel.app/",
      title: "Fit Life Gym",
      desc : "This website is a landing page for a gym (FitLife Gym), designed to attract users to join or try the services offered. I built this website using React as the frontend framework to create reusable and interactive components, and Tailwind CSS to speed up styling and deliver a modern, responsive design.",
      pict : Gym,
      tools: ["React.js", "Tailwind"]
    },
    
    {
      link: "https://full-stack-project-uwuu.vercel.app/",
      title: "Portoflio Gami",
      desc : "This website is a portfolio website for a graphic designer, showcasing their work and skills. I built this website using React as the frontend framework to create reusable and interactive components, and Tailwind CSS to speed up styling and deliver a modern, responsive design.",
      pict : Porto,
      tools: ["React.js", "Tailwind"]
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
            <p className="font-light">Full-Stack Web Developer with experience building personal projects using React.js, Tailwind CSS, Node.js, Express.js, and PostgreSQL. Passionate about developing responsive web applications, creating clean user interfaces, and building backend systems with database integration.</p>
          </div>
          <div className="mx-auto md:mt-0 flex-shrink-0 md:w-1/3 lg:w-1/3"> {/*Picture*/}
            <img src={pic} className="w-48 h-48 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-2 border-black object-cover" alt="pic" />
          </div>
        </div>
      </div>

      <div id="services" className="bg-slate-50 pt-20 pb-20"> {/*Main 2*/}
        <div className="w-9/12 mx-auto">
        <div className="flex flex-col place-items-center"> {/*Part 1*/}
            <h2 className="uppercase text-xs font-extralight tracking-widest text-gray-500">- my Services</h2>
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
            <div className="flex flex-col lg:grid md:grid grid-cols-3 gap-10 py-10"> {/*part2*/}
              {
                portofolios.map((item, index) =>(
                    <div key={index} className="rounded-lg">
                      <a href={item.link} className="flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer">
                        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
                          <img className="w-full h-full" src={item.pict} alt="" />
                        </div>
                        <h4 className="text-white mt-5 text-center">{item.title}</h4>
                        <p className="text-center font-extralight text-sm mt-2 text-gray-400">{item.desc}</p>

                        <div className="flex flex-wrap justify-center gap-2 mt-5">
                          {
                            item.tools.map((tool, toolIndex)=>(
                               <span
                                 key={toolIndex}
                                 className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-medium"
                               >
                                  {tool}
                                </span>
                           ))
                         }
                        </div>

                        <br /> <br /> CLICK TO SEE
                      </a>
                    </div>
                  )
                )
              }
            </div>
          </div>
      </div>

      <div id="contacts" className="bg-slate-50 pt-20 pb-20"> {/*main 4*/}
          <div className="w-9/12 mx-auto">
             <div className="flex flex-col place-items-center"> {/*part 1*/}
                  <h2 className="uppercase text-gray-500 font-extralight text-xs tracking-widest">- my contact</h2>
                  <h1 className="text-gray-700 font-semibold text-3xl">Contact</h1>
              </div>
              <div className="mt-4 flex flex-row items-center justify-center"> {/*Part 2*/}
          
                        <a href="https://www.facebook.com/ryan.kogoya/" className='p-3 bg-slate-50 rounded-full hover:bg-blue-600 transition cursor-pointer'>
                            <FaFacebook className="h-6 w-6"/>
                        </a>
                         <a href="https://www.instagram.com/aku_ryannn/" className='p-3 bg-slate-50 rounded-full hover:bg-red-500 transition cursor-pointer'>
                            <FaInstagram className="h-6 w-6"/>
                        </a>
                         <a href="https://github.com/Ryan-Yakhin" className='p-3 bg-slate-50 rounded-full hover:bg-gray-500 transition cursor-pointer'>
                            <FaGithub className="h-6 w-6"/>
                        </a>
                         <a href="https://www.linkedin.com/in/ryan-yakhin-t-kogoya-427372293/" className='p-3 bg-slate-50 rounded-full hover:bg-blue-600 transition cursor-pointer'>
                            <FaLinkedin className="h-6 w-6"/>
                        </a>
                        <a href="https://wa.me/6281219946735" className='p-3 bg-slate-50 rounded-full hover:bg-green-500 transition cursor-pointer'>
                            <FaWhatsapp className="h-6 w-6"/>
                        </a>
                        <a href="mailto:ryanyakhin4@gmail.com" className='p-3 bg-slate-50 rounded-full hover:bg-red-500 transition cursor-pointer'>
                            <MdOutlineMail className="h-6 w-6"/>
                        </a>
                </div>
          </div>
      </div>
    </main>
  )
}
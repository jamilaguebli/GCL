import React, {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from '../assets/logo.png' 
import '../App.css'; 

import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.png'
import gool from '../assets/gool.png'
import eye from '../assets/eye.png'
import diamant from '../assets/diamant.png'
import welcome from '../assets/welcome.png'
import { LuRefreshCw } from "react-icons/lu";
import { GoArrowDownLeft } from "react-icons/go";
import { HiMiniTicket } from "react-icons/hi2";
import img1 from'../assets/img1.png'
import { VscCheck } from "react-icons/vsc";
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import new1 from '../assets/new1.png'
import new2 from '../assets/new2.png'
import new3 from '../assets/new3.png'
import img2 from '../assets/img2.png'
import { GoNorthStar } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

function Header() {
    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
    <div  class="bg-[url('./assets/background1.png')]  bg-no-repeat bg-cover bg-center  h-screen lg:h-[230vh]">
    <div className='flex justify-between items-center max-w-[1248px] mx-auto px-4 text-white pt-3'>
       <div>
       <img src={logo} alt="logo" class="w-24 sm:w-33 md:w-40 lg:w-48 xl:w-56" />
       </div> 
        <ul className="hidden md:flex" >
   <a href="#home" ><li className="p-4 font-bold  hover:text-violet-400 cursor-pointer">Home</li></a>
   <a href="#about" ><li className="p-4 font-bold hover:text-violet-400 cursor-pointer">About Us</li></a>
   <a href="#lab" ><li className="p-4 font-bold hover:text-violet-400 cursor-pointer">LAB</li></a>
   <a href="#service" ><li className="p-4 font-bold hover:text-violet-400 cursor-pointer">Service</li></a>
   <a href="#contact" ><li className="p-4  font-bold hover:text-violet-400 cursor-pointer">Contact</li></a>
        </ul>
        <div onClick={handleNav}  className="block md:hidden">
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
            
        </div>
        <div className={nav ? "fixed left-0 top-0 w-[60%]    ease-in-out duration-500  ":"fixed left-[-100%]"}>
            <div className="bg-violet-800 w-6/7 md:w-4/5 sm:w-2/3 h-screen  ">
            <img src={logo} alt="logo" className="pt-1" />
            <ul className="flex flex-col md:flex-row justify-start items uppercase p-4 ">
    <a href="#home"><li className="p-4 font-bold md:ml-8 hover:text-violet-400 cursor-pointer">Home</li></a> 
    <a href="#about"> <li className="p-4 font-bold md:ml-8 hover:text-violet-400 cursor-pointer">About Us</li></a>
    <a href="#lab"><li className="p-4 font-bold md:ml-8 hover:text-violet-400 cursor-pointer">LAB</li></a>
    <a href="#service"> <li className="p-4 font-bold md:ml-8 hover:text-violet-400 cursor-pointer">Service</li></a>
    <a href="#contact"><li className="p-4 font-bold md:ml-8 hover:text-violet-400 cursor-pointer">Contact</li></a>
    </ul>
            </div>
        </div>
        </div>
        <section id="home">
        <div className="">
        <div className="text-white text-1xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-center pt-20 sm:pt-30 md:pt-40 lg:pt-50 pb-4  px-4 sm:px-8 md:px-12 lg:px-16">
         Enter the blockchain universe from its widest doors
        </div>
     

        </div>
        <div className="">
       <div className="text-white text-center font-nunito text-1xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl pt-8 sm:pt-10 md:pt-20 lg:pt-26 xl:pt-32  px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32">
    GCL is an interesting platform that will teach you in a more interactive way than just a university
</div>



        </div>

        <div className="flex items-center justify-center space-x-4 px-4 pt-4 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32">
  <button className="border border-black rounded-full  px-6 sm:px-7 md:px-7  lg:px-7 py-1 sm:py-12 md:py-2 lg:py-2  text-white text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl   bg-purple-700">
    Get Started
  </button>
  <button className="border border-white border-y-4 border-x-4 rounded-full  px-6 sm:px-7 md:px-7 lg:px-7 py-1 sm:py-1 md:py-1 lg:py-1  text-white text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
    Learn More
  </button>
</div> 
</section> 
 <section id="about">
  <div className=" pt-20  md:pt-10 lg:pt-20  sm:pb-10">

<div className=" mt-20 sm:mt-5 md:mt-20 lg:mt-20">
     <h1 className="text-center text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold ">
      Our partners
    </h1> 
    <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal mt-10 text-black  ">
      We collaborate with leading top <br></br> blockchain networks
    </p>
    </div>
    <div className="flex flex-wrap justify-between items-center pt-20  md:pt-10 lg:pt-20 px-5">
     <img src={partner1} alt="logo" className="w-20 sm:w-40 md:w-40 lg:w-40 m-2 md:m-6 "/>
      <img src={partner2} alt="logo" className="w-20 sm:w-40 md:w-40 lg:w-40 m-2 md:m-6 "/>
      <img src={partner3} alt="logo" className="w-20 sm:w-40 md:w-40 lg:w-40 m-2 md:m-6 "/>
      <img src={partner4} alt="logo" className="w-20 sm:w-40 md:w-40 lg:w-40 m-2 md:m-6"/>
      <img src={partner5} alt="logo" className="w-20 sm:w-40 md:w-40 lg:w-40 m-2 md:m-6 "/>
    </div>
 
  </div>
    
     <div>
    <h1 className="text-center text-1xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-10 ">Digital currency is our expertise</h1>
    <p className="text-center text-lg sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-normal text-blue-700 pt-5">Become the main supporter of the young entrepreneurs in MENA region</p>
   </div>
    <div class="">
 
  <div class="flex flex-wrap justify-around items-center   my-16">
    
  <div class="group w-64 sm:w-64 md:w-96 lg:w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-purple-900 dark:hover:ring-purple-900 transform duration-500 hover:scale-105 hover:shadow-xl mt-20">
  <div class="bg-shadesOfBlue flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 group-hover:bg-purple-900 dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300 bg-purple-900">
      <span class="text-3xl md:text-5xl text-white dark:text-purple-900 group-hover:text-shadesOfBlue dark:group-hover:text-purple-900 transform duration-300">
          <img src={gool} alt="gool" className=""></img>
      </span>
  </div>
  <div class="flex flex-col items-center justify-center absolute mx-auto inset-0 ">
      <div>
          <h2 class="text-xl capitalize  text-shadesOfBlue font-normal text-black ">MISSION</h2>
      </div>
      <div>
          <p class="text-center text-base  font-medium mt-10 mx-5 text-gray-800">
          Our goal is to help create at least 100 projects by 2024. Those project will be the landmark and the role model to the other entrepreneurs and with that we can say we planted the seed for the blockchain era in North Africa and the Middle East.
          </p>
      </div>
    
  </div>
</div>

     
      
<div class="group w-64 sm:w-64 md:w-96 lg:w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-purple-900 dark:hover:ring-purple-900 transform duration-500 hover:scale-105 hover:shadow-xl mt-20">
  <div class="bg-shadesOfBlue flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 group-hover:bg-violet dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300 bg-purple-900">
      <span class="text-3xl md:text-5xl text-white dark:text-purple-900 group-hover:text-shadesOfBlue dark:group-hover:text-purple-900 transform duration-300">
          <img src={diamant} alt="gool" className=""></img>
      </span>
  </div>
  <div class="flex flex-col items-center justify-center absolute mx-auto inset-0 ">
      <div>
          <h2 class="text-xl capitalize  text-shadesOfBlue font-normal text-black ">MISSION</h2>
      </div>
      <div>
          <p class="text-center text-base  font-medium mt-10 mx-5 text-gray-800">
          Our goal is to help create at least 100 projects by 2024. Those project will be the landmark and the role model to the other entrepreneurs and with that we can say we planted the seed for the blockchain era in North Africa and the Middle East.
          </p>
      </div>
    
  </div>
</div>
    
      
      <div
          class="group w-64 sm:w-64 md:w-96 lg:w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-purple-900 dark:hover:ring-purple-900 transform duration-500 hover:scale-105 hover:shadow-xl mt-20">
          <div
              class="bg-shadesOfBlue flex justify-center items-center w-20 h-20 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4   group-hover:bg-purple-900 dark:group-hover:bg- group-hover:shadow-md transform duration-300 bg-purple-900">
              <span class="text-3xl md:text-5xl text-white dark:text-violet-800 group-hover:text-shadesOfBlue dark:group-hover:text-purple-900 transform duration-300">
                  <img src={eye} alt="gool"></img>
              </span>
          </div>
          <div class="flex flex-col items-center justify-center absolute mx-auto inset-0 ">
              <div>
                  <h2 class="text-xl capitalize  text-shadesOfBlue font-normal text-black ">MISSION</h2>
              </div>
              <div>
                  <p class="text-center text-base  font-medium mt-10 mx-5 text-gray-800"> Our goal is to help create at least 100 projects by 2024. Those project will be the landmark and the role model to the other entrepreneurs and with that we can say we planted the seed for the blockchain era in North Africa and the Middle East.</p>
              </div>
              
          </div>
      </div>
     
  </div>
</div>
    </section>

     
    <div className="flex flex-wrap justify-around items-center">
  <div className="w-full sm:w-3/4 lg:w-1/2 mb-4 sm:mb-0">
    <img src={welcome} alt="Welcome" className="w-full sm:w-3/4 md:w-[80%] lg:w-3/4 h-auto mx-auto" />
  </div>
  <div className="w-full sm:w-3/4 lg:w-1/2">
    <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-left text-purple-900 mx-2 sm:mx-7 md:mx-2 lg:mx-1">
      Welcome to GCL
    </h1>
    <p className="text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl text-left font-medium mt-4 sm:mt-6 text-slate-400 mx-2 sm:mx-8 md:mx-4 lg:mx-1">
      Grain Chain Lab is a Tunisian <span className="text-blue-600">incubator</span> that helps young entrepreneurs turn their brilliant ideas into successful startups on the blockchain networks.
    </p>
    <div className="p-4 pt-6">
      <ul className="space-y-4">
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full p-2">
            <HiMiniTicket className="text-violet-900" />
          </div>
          <li className="ml-4 font-normal text-black text-xl sm:text-sm md:text-xl lg:text-2xl">Blockchain courses and workshops</li>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full p-2">
            <LuRefreshCw className="text-violet-900" />
          </div>
          <li className="ml-4 font-normal text-black text-xl sm:text-sm md:text-xl lg:text-2xl">Soft skills and management guidance</li>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full p-2">
            <GoArrowDownLeft className="text-violet-900" />
          </div>
          <li className="ml-4 font-normal text-black text-xl sm:text-sm md:text-xl lg:text-2xl">Startup creation</li>
        </div>
      </ul>
    </div>
    <div className="flex justify-center pt-10 pb-5 sm:pb-7">
      <button className="text-white font-medium text-2xl bg-purple-700 border border-black rounded-full py-2 sm:py-2 md:py-1 lg:py-3 px-4 sm:px-8 md:px-9 lg:px-12">
        Get started
      </button>
    </div>
  </div>
</div>

     <section id="lab">
    <div className="bg-[url('./assets/backgroundTwo.png')] bg-no-repeat pt-20">
      <div className="flex flex-wrap justify-around items-center">
        <div className=" ">
          <h1 className="text-2xl sm:text-xs md:text-2xl lg:text-2xl xl:text-3xl font-extrabold text-left text-white mx-5  ">
            Why choose Grain Chain Lab
          </h1>
          <div className="text-white font-normal text-centre text-base sm:text-xs md:text-xl lg:text-xl  space-y-4 pt-10 mx-10 sm:mx-5  w-[60%]">
            <p>
              Grain Chain Lab represents the link between the main  actors that can make a change.
            </p>
            <p>
              GCL gives the student a set of important assets that help him create his own project:
            </p>
          </div>
          <div className="pt-20 mx-5">
            <ul className="space-y-4">
            <div className=" flex items-center ">
            <div className="bg-violet-900 rounded-full p-1">
          <VscCheck className="text-white " />
          </div>
            <li className="text-white ml-4  text-base sm:text-xs md:text-xl lg:text-lg xl:text-lg">First of all, the technical knowledge to carry his project.</li>
            </div>
            <div className=" flex items-center ">
            <div className="bg-violet-900 rounded-full p-1">
              <VscCheck className="text-white "></VscCheck>
              </div>
            <li className="text-white ml-4 text-base sm:text-xs md:text-xl lg:text-lg xl:text-lg">Second, the soft skills.</li>
            </div>
            <div className=" flex items-center">
            <div className="bg-violet-900 rounded-full p-1">
              <VscCheck className="text-white "></VscCheck>
              </div>
            <li className="text-white ml-4 text-base sm:text-xs md:text-xl lg:text-lg xl:text-lg">Then there's the IDEATION phase.</li>
            </div>
            <div className=" flex items-center ">
            <div className="bg-violet-900 rounded-full p-1">
              <VscCheck className="text-white "></VscCheck>
              </div> 
            <li className="text-white ml-4 text-base sm:text-xs md:text-xl lg:text-lg xl:text-lg">The DEMO DAY to bring aboard investors and launch their projects</li>
            </div>
          
         
            </ul>
          </div>
        </div>

        <div className="flex-1 w-full sm:w-1/5 md:w-2/12 lg:w-1/2  max-w-full h-auto mx-auto mt-10 lg:mt-0">
          <img src={img1} alt="img1" className="w-full h-auto" />
        </div>
      </div>
      
      
      <div className="">
      <div className="text-center pt-10 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14">
      <h1 className="font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-20 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
        Our services
      </h1>
      <p className="pt-10 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 font-serif text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
        All-In-One Grain Chain Lab
      </p>
    </div>
     

    <div className="flex flex-wrap justify-center  mt-10">

   {/* Card 1 */}
<div className="p-4 max-w-xs sm:max-w-xs md:max-w-md lg:max-w-xs  hover:scale-105 duration-300">
  <div className="flex rounded-lg h-full bg-white overflow-hidden shadow-lg p-8 flex-col ">
    <div className="flex items-center mb-3">
      <div >
      <div className="p-5 flex justify-center items-center">
      <img src={card1} alt="card1" className=" rounded-lg  " />
    </div>
      </div>
      
    </div>
    <h2 className="text-blue-900 text-lg font-semibold  text-center pb-5">Learn the skill set to develop a blockchain application</h2>
    <div className="flex flex-col justify-between flex-grow">
      <p className="leading-relaxed text-base  text-gray-500 font-normal text-center">
      Attend live courses and workshops to obtain the necessary skills to turn your project ideas into viable business
      </p>
    
    </div>
  </div>
</div>

{/* Card 2 */}
<div className="p-4 max-w-xs  sm:max-w-xs md:max-w-md lg:max-w-xs  hover:scale-105 duration-300">
  <div className="flex rounded-lg h-full bg-white overflow-hidden shadow-lg p-8 flex-col ">
    <div className="flex items-center mb-3">
      <div >
      <div className="p-5 flex justify-center items-center">
      <img src={card2} alt="card1" className=" rounded-lg  " />
    </div>
      </div>
      
    </div>
    <h2 className="text-blue-900 text-lg font-semibold  text-center pb-5">Develop soft skills to manage your project</h2>
    <div className="flex flex-col justify-between flex-grow">
      <p className="leading-relaxed text-base  text-gray-500 font-normal text-center">
      A good manager needs a set of soft skills that help him run his business with ease
      </p>
    
    </div>
  </div>
</div>

{/* Card 3 */}
<div className="p-4 max-w-xs sm:max-w-xs md:max-w-md lg:max-w-xs  hover:scale-105 duration-300">
  <div className="flex rounded-lg h-full bg-white overflow-hidden shadow-lg p-8 flex-col ">
    <div className="flex items-center mb-3">
      <div >
      <div className="p-5 flex justify-center items-center">
      <img src={card3} alt="card1" className=" rounded-lg  " />
    </div>
      </div>
      
    </div>
    <h2 className="text-blue-900 text-lg font-semibold  text-center pb-5">Launch your project and start your journey as an entrepreneur</h2>
    <div className="flex flex-col justify-between flex-grow">
      <p className="leading-relaxed text-base text-gray-500 font-normal text-center">
      After gaining the necessary skills, it is time to crown your efforts with the launching of your project as a startup 
      </p>
    
    </div>
  </div>
</div>

</div>


   
   </div>
    </div>
<section id="service">
    <div className="">
    <div className=" text-center font-bold pt-20 text-2xl sm:text-2xl md:text-3xl lg:text4xl xl:text-4xl">
      <h1 className="mt-20 sm:mt-5 md:mt-10 lg:mt-20 mb-10  ">Our Blog and news</h1>
    </div>

    <div class="flex flex-wrap justify-around  pt-10  space-y-4 sm:space-y-4">
        <div
            class=" w-60   bg-white rounded-lg overflow-hidden shadow-lg  hover:scale-105 duration-300  flex flex-col justify-between leading-normal opacity-50 pt-12">
            <img src={new1} className='rounded-lg'/>
            <div class="mb-20">
                <div class="pb-10 text-left ">
                    <div className='mr-20'>
                <button className="text-white  bg-violet-900  rounded-full px-4  sm:px-9 md:px-7 mt-4 sm:mt-4 md:mt-5   ">
                    NEW
                  </button>
                  </div>
                    <p class="text-gray-800 font-medium text-xl mt-2  inline-block mx-2">
                    Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                   
                    <p class="text-gray-600 font-normal text-sm mx-2 mt-2">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <p className="underline font-normal text-sm  text-gray-600 mt-2 ">
                     Read more
                     </p>
                </div>
                
            </div>
        </div>

        <div
            class=" w-60   bg-white rounded-lg overflow-hidden shadow-lg  hover:scale-105 duration-300  flex flex-col justify-between leading-normal  ">
            <img src={new2}/>
            <div class=" mb-20">
                <div class="pb-10 text-left ">
                    <div className='mr-20'>
                <button className="text-white  bg-violet-900  rounded-full px-4  sm:px-9 md:px-7 mt-4 sm:mt-4 md:mt-5   ">
                    NEW
                  </button>
                  </div>
                    <p class="text-gray-800 font-medium text-xl mt-2  inline-block mx-2">
                    Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                   
                    <p class="text-gray-600 font-normal text-sm mx-2 mt-2">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <p className="underline font-normal text-sm  text-gray-600 mt-2 ">
                     Read more
                     </p>
                </div>
                
            </div>
        </div>

        <div
            class=" w-60   bg-white rounded-lg overflow-hidden shadow-lg  hover:scale-105 duration-300  flex flex-col justify-between leading-normal opacity-50 pt-10">
            <img src={new3} className='rounded-lg'/>
            <div class="mb-20">
                <div class="pb-10 text-left ">
                    <div className='mr-20'>
                <button className="text-white  bg-violet-900  rounded-full px-4  sm:px-9 md:px-7 mt-4 sm:mt-4 md:mt-5   ">
                    NEW
                  </button>
                  </div>
                    <p class="text-gray-800 font-medium text-xl mt-2  inline-block mx-2">
                    Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
                   
                    <p class="text-gray-600 font-normal text-sm mx-2 mt-2">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <p className="underline font-normal text-sm  text-gray-600 mt-2 ">
                     Read more
                     </p>
                </div>
                
            </div>
        </div>


    </div>

   </div>
   </section>

    </section>
    

<section id="contact">
<div>
<div className=" text-center font-bold text-2xl sm:text-3xl md:4xl lg:5xl pt-10"> 
  <h1>To contact us</h1>
</div>
<div className="flex flex-wrap justify-center items-center pt-20 space-x-10">
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[45%] p-2 pr-12">
    <img src={img2} alt="img2"></img>
  </div>


 

<div claasName="">
      <form className=" pr-10">
     
        
        <div className="mb-4">
          <div className="flex">
          <label className="block text-black font-serif text-sm  mb-2" htmlFor="name">
          Work email  
          </label>
          <GoNorthStar className="text-red-600 ml-2 w-3 h-3" />
          </div>
          <input
            className=" shadow appearance-none border-4 rounded-lg w-full py-1 sm:py-1 md:py-1 lg:py-4 px-6 sm:px-6 md:px-6 lg:px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-purple-700 "
            id="name"
            type="text"
            placeholder=""
          />
        </div>

        <div className="mb-4">
          <div className="flex">
          <label className="block text-black font-serif text-sm  mb-2" htmlFor="email">
            What's your name?
          </label>
          <GoNorthStar className="text-red-600 ml-2 w-3 h-3" />
          </div>
          <input
            className="shadow appearance-none border-4 rounded-lg w-full py-1 sm:py-1 md:py-1 lg:py-4 px-6 sm:px-6 md:px-6 lg:px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-purple-700"
            id="email"
            type="email"
            placeholder=""
          />
        </div>

        <div className="mb-4">
          <div className="flex">
          <label className="block text-sm font-serif text-black mb-2" htmlFor="message">
          What do you want to know? 
          </label>
          <GoNorthStar className="text-red-600 ml-2 w-3  h-3 " />
          </div>
          <textarea
            className="text-left shadow appearance-none  border-4 rounded-lg w-full py-2 sm:py-2 md:py-2 lg:py-8 px-6 sm:px-6 md:px-6 lg:px-14 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-purple-700"
            id="message"
            rows="5"
            placeholder="type here ..."
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-purple-700 text-xl border border-black   text-white  py-2  px-16 s rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>

</div>
</div>
</section>

  <div className="bg-[url('./assets/backgroundEnd.png')] bg-cover  bg-no-repeat  min-h-[calc(100vh+350px)] sm:min-h-[calc(100vh+550px)] md:min-h-[calc(100vh)] lg:min-h-[calc(100vh+350px)] bg-center  flex flex-col justify-end object-contain ">
  <div className="">

  <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-start sm:items-center md:items-center space-y-6 md:space-y-0 md:space-x-6 pb-10">
      <div className="w-full sm:w-1/5 md:w-1/3 lg:w-1/3 flex flex-col items-start space-y-2 ">
        <img src={logo} alt="logo" className="w-30  md:w-30 h-30  md:h-30" />
        <div className="lg:max-w-md">
        <p className="text-white text-xl sm:text-xl  pl-10 ">
          Grain Chain Lab is a Tunisian incubator that helps young entrepreneurs turn their brilliant ideas into successful startups on the blockchain networks.
        </p>
        </div>
      </div>
      <div className=" text-white text-xl font-normal space-y-2 ">
        <p className="">Information</p>
        <p>About Us</p>
        <p>Products</p>
        <p>Contact Us</p>
        <p>Terms of Service</p>
      </div>
      <div className="w-full sm:1/5 md:w-1/3 space-y-3">
        <div className="text-white ml-4 text-xl ">Follow us</div>
        <div className="flex space-x-4">
          <div className="bg-white rounded-full p-1">
            <FaLinkedinIn className="text-purple-900" />
          </div>
          <div className="bg-white rounded-full p-1">
            <TiSocialFacebook className="text-purple-900" />
          </div>
          <div className="bg-white rounded-full p-1">
            <AiOutlineTwitter className="text-purple-900" />
          </div>
          <div className="bg-white rounded-full p-1">
            <CiInstagram className="text-purple-900" />
          </div>
        </div>
      </div>
    </div>



  <div className="flex  flex-wrap justify-between items-center  content-end pt-5 sm:pt-5">
    <div className="flex pt-10 ">
    <div className="text-white ml-3 ">
    © Copyright 2023 Online 
    </div>
    <div className="text-white ml-3">contact@gcl.lab</div>
    </div>
    <div className="pr-4  pl-5 sm:pl-5 pt-5 sm:pt-5">
    <div className="text-white">NEWSLETTER</div>
   
    <div className="flex justify-between ">
    <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Enter you email address" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-sm"/>
        </div>
        <div>
          <MdOutlineEmail className="text-white pt-2  w-8 h-8"/>
        </div>

    </div>
    </div>
    
  </div>

 
  </div>
  </div>

  

    </div>
    </div>




  );
}

export default Header;
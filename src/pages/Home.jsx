import { FiDownload } from "react-icons/fi";
import { Button } from "@material-tailwind/react";
import Social from "../Components/social";
import Profile from "../Components/Profile";
import Stat from "../Components/stats"
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section className="">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          <div className="order-2 xl:order-none text-center lg:text-left">
            <div className="md:text-xl text-lg ">   <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-end Developer',
        2000,
        'UI/UX Designer',
        2000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    /></div>
       
            <h1 className="md:text-5xl text-4xl font-bold">
              Hello, I'm <br />
              <span className="md:text-5xl text-3xl font-bold text-accent mb-5">Jefrin Thomas Mathew</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white/80">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outlined" size="lg" className="uppercase border rounded-full px-9 py-2 border-accent hover:bg-accent-hover hover:text-black flex items-center gap-2 text-accent"> Download Cv <FiDownload/></ Button>
             <div className="mb-8 xl:mb-0"><Social  constainerStyle="flex gap-6 " iconsStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/></div>
            </div>
          </div>

           <div className="order-1 xl:order-none mb-8 xl:mb-0"><Profile/></div>     
          </div>
          
          <Stat/>

        </div>
        
      
    </section>
  );
};

export default Home;
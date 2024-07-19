import React from "react";
import profile from "../assets/Profile.png"
import {motion} from "framer-motion"
export default function Profile()    {
    return (
        <div className="w-full h-full relative ">
            <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{delay:0.2,duration:0.4,ease:"easeIn"}}
            >
                <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{delay:0.4,duration:0.4,ease:"easeInOut"}} className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten "> <img src={profile} alt="dp" /></motion.div>
           
            </motion.div>
           
        </div>
    )
    
}
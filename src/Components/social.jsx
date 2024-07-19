import React from "react";
import {FaGithub,FaLinkedinIn,FaTwitter,FaInstagram} from "react-icons/fa"
import { Link } from "react-router-dom";

const socials=[{icons:<FaGithub/> ,path:""},
    {icons:<FaLinkedinIn/>  ,path:""},
    {icons:<FaTwitter/>  ,path:""},
    {icons:<FaInstagram/> ,path:""}

]
export default function Social ({constainerStyle,iconsStyle}){
    
    return (
        <div className={constainerStyle}>
            {socials.map((items,index)=>{
                return <Link key={index} href={socials.path} className={iconsStyle}>{items.icons}</Link>
            })}
              </div> 
    )
}
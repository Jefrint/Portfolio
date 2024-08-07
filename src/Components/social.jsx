import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Jefrint" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jefrin-thomas-mathew-a1078922a/" },
 
  { icon: <FaInstagram />, path: "" },
];

export default function Social({ constainerStyle, iconsStyle }) {
  return (
    <div className={constainerStyle}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconsStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

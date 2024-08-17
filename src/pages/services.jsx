import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowDownRight } from 'react-icons/bs';
import Design from "../Components/design"

export default function Services() {
  const services = [
    {
      num: '1',
      title: "Front-End Developer",
      description: "ljfafk fi fijaoi ioji aj",
      href: "/frontend-developer"
    },
    {
      num: "2",
      title: "UI/UX Designer",
      description: "ljfafk fi fijaoi ioji aj",
      href: "/ui-ux-designer"
    },
    {
      num: "3",
      title: "Software Developer",
      description: "ljfafk fi fijaoi ioji aj",
      href: "/software-developer"
    },
  ];

  return (
    <section className="min-h-[80vh] flex mx-auto justify-center py-12 px-8">
     
      <div className="container max-w-[80rem] flex-col justify">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:pt-20"
        >
           <div className="absolute  z-0">
<Design />
      </div> 
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
  href={service.href}
  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45"
>
  <BsArrowDownRight className="text-primary text-3xl" />
</Link>

                </div>
                <h2 className="md:text-[42px] text-[25px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
  {service.title}
</h2>
<p className="text-white/60">{service.description}</p>
<div className="border-b border-white/20 w-full"></div></div>
              
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

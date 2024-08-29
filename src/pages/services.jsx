import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowDownRight } from 'react-icons/bs';
import Design from "../Components/design"

  export default function Services() {
    const services =[
      {
        num: '1',
        title: "Front-End Developer",
        description: "Specializes in creating responsive, user-friendly web interfaces using technologies like HTML, CSS, JavaScript, and frameworks such as React. Ensures optimal performance and accessibility across all devices.",
        href: "/frontend-developer"
      },
      {
        num: "2",
        title: "UI/UX Designer",
        description: "Expert in designing intuitive user interfaces and crafting seamless user experiences. Combines research, wireframing, prototyping, and visual design to create products that are both aesthetically pleasing and functional.",
        href: "/ui-ux-designer"
      },
      {
        num: "3",
        title: "Software Developer",
        description: "Develops robust, scalable software solutions across various platforms. Proficient in multiple programming languages and development frameworks, with a strong focus on clean code, performance, and maintainability.",
        href: "/software-developer"
      },
      {
        num: "4",
        title: "SEO Specialist",
        description: "Optimizes websites to rank higher in search engine results. Utilizes on-page and off-page SEO techniques, keyword research, content optimization, and link building strategies to drive organic traffic and improve visibility.",
        href: "/seo-specialist"
      }
    ]

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

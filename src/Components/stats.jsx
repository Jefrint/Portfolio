import React from "react";

import CountUp from 'react-countup';
const stat=[
    {num:1,
        text:"Year Of Experiance"
    },
    {num:10,
        text:"Project Completed"
    },
    {num:5,
        text:"Technologies Mastered"
    },
    {num:100,
        text:"Code Commits"
    }
]

export default function Stats(){
    return(
        <section>
            <div className="container mx-auto">
<div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
{stat.map((item,index)=>{
    return <div className=" flex-1 flex gap-4 items-center justify-center xl:justify-start">
        <CountUp end={item.num} duration={5} delay={2} className="text-3xl xl:text-6xl font-extrabold" />
        <p className={`${item.text.length < 20? "max-w-[100px]":"max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
    </div>
})}
</div>

            </div>
            
                    </section>
    )

}
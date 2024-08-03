import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () =>{
    return(
        <div className="py-20" id="">
            <h1 className="heading"> My
                <span className="text-purple"> Work Experience</span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card)=>(
                    <Button key={card.id}
                    borderRadius="1.75rem"
                    className="flex-1 text-white border-neutral-200 dark:border-slate-800">
                        <div>
                            <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16"/>
                        </div>
                    </Button>
                ))}


            </div>
            
        </div>
    )
}

export default Experience;
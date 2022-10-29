import React from "react";

interface ButtonProps{
    text:string,
    icon?:SVGElement
}
export default function Button({
    text,
    icon

} : ButtonProps){
    return(
        <div>
            <button
                className="bg-none outline rounded-3xl text-white-100 border-white-100 w-40 h-12 hover:text-blue-500 hover:bg-white-100 hover:outline-none text-base font-bold"
            >
                {text}
            </button>
        </div>
    )
}
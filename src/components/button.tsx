import React, { ReactNode, useEffect, useState } from "react";
import { BUTTON_SCHEME, COLOR, SIZE, VARIANT } from "../providers/constants/enums";



interface ButtonProps{
    text:string | ReactNode,
    icon?:SVGElement,
    scheme?:BUTTON_SCHEME | BUTTON_SCHEME.PRIMARY,
    variant?:VARIANT | VARIANT.OUTLINED,
    size?:SIZE | SIZE.MEDIUM
}

export default function Button({
    text,
    scheme=BUTTON_SCHEME.PRIMARY,
    variant=VARIANT.OUTLINED,
    size=SIZE.MEDIUM,
    icon
} : ButtonProps){

    const [css, setCss] = useState("");

    useEffect(() => {
        let finalCss = "";
        if(variant){
            switch(variant){
                case VARIANT.FILLED:
                    finalCss += ` bg-${COLOR.BLUE}`;
                    break;
                case VARIANT.OUTLINED:
                    finalCss += ` outline bg-none`;
                    break;     
            }
        }

        if(scheme){
            switch(scheme){
                case BUTTON_SCHEME.PRIMARY:
                    finalCss += "text-white-100 border-white-100 hover:text-blue-500 hover:bg-white-100 hover:outline-none"
                    break;
                case BUTTON_SCHEME.SECONDARY:
                    finalCss += "text-black-100 border-black-100"
                    break;
                case BUTTON_SCHEME.TERTIARY:
                    finalCss += " text-white-100 bg-blue-400"
                    break;           
            }
        }
        
        
        switch (size) {
            case SIZE.SMALL:
                finalCss+=` h-8 text-sm rounded-2xl`
                break;
            case SIZE.MEDIUM:
                finalCss+=` h-12 text-base rounded-3xl`
                break;
            case SIZE.LARGE_MID:
                finalCss+=` h-15 text-1xl rounded-4xl`
                break;
            
            case SIZE.LARGE:
                finalCss+=` h-16 text-2xl rounded-5xl`
                break;
        
            default:
                break;
        }
        setCss(finalCss)
        
    }, [scheme, variant])

    return(
        <div>
            <button 
                className={`${css} w-40 font-bold inline-block align-middle`}
            >
                {text}
            </button>
        </div>
    )
}

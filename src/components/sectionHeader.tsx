import React from "react";

interface SectionHeaderProps{
    title:string,
    isUnderlined?:boolean | true
}

export default function SectionalHeader({
    title,
    isUnderlined
}:SectionHeaderProps){
    return (
        <React.Fragment>
            <div>
                <div className="text-left text-3xl">
                    {title}
                </div>
                {
                    isUnderlined && 
                    (
                        <hr className="outline w-sectional-underline border-blue-400 outline-blue-400">
                        </hr>
                    )
                }
            </div>
        </React.Fragment>
    )
}
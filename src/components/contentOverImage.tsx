import React, { ReactNode } from "react";

interface CardContainerProps {
  imgURL:string;
  title:string;
  imgType:string;
  actionItem?:ReactNode
}

export default function ImageWithContent({
  imgURL,
  title,
  imgType,
  actionItem
}: CardContainerProps) {
  imgType="category-img";
  return (
    <React.Fragment>
      <div>
          <div className={`rounded-lg w-${imgType}`} >
            <img src={imgURL} className={`h-${imgType} m-2 pr-1 pl-1 mt-4 pt-4`}/>
            <h1 className="absolute text text-white-100 font-bold text-left ml-8 max-w-0 text-5xl -translate-y-64">
                {title}
                {actionItem}
            </h1>
          </div>
      </div> 
    </React.Fragment>
        
  );
}




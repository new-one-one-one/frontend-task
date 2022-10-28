import React, { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
  imgURL:string;
  title:string;
  subtitle?:string;
  price:string;
}

export default function ProductCard({
  children,
  imgURL,
  title,
  subtitle,
  price
}: CardContainerProps) {
  return (
    <React.Fragment>
      <div>
          <div className="rounded-lg w-card">
            <img src={imgURL} className="w-full h-card m-2 pr-1 pl-1 mt-4 pt-4"/>
            
            <div className="grid grid-rows-1 grid-flow-col text-right">
              <div className="grid-cols-1 text-left ml-3">
                  <div className="text-2xl  font-bold">
                    {title}
                  </div>                 
                <div className="text-xl text-grey-500"> {subtitle} </div>
              </div>
              <div className="grid-cols-1">
                  <div className="text-3xl">
                    <span className="text-base">$</span>{price}
                  </div>
              </div>
            </div>
          </div>
         
      </div> 
    </React.Fragment>
        
  );
}




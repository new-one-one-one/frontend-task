
import React, { ReactNode } from "react";
import Button from "./button";

interface BlogCardProps {
  children?:ReactNode | null,
  image?:string;
  title?:string;
  display?:string;
  actionBtnName?:string | null
}

export default function BlogCard({
  children,
  image,
  title,
  display,
  actionBtnName
}: BlogCardProps) {

    return (
    <React.Fragment>
        <div className={`w-blog-card-${display}`} >
            <img src={`${process.env.PUBLIC_URL}/images/blog/${image}`} className={`m-2 h-blog-card-${display} w-blog-card-sm pr-1 pl-1 mt-4 pt-4`}/>
            <h1 className="absolute text text-white-100 font-bold text-left ml-8 text-4xl -translate-y-40">
                {title}
                { actionBtnName && <Button text={actionBtnName}/> }
            </h1>
        </div>
    </React.Fragment>
        
  );
}





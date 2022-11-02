import React from "react";
import Button from "../components/button";
import ImageWithContent from "../components/contentOverImage";
import ProductCard from "../components/productCard";
import SectionalHeader from "../components/sectionHeader";
import BlogCard from "../components/blogCard";

import { blogs } from "../providers/data/blog";
import { categories } from "../providers/data/categories";
import { products } from "../providers/data/product";
import { quatity } from "../providers/data/quantity";
import {titles} from "./../providers/constants"
import { BUTTON_SCHEME, SIZE, VARIANT } from "../providers/constants/enums";
import Footer from "./Footer";
export const HomePage = () =>{
    return (
        <React.Fragment>
            <div className="flex justify-center items-center">
                <div className="grid grid-flow-row">
                        <div>
                            <div className="grid grid-cols-2 max-w-7xl md:grid-cols-2 gap-6">
                                {categories.map((category) => {
                                    return (
                                        <React.Fragment>
                                            <div>
                                                <ImageWithContent
                                                    title={category.name}
                                                    imgType={"category-img"}
                                                    imgURL={process.env.PUBLIC_URL+"/images/category/"+category.image}
                                                    actionItem={<Button text={category.action}/>}
                                                />
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                        
                        <div>
                            <div className="grid grid-flow-col max-w-7xl gap-0">
                                {
                                    quatity.map((current) => (
                                        <div className="h-count-card align-middle w-count-card hover:shadow-xl hover:border-none hover:text-blue-400">
                                            <div className="text text-4xl mt-24"> 
                                                {current.value}
                                            </div>
                                            <div className="text text-xl text-grey-500"> 
                                                {current.name}
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    
                        <div>
                            <div className="grid grid-cols-3 max-w-7xl md:grid-cols-3 gap-6">
                                {products.map((product) =>(
                                    <React.Fragment>
                                        <div>
                                            <ProductCard 
                                                imgURL={process.env.PUBLIC_URL+"/images/"+product.image}
                                                title={product.title}
                                                subtitle={product.category}
                                                price={product.price}
                                                
                                            >
                                            </ProductCard>
                                        </div> 
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <SectionalHeader
                                title={titles.our_blogs}
                                isUnderlined
                            />
                            <div className="grid grid-cols-2">
                                <div>
                                    <BlogCard {...blogs.stay_healthy}/>
                                </div>
                                <div className="grid">
                                    <div>
                                        <BlogCard {...blogs.workout_for_beginners} />
                                    </div>
                                    <div className="-translate-y-2">
                                        <BlogCard {...blogs.cardio_important} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className=" bg-black-900 h-subscribe-card ml-3">
                            <div className="grid grid-cols-3 gap-2 mt-28">
                                <div className="text text-white-100 col-span-2 font-bold text-left text-6xl ml-28">
                                    Subscribe to Our <br/> newletter.
                                </div>
                                <div className="col-span-1 mt-16">
                                    <Button
                                        text={"Subscribe"}
                                        scheme={BUTTON_SCHEME.TERTIARY}
                                        variant={VARIANT.FILLED}
                                        size={SIZE.LARGE_MID}
                                    />
                                </div>
                            </div>
                        </div>

                        
                </div>
            </div>
            <div className=" bg-grey-100 h-footer-section mt-24">
                <div className="p p-20">
                    <Footer/>
                </div>
                
            </div>
        </React.Fragment>
        
       
    )
}
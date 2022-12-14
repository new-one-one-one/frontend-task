import React from "react";
import Button from "../components/button";
import ImageWithContent from "../components/contentOverImage";
import ProductCard from "../components/productCard";
import SectionalHeader from "../components/sectionHeader";
import { categories } from "../providers/data/categories";
import { products } from "../providers/data/product";
import { quatity } from "../providers/data/quantity";

export const HomePage = () =>{
    return (
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
                <SectionalHeader
                    title="Our Brands"
                    isUnderlined
                />
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
            </div>
        </div>
       
    )
}
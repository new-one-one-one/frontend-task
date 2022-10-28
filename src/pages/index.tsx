import React from "react";
import ProductCard from "../components/productCard";
import { products } from "../providers/data/product";

export const HomePage = () =>{
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 max-w-7xl md:grid-cols-3 gap-6">
            {
                products.map((product) =>(
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
                ))
                }
                </div>
        </div>
       
    )
}
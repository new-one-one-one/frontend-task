import React from 'react'
import Button from '../../components/button'
import { pages, socialSiteIcons } from './content'

interface PAGE  {
    title:string,
    link:string
}

export default function Footer() {
  return (
    <React.Fragment>
        <div className='grid grid-flow-col'>
            <div className='grid grid-cols-2'>
                <div className='text text-6xl font-bold'>
                    Fitbit<span className="text-blue-400" >.</span>
                </div>
                <div></div>
                <div className='grid grid-flow-col gap-8 max-w-xs justify-center ml-6'>
                    {
                        socialSiteIcons.map((icon, ind) => (
                                <div>
                                <img src={icon}/>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
            <div>
                <div className='grid grid-cols-3 gap-5 max-w-5xl'>
                    {
                        pages.map((page:PAGE, ind) => (
                                <div className='text text-left text-1xl text-grey-500 font-semibold'>
                                    {page.title}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-8 text-base text-grey-500 font-semibold mt-48'>
            <div className="">
                {/* <div className="grid-cols-2"> */}
                <div className="text-start ml-28">
                    Copyright © 2022 Fitbit. All rights reserved.
                </div>

                {/* </div> */}
            </div>
            <div className="ml-44">
                <div className='grid grid-cols-3'>
                    <div>
                        Privacy Policy
                    </div>
                    <div>
                        Cookie Policy
                    </div>
                    <div>
                        Sitemap
                    </div>

                </div>
            </div>
            <div className="ml-44">
                <button className="p-2 bg-none text-center border-grey-500 outline rounded-3xl w-64 font-bold h-12">
                    United States 
                </button>            
            </div>
        </div>
    </React.Fragment>
   
    
  )
}

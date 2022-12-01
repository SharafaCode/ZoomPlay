import React from 'react'
import { useState } from 'react';
import BannerData from './bannerdata';
import './banner.css'

const Banners = () => {
    
    const [data, setData] = useState(BannerData)
    console.log(data);
  return (
    <section className='banner-section'>
        <article className='banner-article'>
          
            {
                data.map((item)=>{
                    const {id, imag} = item;
                    return(
                        <div className="banner" key={id}>
                            <div className="banners">
                                <img src={imag} alt="" />
                            </div>
                        </div>
                    )
                })
            }

        </article>
    </section>
  )
}

export default Banners
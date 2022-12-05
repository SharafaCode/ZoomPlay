import React from 'react'
import { useState } from 'react';
import BannerData from './bannerdata';
import './banner.css'

const Banners = () => {
    
    const [data, setData] = useState(BannerData);
    const [dataindex, setDataIndex] = useState(0)
    console.log(data);
  return (
    <section className='banner-section'>
        <article className='banner-article'>
          
            {
                data.map((item, index)=>{
                    const {id, imag} = item;
                    let position = "next-banner"
                    if(index === dataindex){
                        position = "active-banner"
                    }
                    if(index === BannerData.length - 1){
                        position = "last-banner"
                    }
                    return(
                        <div className={`banner`} key={id}>
                            <div className={`banners `}>
                                <img src={imag} alt="" className={`${position}`} />
                            </div>
                        </div>
                    )
                })
            }

            <div className='btn' onClick={()=> setDataIndex(dataindex + 1)}>
                <button>go</button>
            </div>

        </article>
    </section>
  )
}

export default Banners
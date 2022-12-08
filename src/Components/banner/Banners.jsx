import React from 'react'
import { useState } from 'react';
import BannerData from './bannerdata';
import './banner.css';

const Banners = () => {
    
    const [data, setData] = useState(BannerData);
    const [dataindex, setDataIndex] = useState(0)
 
  return (

    <section className='banner-section'>
        <article className='banner-article'>
            
            {
                data.map((item, index)=>{
                    const {id, name, desc} =item;
                    let position = 'next-banner'
                    if(index === 0){
                        position = 'active-banner'
                    }
                    if(index === BannerData.length -1){
                        position = 'last-banner'
                    }
                    return(
                        <div className={`banner-content ${position}`} key={id}>

                            <div className='artise-name'>
                                <h1>
                                    {name}
                                </h1>
                            </div>
                            <div className='artise-details'>
                                <p>
                                    {desc}
                                </p>
                            </div>
                            <div className='bttns'>
                                <button className='buttn'>PLAY</button>
                                <button className='buttn'>FOLLOW</button>
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
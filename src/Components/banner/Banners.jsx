import React from 'react'
import { useState } from 'react';
// import BannerData from './bannerdata';
import './banner.css'

const Banners = () => {
    
    // const [data, setData] = useState(BannerData);
    // const [dataindex, setDataIndex] = useState(0)
    // console.log(data);
  return (

    <section className='banner-section'>
        <article className='banner-article'>
            <div className="banner-content">
               <div className='artise-name'>
                <h1>
                    Wizkid
                </h1>
               </div>
               <div className='artise-details'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequuntur sit, corporis officiis optio molestias.
                </p>
               </div>
               <div className='bttns'>
                <button className='buttn'>PLAY</button>
                <button className='buttn'>DOWNLOAD</button>
               </div>
            </div>

        </article>
    </section>

  )
}

export default Banners
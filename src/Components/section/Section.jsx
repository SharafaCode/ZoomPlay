import React from 'react';
import './section.css';
import Header from '../header/Header';
import SideNav from '../sidenav/SideNav';
import Banner from '../banner/Banners'

const Section = () => {

  return (
    <section className='section-container'>
        <article className='section-wrapper'>
          <div>

            <Header/>
          </div>
          <div className='aside'>
            <SideNav/>
          </div>
            <div>
              <Banner/>
            </div>
            <div className="section-content">

            </div>
        </article>
    </section>
  )
}

export default Section
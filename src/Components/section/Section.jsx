import React from 'react'
import './section.css'
import Header from '../header/Header'
import SideNav from '../home/sidenav/SideNav';
import BG from '../../assets/Music-Image/bg.png'

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
            <div className="news-header">

              <div className='artist-news'>
                <div>
                  <h1>
                    Wizkid
                  </h1>
                </div>
                <div>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis esse dolores hic culpa placeat libero veritatis pariatur. Nesciunt, vel praesentium?</p>
                </div>
                <div className='news-btn'>
                  <button>PLAY</button>
                  <button>FOLLOW</button>
                </div>
              </div>
                
            </div>
            <div className="section-content">

            </div>
        </article>
    </section>
  )
}

export default Section
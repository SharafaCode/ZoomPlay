import React from 'react'
import Header from '../header/Header'
import SideNav from '../home/sidenav/SideNav'

const Section = () => {
  return (
    <section>
        <article>
          <div>

            <Header/>
          </div>
          <div>
            <SideNav/>
          </div>
            <div className="section-content">
              
            </div>
        </article>
    </section>
  )
}

export default Section
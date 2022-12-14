import React from 'react';
import './sidenav.css';
import { RiHome2Fill } from "react-icons/ri";
import {MdPerson, MdVideoLibrary } from "react-icons/md";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { HiRadio } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";


const SideNav = () => {
  return (
    <aside className='aside-container'>
      <article className='article-wrapper'>
        <div className="content-wrapper">

          <div className='links'>

          <a href="">
            <span className='icons active-icon'>
              < RiHome2Fill/>
            </span>
            <span className='active'>
              <h1>Home</h1>
            </span>
          </a>
          <a href="">
            <span className='icons'>
              <BsFillCollectionPlayFill/>
            </span>
            <span>
              <h1>
              PLaylist
              </h1>
            </span>
          </a>
          <a href="">
            <span className='icons'>
              <HiRadio/>
            </span>
            <span>
              <h1>
              Radio
              </h1>
            </span>
          </a>
          <a href="">
            <span className='icons'>
              <MdVideoLibrary/>
            </span>
            <span>
              <h1>

              Music Video
              </h1>
            </span>
          </a>
          <a href="">
            <span className='icons'>
              < MdPerson/>
            </span>
            <span>
              <h1>

              Profile
              </h1>
            </span>
          </a>
          <a href="">
            <span className='icons'>
              <IoLogOut />
            </span>
            <span>
              <h1>

              Logout
              </h1>
            </span>
          </a>
          </div>
        </div>

      </article>
    </aside>
  )
}

export default SideNav